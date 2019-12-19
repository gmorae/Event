import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class card extends Component {
    render() {
        return (
            <div className="card hoverable mb-4">
                <div className="card-body">
                    <h4 className="card-title">{this.props.nome}</h4>
                    <p className="card-text">{this.props.responsavel}</p>
                    <p className="card-text">{this.props.data}</p>
                    <Link className="btn btn-defaultt text-white" data-toggle="modal" data-target="#evento">Detalhes</Link>
                </div>
            </div>
        )
    }
}

export default card