import './Link.css';
import React from 'react';

const Link = ({href, children}) => {

    const onClick = (event) => {

        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        // to communicate over to those route
        // components that the url has just changed (detecting navigation)
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} className='item' href={href}>
            {children}
        </a>
    )
};

export default Link;