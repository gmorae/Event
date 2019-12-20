import React from 'react'
import Header from '../../components/shared/headerAdmin'
import { getAllEvents } from '../../services/get'
import './style.css'
import Axios from 'axios';

class AllEvents extends React.Component {

    constructor() {
        super();
        this.state = {
            allEvents: [],
            editarModal: {
                id_user: '',
                id_responsible: '',
                id_active: ''
            }
        };

    }

    componentDidMount = async () => {
        const get = await getAllEvents()
        this.setState({ allEvents: get.data })
    }

    alterarUsuario() {
        this.setState({
            editarModal: {
                id_event: this.state.allEvents.id_event,
                id_active: this.state.allEvents.id_active,
                id_responsible: this.state.allEvents.id_responsible,  
            }
        })

        this.toggle();
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container mt-5 padding">
                    <h2 className="text-center mb-5 ">Eventos pendentes</h2>
                    <table id="dtBasicExample" className="table text-center" cellspacing="0" width="100%">
                        <thead className="black white-text">
                            <tr>

                                <th className="th-sm">Nome</th>
                                <th className="th-sm">Data do evento</th>
                                <th className="th-sm">Detalhes</th>
                                <th className="th-sm">Reprovar</th>
                                <th className="th-sm">Aprovar</th>


                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.allEvents.map((res) => {
                                    return (
                                        <tr>
                                            <th scope="row">{res.name_event}</th>
                                            <td>{res.date_event}</td>
                                            <td><button className="btn btn-sm btn-grey" data-toggle="modal" data-target={`#modal-${res.id_event}`}>Detalhes</button></td>
                                            <td><button type="button" className="btn btn-sm btn-outline-danger waves-effect" data-dismiss="modal">Recusar</button></td>
                                            <td><button type="button" data-toggle="modal" data-target={`#aprova-${res.id_event}`} className="btn btn-sm btn-outline-success waves-effect">Aprovar</button></td>

                                        </tr>
                                    )
                                })
                            }
                            {
                                this.state.allEvents.map((res) => {
                                    return (
                                        <div className="modal fade" id={`modal-${res.id_event}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Descrição do evento {res.name_event}</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="container text-left">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <h6>Nome do evento </h6><p>{res.name_event}</p>
                                                                    <h6>Categoria </h6><p>{res.name_category}</p>
                                                                </div>
                                                                <div className="col-6">
                                                                    <h6>Data do evento </h6><p>{res.date_event}</p>
                                                                    <h6>Coffe </h6><p>{res.coffe}</p>
                                                                </div>
                                                            </div>
                                                            <h6>Descrição</h6><p>{res.description_event}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {
                                this.state.allEvents.map((res) => {
                                    return (
                                        <div className="modal fade" id={`aprova-${res.id_event}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Aprovar evento</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>
                                                            <div class="md-form">
                                                                <input type="text" id="form1" class="form-control" />
                                                                <label for="form1">Coloque o nome do responsável</label>
                                                            </div>
                                                            <button type="submit" class="btn btn-success btn-sm text-rigth">Aprovar</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                </div>
            </div >
        )
    }
}
export default AllEvents
