import React from "react";
import './login.page.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// @ts-ignore
import {ReactComponent as RegisterIllustration} from "../../assets/illustrations/register-car.svg";
// @ts-ignore
import {ReactComponent as LoginIllustration} from "../../assets/illustrations/desk-illustration.svg";
import {
    faUser,
    faLock,
    faPhoneAlt,
    faStreetView,
    faIdCard
} from "@fortawesome/free-solid-svg-icons"
import {
    faFacebookF,
    faGoogle,
    faTwitter
} from "@fortawesome/free-brands-svg-icons"
import {LoginPageState} from "./login.page.state";
import {ILoginPage} from "./login.page.interface";

export class LoginPage extends React.Component{

    state: LoginPageState;

    constructor(props: ILoginPage) {
        super(props);
        this.state = {
            mode: 'sign-in-mode'
        }
    }

    render() {
        return (
            <div className="container">
                <div className="signin-signup">

                    <form action="" className="sign-in-form">
                        <h2 className="title">Iniciar Sesion</h2>

                        <div className="input-field">
                            <i><FontAwesomeIcon icon={faUser}/></i>
                            <input type="text" placeholder="Identificacion"/>
                        </div>

                        <div className="input-field">
                            <i><FontAwesomeIcon icon={faLock}/></i>
                            <input type="password" placeholder="Contraseña"/>
                        </div>

                        <input type="submit" value="Iniciar Sesion" className="buttonHeader solid"/>
                        <p className="social-text">O inicie sesion con una red social</p>
                        <div className="social-media">
                            <a href="/" className="social-icon">
                                <i><FontAwesomeIcon icon={faFacebookF}/></i>
                            </a>
                            <a href="/" className="social-icon">
                                <i><FontAwesomeIcon icon={faGoogle}/></i>
                            </a>
                            <a href="/" className="social-icon">
                                <i><FontAwesomeIcon icon={faTwitter}/></i>
                            </a>
                        </div>
                    </form>

                    <form action="" className="sign-up-form">
                        <h2 className="title">Registro</h2>

                        <div className="input-field">
                            <i><FontAwesomeIcon icon={faIdCard}/></i>
                            <input type="text" placeholder="Identificacion"/>
                        </div>

                        <div className="input-field">
                            <i><FontAwesomeIcon icon={faUser}/></i>
                            <input type="text" placeholder="Nombre"/>
                        </div>

                        <div className="input-field">
                            <i><FontAwesomeIcon icon={faStreetView}/></i>
                            <input type="text" placeholder="Direccion"/>
                        </div>

                        <div className="input-field">
                            <i><FontAwesomeIcon icon={faPhoneAlt}/></i>
                            <input type="text" placeholder="Telefono"/>
                        </div>

                        <input type="submit" value="Registrarme" className="buttonHeader solid"/>
                        <p className="social-text">O registrarme con una red social</p>
                        <div className="social-media">
                            <a href="/" className="social-icon">
                                <i><FontAwesomeIcon icon={faFacebookF}/></i>
                            </a>
                            <a href="/" className="social-icon">
                                <i><FontAwesomeIcon icon={faGoogle}/></i>
                            </a>
                            <a href="/" className="social-icon">
                                <i><FontAwesomeIcon icon={faTwitter}/></i>
                            </a>
                        </div>
                    </form>

                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Nuevo aqui?</h3>
                            <p>...</p>
                            <button className="buttonHeader transparent" onClick={() => this.toSignUpForm()}>Registrarme</button>
                        </div>
                        <RegisterIllustration className="image"/>
                    </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Ya es uno de nosotros?</h3>
                            <p>...</p>
                            <button className="buttonHeader transparent" onClick={() => this.toSignInForm()}>Iniciar sesion</button>
                        </div>
                        <LoginIllustration className="image"/>
                    </div>
                </div>
            </div>
        );
    }

    toSignInForm(){
        // @ts-ignore
        document.querySelector(".container").classList.remove("sign-up-mode");
        this.setState({
            mode: 'sign-in-mode'
        })
    }

    toSignUpForm(){
        // @ts-ignore
        document.querySelector(".container").classList.add("sign-up-mode");
        this.setState({
            mode: 'sign-up-mode'
        })
    }
}