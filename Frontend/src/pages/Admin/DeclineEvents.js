import React from 'react'
import Header from '../../components/shared/headerAdmin'
import { getDeclineEvents } from '../../services/get'
import './style.css'
import { format } from 'date-fns'

class DeclineEvents extends React.Component {

    constructor() {
        super();
        this.state = { DeclineEvents: [] };
    }

    componentDidMount = async () => {
        const get = await getDeclineEvents()
        this.setState({ DeclineEvents: get.data })
    }

    

    render() {
        return (
            <div>
                <Header />
                <div className="container mt-5 padding">
                    <h2 className="text-center mb-5 ">Eventos rejeitados</h2>
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
                                this.state.DeclineEvents.map((res) => {
                                    return (

                                        <tr>
                                            <th scope="row">{res.name_event}</th>
                                            <td>{format(new Date(res.date_event), 'MM/dd/yyyy')}</td>
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
export default DeclineEvents
