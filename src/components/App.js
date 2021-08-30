import React, { Component } from "react";

import '../styles/App.css';

const text = 'test styles';

class App extends Component {
    render() {
        return (
            <div>
                <h1>{text}</h1>
            </div>
        );
    }
}

export default App;
