import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState("programming");
    const [deboucedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    // for track the words and prevent request to server in every word
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    // for rerender component when term changed we need use effect
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get("http://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: deboucedTerm
                }
            });

            setResults(data.query.search);
        };

        if (deboucedTerm) {
            search();
        }
    }, [deboucedTerm])


    const rerenderResult = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.com?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">{result.title}</div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
            </div>
        )
    })

    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Search term</label>
                <input
                    value={term}
                    onChange={event => setTerm(event.target.value)}
                    className='input'
                />
            </div>
            <div className="ui celled list">{rerenderResult}</div>
        </div>
    );
}

export default Search;
