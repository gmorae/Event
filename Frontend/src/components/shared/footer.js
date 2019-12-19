import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const footer = () => {
    return (
        <footer className="footer-home-page">
            <div className="rod">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">

                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Conecte-se conosco nas redes sociais!</h6>
                        </div>

                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <Link className="tw-ic">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </Link>

                            <Link className="li-ic">
                                <i className="fab fa-facebook white-text mr-4"> </i>
                            </Link>

                            <Link className="ins-ic">
                                <i className="fab fa-instagram white-text"> </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-md-left mt-5">
                <div className="row mt-3">
                    <div className="col-4 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Easy Talk</h6>
                        <hr className="deep-purplee accent-2 mb-4 mt-0 d-inline-block mx-auto exemplo" ></hr>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.</p>
                    </div>
                    <div className="col-4 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Links</h6>
                        <hr className="deep-purplee accent-2 mb-4 mt-0 d-inline-block mx-auto exemplo" ></hr>
                        <p>
                            <Link href="#!">Home</Link>
                        </p>
                        <p>
                            <Link href="#!">Cadastra-se</Link>
                        </p>
                        <p>
                            <Link href="#!">Login</Link>
                        </p>
                    </div>
                    <div className="col-4 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contato</h6>
                        <hr className="deep-purplee accent-2 mb-4 mt-0 d-inline-block mx-auto exemplo" ></hr>

                        <p>
                            <i class="fas fa-envelope mr-3"></i> atendimento@easyTalk.com</p>
                        <p>
                            <i class="fas fa-phone mr-3"></i> 11 99999-9999</p>

                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright | Todos os diretos reservados</div>
        </footer>
    )
}

export default footer