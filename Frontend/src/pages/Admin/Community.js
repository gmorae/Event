import React from 'react'
import Header from '../../components/shared/headerAdmin'
import { getCommunity } from '../../services/get'
import './style.css'

class Community extends React.Component {

    constructor() {
        super();
        this.state = { Community: [] };
    }

    componentDidMount = async () => {
        const get = await getCommunity()
        this.setState({Community : get.data})
        console.log(Community);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container mt-5 padding">
                    <h2 className="text-center mb-5 ">Comunidades Cadastrados</h2>
                    <table id="dtBasicExample" className="table text-center" cellspacing="0" width="100%">
                        <thead className="black white-text">
                            <tr>
                                <th class="th-sm">Nome</th>
                                <th class="th-sm">E-mail</th>
                                <th class="th-sm">Telefone</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.Community.map((res) => {
                                    return (

                                        <tr>
                                            <th scope="row">{res.name_user}</th>
                                            <td>{res.email_user}</td>    
                                            <td>{res.phone_user}</td> 
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
export default Community