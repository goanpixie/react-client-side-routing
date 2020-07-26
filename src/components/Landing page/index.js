import React from 'react';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function BasicExample(){
    return(
        <Router>
            <div>
                <ul>
                    <li><Link to = "/">Home</Link>
                    </li>
                    <li><Link to ="/books">Books</Link>
                    </li>
                    <li><Link to ="/games">Games</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/books">
                        <Books/>
                    </Route>
                    <Route path="/games">
                        <Games/>
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}

function Home(){
    return(
        <div>
            <h2>Home</h2>
        </div>
    )
}

function Books(){
    return(
        <div>
            <h2>Books</h2>
        </div>
    )
}

function Games(){
    return(
        <div>
            <h2>Games</h2>
        </div>
    )
}



