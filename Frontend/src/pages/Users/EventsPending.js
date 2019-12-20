import React from 'react'
import Header from '../../components/shared/headerUsers'
import { getEventsPendingUser } from '../../services/get'
import './style.css'
import { parseJwt } from '../../services/auth';

class EventsPending extends React.Component {

    constructor() {
        super();
        this.state = { EventsPending: [] };
    }

    componentDidMount = async () => {
        const get = await getEventsPendingUser(parseJwt().user.id_user)
        this.setState({ EventsPending: get.data })
    }

    

    render() {
        return (
            <div>
                <Header />
                <div className="container mt-5 padding">
                    <h2 className="text-center mb-5 ">Meus eventos pendentes</h2>
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
                                this.state.EventsPending.map((res) => {
                                    return (

                                        <tr>
                                            <th scope="row">{res.name_event}</th>
                                            <td>{res.date_event}</td>
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
export default EventsPending
