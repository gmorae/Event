import React from 'react'

class cardHome extends React.Component {
    render() {
        return (
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card mt-3">
                    <div class="">
                        <i class={`${this.props.icone} fa-lg ${this.props.cor} z-depth-2 p-4 ml-3 mt-n3 rounded text-white`}></i>
                        <div class="float-right text-right p-3">
                            <p class="text-uppercase text-muted mb-1"><small>Evento</small></p>
                            <h4 class="font-weight mb-0">{this.props.nome}</h4>
                        </div>
                    </div>
                    <div class="card-body pt-0 ml-auto">
                        <button type="button" class="btn btn-light">Visualizar</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default cardHome