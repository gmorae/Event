import React from 'react'
import { Link } from 'react-router-dom'
import './headerUsers.css'
import { ToastContainer, toast } from 'react-toastify';

class headerUsers extends React.Component {

    logout() {
        localStorage.clear();
        toast.error(`Volte sempre`);
        window.location.href = '/';
    }

    render() {
        return (
            <div>
                <ToastContainer />
                <div class="area"></div><nav class="main-menu">
                    <ul>
                        <li>
                            <Link to="/user">
                                <i class="fa fa-home fa-2x"></i>
                                <span class="nav-text">
                                    Home
                                </span>
                            </Link>

                        </li>
                        <li class="has-subnav">
                            <Link to="/MyEvents">
                                <i class="fa fa-check fa-2x"></i>
                                <span class="nav-text">
                                    Meus eventos aprovados
                                </span>
                            </Link>
                        </li>
                        <li class="has-subnav">
                            <Link to="EventsPending">
                                <i class="fa fa-calendar fa-2x"></i>
                                <span class="nav-text">
                                    Meus eventos pendentes
                                </span>
                            </Link>
                        </li>
                    </ul>

                    <ul class="logout">
                        <li>
                            <Link onClick={this.logout.bind(this)} href="/">
                                <i class="fa fa-power-off fa-2x"></i>
                                <span class="nav-text">
                                    Logout
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default headerUsers