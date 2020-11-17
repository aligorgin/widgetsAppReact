import './Link.css';
import React from 'react';

const Link = ({href, children, indexNav}) => {


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

        document.querySelectorAll('.main-nav > a.item').forEach((element, index) => {
            if (element.classList.contains('active-nav')) {
                element.classList.remove('active-nav');
            }

            if (index === indexNav) {
                element.classList.add('active-nav');
            }
        });
    };


    return (
        <a
            onClick={onClick}
            className={`item ${window.location.pathname === href ? 'active-nav' : null}`}
            href={href}
        >
            {children}
        </a>
    )
};

export default Link;