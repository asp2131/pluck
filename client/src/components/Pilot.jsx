import React, { Component } from 'react';
import ButtonAppBar from "./Nav";
import ComposedTextField from "./Zip-code"

class  App extends Component {
 
    render() { 
        return <div>
            <nav className="navbar">
                <div className="col-md-6 offset-md-3">
                <ButtonAppBar />
                <div className="space-div"></div>
                    <img className="logo-body" src={require('./PLUCK-logo-02.png')} />
                    <ComposedTextField />
                </div>
            </nav>
        </div>
    }
}
 
export default App;