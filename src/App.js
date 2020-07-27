
import React, { Component } from "react";

import './App.css'
class App extends Component {
    render() {
        let mp4_link = "./Videos/rob.mp4";
        return (
            <div >
                <div className="section">
                    <h1>Just Work IT</h1>
                    <button id="myBtn" >START</button>

                    <div className="video-container">
                        <div className="color-overlay"></div>

                        <video src={mp4_link} type="video/mp4" id="myVideo" autoPlay muted loop width="800" height="960"/>
                    </div>

                </div>
            </div>

        )
    }
}

export default App;
