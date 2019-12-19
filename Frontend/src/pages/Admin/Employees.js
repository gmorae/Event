import React from 'react'
import Header from '../../components/shared/headerAdmin'
import { getEmployees } from '../../services/get'
import './style.css'

class Employees extends React.Component {

    constructor() {
        super();
        this.state = { Employees: [] };
    }

    componentDidMount = async () => {
        const get = await getEmployees()
        this.setState({Employees : get.data})
        console.log(Employees);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container mt-5 padding">
                    <h2 className="text-center mb-5 ">Funcionários Cadastrados</h2>
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
                                this.state.Employees.map((res) => {
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

export default Employees
