import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/shared/header'
import img from '../../assets/images/about.svg'
import './Home.css'
import { getAllEvents } from '../../services/get'
class Home extends React.Component {
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
                <div className="morpheus-den-gradient">
                    <Header />

                    <section className="white-text banner ">
                        <div className="container pt-5">
                            <div className="row pr-lg-5">
                                <div className="col-md-7 mb-4 mt-5">
                                    <div className="view">
                                        <img src={img} className="img-fluid" alt="smaple img" />
                                    </div>
                                </div>
                                <div className="col-md-5 d-flex align-items-center mb-3">
                                    <div>
                                        <h1 className="h1-responsive font-weight-bold text-uppercase space">Bem-vindo a easy talk</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adip elit. Maiores deleniti explicabo voluptatem quisquam nulla asperiores aspernatur aperiam voluptate et consectetur minima delectus, fugiat eum soluta blanditiis adipisci, velit dolore magnam.</p>
                                        <Link className="btn btn-defaulttt text-white radius" data-toggle="modal" data-target="#ModalSobre">Saiba Mais</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
                <div class="container">
                    <div className="text-center mt-5 mb-5">
                        <h2>Agenda</h2>
                    </div>
                    <div className="col-12">

                        <div class="card-deck">
                            {
                                this.state.allEvents.map((res) => {
                                    return (
                                        <div className="col-sm-12 col-md-4">
                                            <div className="card hoverable mb-4 col-12" key={res.id_event}>
                                                <div className="card-body" >
                                                    <h4 className="card-title">{res.name_event}</h4>
                                                    <p className="card-text">{res.description_event}</p>
                                                    <p className="card-text">{res.date_event}</p>
                                                    <Link className="btn btn-defaulttt text-white radius" data-toggle="modal" data-target={`#modal${res.id_event}`}>Detalhes</Link>
                                                </div>
                                            </div>
                                            <div class="modal fade" id={`modal${res.id_event}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                                aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Detalhes sobre a empresa</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                <div class="modal fade" id="ModalSobre" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Detalhes sobre a empresa</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Home
