import React from 'react'
import { Link } from 'react-router-dom'
import './headerUsers.css'
import auth from '../../services/auth'

class headerAdmin extends React.Component {

    logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    render() {
        return (
            <div>
                <div class="area"></div><nav class="main-menu">
                    <ul>

                        <li>
                            <Link to="/admin">
                                <i class="fa fa-home fa-2x"></i>
                                <span class="nav-text">
                                    Home
                                </span>
                            </Link>

                        </li>
                        <li class="has-subnav">
                            <Link to="/Category">
                                <i class="fa fa-paste fa-2x"></i>
                                <span class="nav-text">
                                    Category
                                </span>
                            </Link>
                        </li>
                        <li class="has-subnav">
                            <Link to="/AllEvents">
                                <i class="fa fa-calendar fa-2x"></i>
                                <span class="nav-text">
                                    Todos os eventos
                                </span>
                            </Link>
                        </li>
                        <li class="has-subnav">
                            <Link to="/ApprovedEvents">
                                <i class="fa fa-check fa-2x"></i>
                                <span class="nav-text">
                                    Eventos aprovados
                                </span>
                            </Link>
                        </li>
                        <li class="has-subnav">
                            <Link to="/DeclineEvents">
                                <i class="fa fa-times fa-2x"></i>
                                <span class="nav-text">
                                    Eventos rejeitados
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Employees">
                                <i class="fa fa-user fa-2x"></i>
                                <span class="nav-text">
                                    Funcionários
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="Community">
                                <i class="fa fa-users fa-2x"></i>
                                <span class="nav-text">
                                    Comunidade
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

export default headerAdmin