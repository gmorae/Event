import React from 'react'
import Header from '../../components/shared/headerUsers'
import './style.css'
class RegisterEvent extends React.Component {
    
    
    
    render() {
        return (
            <div>
                <Header />
                <div className="col-10 container mt-5 padding">
                    <h2 className="text-center mb-5 ">Cadastrar um novo evento</h2>
                    <form onSubmit={this.submit}>
                        <div class="md-form mt-3">
                            <input type="text" id="nome_evento" class="form-control" />
                            <label for="nome_evento">Nome do evento</label>
                        </div>
                        <div class="md-form mt-3">
                            <input type="text" id="nome_evento" class="form-control" />
                            <label for="nome_evento">Data do evento</label>
                        </div>
                        <div class="md-form mt-3">
                            <input type="text" id="nome_evento" class="form-control" />
                            <label for="nome_evento">Categoria</label>
                        </div>
                        <div class="md-form mt-3">
                            <input type="text" id="nome_evento" class="form-control" />
                            <label for="nome_evento">Descrição</label>
                        </div>
                        <button type="button" class="btn btn-dark mx-auto">Cadastrar</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default RegisterEvent
