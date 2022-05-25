import {
    BrowserRouter,
    Switch,
    Route,
    useHistory,
    withRouter
} from "react-router-dom";
import React from 'react';
function Test(props) {

    let history = useHistory();

    return (
        <React.Fragment>
            <h1>home page</h1>
            <button onClick={() => { history.push('/resume') }}>CLICK ME</button>
        </React.Fragment>
    )
}

export default Test;