import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'danish',
        value: 'da',
    },
    {
        label: 'frisian',
        value: 'fi'
    },
    {
      label: 'persian',
      value: 'fa'
    },
    {
        label: 'french',
        value: 'fr'
    },
    {
        label: 'greek',
        value: 'el'
    },
    {
        label: 'zulu',
        value: 'zu'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div className='ui form'>
                <label className='label'>Search</label>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div>
                    <Dropdown
                        label='Pick a Language'
                        options={options}
                        selected={language}
                        onSelectChange={setLanguage}
                    />
                    <hr/>
                    <div className='ui header'>Output</div>
                    <Convert text={text} language={language}/>
                </div>
            </div>
        </div>
    )
        ;
}

export default Translate;