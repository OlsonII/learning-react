import React from "react";
import './home.page.css';

export class HomePage extends React.Component{


    render() {
        return (
            <div className="container">
                <div className="panels-container">
                    <div className="right-panel"></div>
                    <div className="left-panel"></div>
                </div>
            </div>
        );
    }

}