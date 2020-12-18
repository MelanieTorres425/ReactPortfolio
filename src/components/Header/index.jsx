import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = (props) => {

    const pathname = props.location.pathname.slice(1)
    let path;
    if (pathname === "React-Portfolio/project") {
        path = "Projects"
    } else if (pathname === "React-Portfolio/contact") {
        path = "Contact Me"
    } else {
        path = "Home"
    }
    return (
        <React.Fragment>
            <header>
                <h1 id="title">{path}</h1>
            </header>
        </React.Fragment>
    )

}

export default withRouter(Header)