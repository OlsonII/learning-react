import React from "react";
import {TodayPageState} from "./today.page.state";
import {ITodayPage} from "./today.page.interface";
import './today.page.css';

export class TodayPage extends React.Component{

    public state: TodayPageState;

    constructor(props: ITodayPage) {
        super(props);
        this.state= {}
    }

    render() {
        return (
            <div>
                <div className="title">
                    <h2>ENCARGOS</h2>
                </div>
                <div className="card-container">
                    <div className="card first-type">
                        <div className="card-image"></div>
                        <div className="content-info">
                            <p>DESCRIPCION</p>
                            <h2>0</h2>
                        </div>
                    </div>
                    <div className="card second-type">
                        <div className="card-image"></div>
                        <div className="content-info">
                            <p>DESCRIPCION</p>
                            <h2>0</h2>
                        </div>
                    </div>
                    <div className="card third-type">
                        <div className="card-image"></div>
                        <div className="content-info">
                            <p>DESCRIPCION</p>
                            <h2>0</h2>
                        </div>
                    </div>
                    <div className="card four-type">
                        <div className="card-image"></div>
                        <div className="content-info">
                            <p>DESCRIPCION</p>
                            <h2>0</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}