import React from 'react'
import Header from '../../components/shared/headerUsers'
import imgRegister from '../../assets/images/registerEvent.svg'
import './HomeUser.css'
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

export default class HomeUser extends React.Component {
    constructor() {
        super();
        this.onChangeNameEvent = this.onChangeNameEvent.bind(this);
        this.onChangeDescriptionEvent = this.onChangeDescriptionEvent.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDateEvent = this.onChangeDateEvent.bind(this);
        this.onChangeCoffe = this.onChangeCoffe.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {

            postEvento: {
                name_event: "",
                description_event: "",
                category: "",
                date_event: "",
                coffe: ""
            },
        }
    }

    onChangeNameEvent(e) {
        this.setState({ name_event: e.target.value })
    }

    onChangeDescriptionEvent(e) {
        this.setState({ description_event: e.target.value })
    }

    onChangeCategory(e) {
        this.setState({ id_category: e.target.value })
    }
    onChangeDateEvent(e) {
        this.setState({ date_event: e.target.value })
    }
    onChangeCoffe(e) {
        this.setState({ coffe: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const event = {
            name_event: this.state.name_event,
            description_event: this.state.description_event,
            id_category: this.state.id_category,
            date_event: this.state.date_event,
            coffe: this.state.coffe,
            id_user: 1

        };

        Axios.post(`http://localhost:8080/event`, event)
            .then((res) => {
                toast.success('Evento criado, aguarde pra ser aprovado');
                console.log(res.data)
            }).catch((error) => {
                toast.error(error);
                console.log(error)
            });
    }
    render() {
        return (
            <div>
                <Header />
                <ToastContainer />
                <div class="container mt-5 padding">
                    <div class="row">
                        <div className="col-6">
                            <img className="img-fluid" src={imgRegister} alt="imagem de cadastro de evento" />
                        </div>
                        <div className="col-6 mt-3">
                            <h2>Cadastre um evento</h2>
                            <form onSubmit={this.onSubmit} >
                                <input type="text" placeholder="Nome do evento" name="name_event" onChange={this.onChangeNameEvent} />
                                <input type="text" placeholder="Descrição do evento" name="description_event" onChange={this.onChangeDescriptionEvent} />
                                <select name="id_category" onChange={this.onChangeCategory}>
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <input type="date" placeholder="Data do evento" name="date_event" onChange={this.onChangeDateEvent} />

                                <h3>Coffe ?</h3>
                                <div class="row ml-auto">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="coffeSim" name="coffe" value="sim"onChange={this.onChangeCoffe} />
                                        <label class="custom-control-label" for="coffeSim">Sim</label>
                                    </div>
                                    <div class="custom-control custom-checkbox ml-md-5">
                                        <input type="checkbox" class="custom-control-input" name="coffe" id="coffeNao" value="nao" onChange={this.onChangeCoffe} />
                                        <label class="custom-control-label" for="coffeNao">Não</label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-dark ml-auto btn-sm mt-3">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}