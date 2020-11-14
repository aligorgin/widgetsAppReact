import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({options, selected, onSelectChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            console.log('body clicked',ref.current,event.target)
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
                    console.log('item clicked');
                    onSelectChange(option)
                }}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className='ui form'>
            <div className="field">
                <label className='Label'>Select a Color</label>
                <div
                    onClick={() => {
                        console.log('dropdown clicked');
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
    );
}

export default Dropdown;