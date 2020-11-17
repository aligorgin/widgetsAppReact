import {useEffect, useState} from 'react';

const Route = ({path, children}) => {

    // to update the rout component for getting currentPath (only job for this state)
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        //The popstate event of the Window interface is fired when the active history
        // entry changes while the user navigates the session history.
        // (do onLocationChange when url has been changed)
        window.addEventListener('popstate', onLocationChange);

        // if we were decide to stop showing the rout component
        // on the screen , we want to clean up that event
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

    return currentPath === path ? children : null;
}

export default Route;