import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({options, selected, onSelectChange, label}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current !== null) {
                if (ref.current.contains(event.target)) {
                    return;
                }
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const rerenderOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                className='item'
                onClick={() => {
                    onSelectChange(option)
                }}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div>
            <div ref={ref} className='ui form'>
                <div className="field">
                    <label className='Label'>{label}</label>
                    <div
                        onClick={() => {
                            setOpen(!open);
                        }}
                        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                        <i className="dropdown icon"/>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {rerenderOptions}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;