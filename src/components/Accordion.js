import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState([null])

    const onTitleClick = (index) => {
        setActiveIndex(index)
    };

    const [results,setResults] = useState('');

    const rendered = items.map((item, index) => {
        const active = activeIndex === index ? 'active' : '';

        return (
            // for prevent a bold border on top we use fragment to implement key
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    // we use it this way to prevent call the function as soon as we refresh the site
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );

    })

    return <div className='ui styled accordion'>
        {rendered}
    </div>
}

export default Accordion;