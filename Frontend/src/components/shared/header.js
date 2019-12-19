import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './style.css'

class header extends React.Component {
    componentDidMount() {
        if (window.innerWidth <= 1024) {
            let container = document.getElementById("navbarText")
            container.classList.remove('container')
        }
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-redeasy">
                <Link to="/" clLinkssName="w"><img src={logo} className="logo img-fluid" alt="logo" /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse container" id="navbarText">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                            <Link id="nav-link" className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mr-5">
                            <Link id="nav-link" className="nav-link ml-4" to="/Register">Cadastre-se / Login</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default header
