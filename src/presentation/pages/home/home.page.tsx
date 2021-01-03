import React from "react";
import './home.page.css';
import {IHomePage} from "./home.page.interface";
import {HomePageState} from "./home.page.state";
// @ts-ignore
import {ReactComponent as DeliveryIlustration} from "../../assets/illustrations/deliveries.svg";
import {TodayPage} from "../today/today.page";

export class HomePage extends React.Component{

    public state: HomePageState;

    constructor(props: IHomePage) {
        super(props);
        this.state = {
            today: 'buttonHeaderSelected',
            history: 'buttonHeader',
            profile: 'buttonHeader',
            page: TodayPage
        };
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className={this.state.today} onClick={() => this.changePage('today')}>
                        HOY
                    </div>
                    <div className={this.state.history} onClick={() => this.changePage('history')}>
                        HISTORIAL
                    </div>
                    <div className={this.state.profile} onClick={() => this.changePage('profile')}>
                        PERFIL
                    </div>
                </div>
                <div className="content">
                    <this.state.page/>
                </div>
                <div className="metrics">
                    <h2 className="metrics-info-title">TOTAL DE CAJAS</h2>
                    <h1 className="metrics-info-number">0</h1>
                </div>
                <DeliveryIlustration className="image" />
            </div>
        );
    }

    private changePage(page: string){

        switch (page){
            case 'today':
                this.setState({
                    today: 'buttonHeaderSelected',
                    history: 'buttonHeader',
                    profile: 'buttonHeader',
                    page: TodayPage
                })
                break;
            case 'history':
                this.setState({
                    today: 'buttonHeader',
                    history: 'buttonHeaderSelected',
                    profile: 'buttonHeader',
                    page: TodayPage
                })
                break;
            case 'profile':
                this.setState({
                    today: 'buttonHeader',
                    history: 'buttonHeader',
                    profile: 'buttonHeaderSelected',
                    page: TodayPage
                })
                break;
        }
    }

}