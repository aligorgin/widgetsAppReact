import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Convert = ({text, language}) => {
    const [translated, setTranslated] = useState("");
    const [debouncedText , setDebouncedText ]=useState(text);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedText(text)
        },500);

        return ()=>{
            clearTimeout(timerId)
        }
    },[text])

    useEffect(() => {
        const doTranslations = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })

            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslations();
    }, [debouncedText, language]);

    return <h1 className='ui header'>
        {translated}
    </h1>
}

export default Convert;