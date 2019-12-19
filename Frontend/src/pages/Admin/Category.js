
import React from 'react'
import Header from '../../components/shared/headerAdmin'
import { getCategory } from '../../services/get'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

class Category extends React.Component {

    constructor() {
        super();
        this.onChangeNameCategory = this.onChangeNameCategory.bind(this);
        this.onChangeDescriptionCategory = this.onChangeDescriptionCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Category: [],
            name_category: "",
            description_category: "",

        };
    }
    onChangeNameCategory(e) {
        this.setState({ name_category: e.target.value })
    }

    onChangeDescriptionCategory(e) {
        this.setState({ description_category: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const object = {
            name_category: this.state.name_category,
            description_category: this.state.description_category
        };
        if (!this.state.name_category || !this.state.description_category) {
            toast.error("Verifique os campos para continuar o cadastro")
        }else{
            Axios.post('http://localhost:8080/category', object)
                .then((res) => {
                    window.location.reload()
                    toast.success("Categoria cadastrada com sucesso")
                })

        }

        this.setState({ name_category: '', description_category: '' })
    }

    componentDidMount = async () => {
        const get = await getCategory()
        this.setState({ Category: get.data })
    }

    render() {
        return (
            <div>
                <ToastContainer />
                <Header />
                <div className="container mt-5 padding">
                    <h2 className="text-center mb-5 ">Lista de categorias</h2>
                    <div className="ml-auto row">
                        <Link data-toggle="modal" data-target="#ModalListaDeCategoria">
                            <button type="button" class="btn btn-outline-dark waves-effect btn-sm"><i class="fas fa-plus pr-2" aria-hidden="true"></i>Nova categoria</button>
                        </Link>
                    </div>
                    <table id="dtBasicExample" className="table text-center" cellspacing="0" width="100%">
                        <thead className="black white-text">
                            <tr>

                                <th class="th-sm">Nome</th>
                                <th class="th-sm">Descrição</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.Category.map((res) => {
                                    return (

                                        <tr key={res.id_category}>
                                            <th scope="row">{res.name_category}</th>
                                            <td>{res.description_category}</td>

                                        </tr>

                                    )
                                })
                            }

                            <div class="modal fade" id="ModalListaDeCategoria" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-notify modal-info" role="document">
                                    <div class="modal-content text-center">
                                        <div class="modal-header d-flex bg-dark justify-content-center">
                                            <p class="heading">Crie uma nova categoria</p>
                                        </div>
                                        <form onSubmit={this.onSubmit}>
                                            <div class="modal-body">
                                                <div class="md-form">
                                                    <input type="text" id="name_category" name="name_category" onChange={this.onChangeNameCategory} class="form-control" />
                                                    <label for="name_category">Nome da categoria</label>
                                                </div>
                                                <div class="md-form">
                                                    <input type="text" id="description_category" name="description_category" onChange={this.onChangeDescriptionCategory} class="form-control" />
                                                    <label for="description_category">Descrição da categoria</label>
                                                </div>
                                            </div>
                                            <div class="modal-footer flex-center">
                                                <Link className="btn-outline-dark btn waves-effect" data-dismiss="modal">Cancelar</Link>
                                                <button className="btn-dark btn" type="submit">Criar categoria</button>

                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>

                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
export default Category
