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
                    <h2 className="text-center mb-5 ">Todos os eventos</h2>
                    <table id="dtBasicExample" className="table text-center" cellspacing="0" width="100%">
                        <thead className="black white-text">
                            <tr>

                                <th class="th-sm">Nome</th>
                                <th class="th-sm">Data do evento</th>
                                <th class="th-sm">Status</th>
                                <th class="th-sm">Responsavel</th>
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
                                            <td>{res.id_active}</td>
                                            <td>{res.id_responsible}</td>
                                            <td><button class="btn btn-sm btn-grey">Detalhes</button></td>

                                        </tr>

                                    )
                                })
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
export default AllEvents
