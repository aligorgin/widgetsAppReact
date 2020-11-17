import React, {useState} from 'react';
import Link from './Link';
import './Link.css';

const navs = [
    {
        name: 'According',
        href: "/",
    },
    {
        name: 'Search',
        href: "/list",
    },
    {
        name: 'Dropdown',
        href: "/dropdown",
    },
    {
        name: 'Translate',
        href: "/translate",
    }
]


const Header = () => {

    const rerenderNav = navs.map(({name, href},i) => {
        return (
            <Link
                key={i}
                indexNav={i}
                href={href}
            >
                {name}
            </Link>
        );
    });

    return (
        <div className='ui secondary pointing menu main-nav'>
            {rerenderNav}
        </div>
    );
}

export default Header;