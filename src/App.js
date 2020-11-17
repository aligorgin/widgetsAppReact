import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from './components/Header'

const items = [
    {
        title: 'what is react ?',
        content: "a javascript for building user interface"
    },
    {
        title: 'why react ?',
        content: 'cause we reusable components we can build complex websites'
    },
    {
        title: 'what can react do ?',
        content: "React Native uses UI elements written in React. js that can generate native iOS and Android interface components, such as buttons and animations"
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shades of blue',
        value: 'blue'
    }

]

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header/>
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectChange={setSelected}
                    label='select a color'
                />
            </Route>
            <Route path='/translate'>
                <Translate/>
            </Route>
        </div>
    );
};
