import React from 'react'
import Header from '../../components/shared/headerAdmin'
import { getAllEvents } from '../../services/get'
import './style.css'

class AllEvents extends React.Component {

    constructor() {
        super();
        this.state = { allEvents: [] };
    }

    componentDidMount = async () => {
        const get = await getAllEvents()
        this.setState({ allEvents: get.data })
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

                                <th class="th-sm">Nome</th>
                                <th class="th-sm">Data do evento</th>
                                <th class="th-sm">Detalhes</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.allEvents.map((res) => {
                                    return (
                                        <tr>
                                            <th scope="row">{res.name_event}</th>
                                            <td>{res.date_event}</td>
                                            <td><button class="btn btn-sm btn-grey" data-toggle="modal" data-target={`#modal-${res.id_event}`}>Detalhes</button></td>

                                        </tr>
                                    )
                                })
                            }
                            {
                                this.state.allEvents.map((res) => {
                                    return (
                                        <div class="modal fade" id={`modal-${res.id_event}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Descrição do evento {res.name_event}</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
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
                                                            <div className="mt-2">
                                                                <div class="md-form">
                                                                    <input type="text" id="responsavel" class="form-control" />
                                                                    <label for="responsavel">Nome do responsável</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-outline-danger waves-effect" data-dismiss="modal">Recusar</button>
                                                        <button type="button" class="btn btn-outline-success waves-effect">Salvar</button>
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
