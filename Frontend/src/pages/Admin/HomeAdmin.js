import React from 'react'
import Header from '../../components/shared/headerAdmin'
import CardHome from '../../components/cardHome'
import './style.css'
const HomeAdmin = () => {
    return (
        <div>
            <Header />
            <div class="container mt-5 padding">
                <section class="">
                    <div class="row mt-4">
                        <CardHome nome="Criar" cor="primary-color" icone="fas fa-plus" />
                        <CardHome nome="Anterior" cor="default-color" icone="fas fa-arrow-left" />
                        <CardHome nome="Próximo" cor="default-color-dark" icone="fas fa-arrow-right" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomeAdmin