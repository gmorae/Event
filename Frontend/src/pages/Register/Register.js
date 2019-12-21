import React from 'react'
import Header from '../../components/shared/header'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { parseJwt } from '../../services/auth';

//import { login } from "../../services/auth";
import api from "../../services/api";

import 'react-toastify/dist/ReactToastify.css';
import './Register.css'
class Register extends React.Component {

    constructor() {
        super();
        this.state = {

            postUser: {
                name_user: "",
                password_user: "",
                phone_user: "",
                email_user: "",
            },
            postLogin: {
                email_user: "",
                password_user: ""
            }
        }

    }
    handleSignUp = async e => {
        e.preventDefault();

        const { name_user, email_user, password_user, phone_user } = this.state;
        if (!name_user || !email_user || !password_user || !phone_user) {
            toast.error("Preencha todos os dados para se cadastrar");
        } else {
            try {
                await api.post("/user", { name_user, email_user, password_user, phone_user });
                this.props.history.push('/Register');
                toast.success("Cadastrado com sucesso, faça login para acessar sua conta");

            } catch (err) {
                console.log(err);
                toast.error("Ocorreu um erro ao registrar sua conta.");
            }
        }
    };
    handleSignIn = async e => {
        e.preventDefault();
        const { email_user, password_user } = this.state;
        if (!email_user || !password_user) {
            toast.error("Preencha e-mail e senha para continuar!");
        } else {
            try {
                const response = await api.post("/login", { email_user, password_user });
                console.log(response.data);
                console.log("Retorno do login - JSON: ", response);
                localStorage.setItem("usuario-easyTalk", response.data.token);
                this.setState({ isLoading: false })
                if (parseJwt().user.id_type_user === 1) {
                    this.props.history.push('/Admin');
                } else {
                    this.props.history.push('/User');
                }

            } catch (err) {
                toast.error("Houve um problema com o login, verifique suas credenciais.");
            }
        }
    }
    componentDidMount() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        const nav_link = document.getElementById('nav-link')

        signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
        signUpButton.addEventListener('click', () => nav_link.classList.add('black-text'));

        signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));
        signInButton.addEventListener('click', () => nav_link.classList.remove('black-text'));

    }
    render() {
        return (
            <div >
                <ToastContainer />
                <Header />
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form onSubmit={this.handleSignUp}>
                            <h1 className="mb-2">Criar conta</h1>
                            <input type="text" placeholder="Nome completo" name="name_user" onChange={e => this.setState({ name_user: e.target.value })} />
                            <input type="email" placeholder="Email" name="email_user" onChange={e => this.setState({ email_user: e.target.value })} />
                            <input type="text" placeholder="Telefone" name="phone_user" onChange={e => this.setState({ phone_user: e.target.value })} />
                            <input type="password" placeholder="Senha" name="password_user" onChange={e => this.setState({ password_user: e.target.value })} />
                            <button className="btn btn-defaultttl text-white radius" type="submit">Cadastrar</button>
                        </form>
                    </div>

                    <div class="form-container sign-in-container">
                        <form onSubmit={this.handleSignIn}>
                            <h1>Login</h1>
                            <input type="email" placeholder="Email" name="email_user" onChange={e => this.setState({ email_user: e.target.value })} />
                            <input type="password" placeholder="Senha" name="password_user" onChange={e => this.setState({ password_user: e.target.value })} />
                            <Link>Esqueceu a senha ?</Link>

                            <button type="submit" className="btn btn-defaultttl text-white radius">Login</button>
                        </form>
                    </div>

                    <div class="overlay-container none_mobile">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Olá</h1>
                                <p>Faça login na sua conta</p>
                                <Link id="signIn" className="btn btn-defaulttt text-white radius" data-toggle="modal" data-target="#ModalSobre">Login</Link>

                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Bem-vindo !</h1>
                                <p>Não possui uma conta?<br /> Junte-se a nós</p>
                                <Link id="signUp" className="btn btn-defaulttt text-white radius" data-toggle="modal" data-target="#ModalSobre">Cadastre-se</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Register