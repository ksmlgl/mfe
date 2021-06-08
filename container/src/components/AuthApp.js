import React, { useRef, useEffect } from 'react'
import { mount } from 'auth/AuthApp'
import { useHistory } from 'react-router-dom'

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                if (history.location !== nextPathname) {
                    history.push(nextPathname);
                }
            },

            onSignIn: () => {
                console.log("User sign in");
            },
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />;

};