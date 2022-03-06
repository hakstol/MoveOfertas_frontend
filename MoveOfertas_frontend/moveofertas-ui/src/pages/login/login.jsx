import { Component } from 'react';
import axios from 'axios';

import { parseJwt, usuarioAutenticado } from '../../services/auth';

import '../../assets/css/login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false,
        };
    }

    btnLogin = () => {
        var body = document.querySelector("body")
        body.classList.add("sign-in-js")
        body.classList.remove("sign-up-js")
    }
    btnCadastrar = () => {
        var body = document.querySelector("body")
        body.classList.add("sign-up-js")
        body.classList.remove("sign-in-js")
    }

    efetuaLogin = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios
            .post('https://6222511c666291106a23bd5b.mockapi.io/Usuario', {
                email: this.state.email,
                senha: this.state.senha,
            })

            // recebe todo o conteúdo da resposta da requisição na variável resposta
            .then((resposta) => {
                // verifico se o status code dessa resposta é igual a 200
                if (resposta.status === 200) {
                    // se sim, exibe no console do navegador o token do usuário logado,
                    // console.log('Meu token é: ' + resposta.data.token);
                    // salva o valor do token no localStorage
                    localStorage.setItem('usuario-login', resposta.data.token);
                    // e define que a requisição terminou
                    this.setState({ isLoading: false });

                    // define a variável base64 que vai receber o payload do token
                    let base64 = localStorage.getItem('usuario-login').split('.')[1];
                    // exibe no console do navegador o valor em base64
                    console.log(base64);

                    // exibe no console o valor decodificado de base64 para string
                    // console.log(window.atob(base64));

                    // exibe no console do navegador o valor da chave role
                    // console.log( JSON.parse( window.atob(base64) ) );

                    // console.log( parseJwt().role );

                    // exibe as propriedades da página
                    console.log(this.props);

                    // verifica se o usuário logado é do tipo administrador
                    if (parseJwt().role === '1') {
                        this.props.history.push('/');
                        console.log('estou logado: ' + usuarioAutenticado());
                    } else {
                        this.props.history.push('/');
                    }
                }
            })

            // Caso haja um erro,
            .catch(() => {
                // define o valor do state erroMensagem com uma mensagem personalizada
                this.setState({
                    erroMensagem: 'E-mail e/ou senha inválidos!',
                    isLoading: false,
                });
            });
    };

    atualizaStateCampo = (campo) => {
        // quando estiver digitando no campo username
        //                     email        :       adm@adm.com

        // quando estiver digitando no campo password
        //                     senha        :        senha123
        this.setState({ [campo.target.name]: campo.target.value });
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="content first-content">
                        <div className="first-column">
                            <h2 className="title title-primary">Bem vindo!</h2>
                            <p className="description description-primary">Já tem uma conta?</p>
                            <p className="description description-primary">Entre agora mesmo</p>
                            <button onClick={this.btnLogin} id="signin" className="btn btn-primary">Login</button>
                            <img className="draw" src="./assets/img/Drawkit IMG.png" alt="" />
                        </div>
                        <div className="second-column">
                            <h2 className="title title-second">Crie uma conta</h2>
                            <form className="form">
                                <label className="inputs" htmlFor>
                                    <i className="far fa-user icon-modify" />
                                    <input className="input_nome" type="text" />
                                </label>
                                <label className="inputs" htmlFor>
                                    <i className="far fa-envelope icon-modify" />
                                    <input className="input_email" type="email" />
                                </label>
                                <label className="inputs" htmlFor>
                                    <i className="fas fa-lock icon-modify" />
                                    <input className="input_senha" type="password" />
                                </label>
                                <select className="inputs input_categoria" id="categoria">
                                    <option value disabled selected>Selecione</option>
                                    <option value={1}>Empresa</option>
                                    <option value={2}>Cliente</option>
                                </select>
                                <button className="btn btn-second">Cadastrar</button>
                            </form>
                        </div>{/* second column */}
                    </div>{/* first content */}
                    <div className="content second-content">
                        <div className="first-column column2">
                            <h2 className="title title-primary">Olá</h2>
                            <p className="description description-primary description2">É novo por aqui?</p>
                            <p className="description description-primary description2">Crie uma conta agora mesmo</p>
                            <button onClick={this.btnCadastrar} id="signup" className="btn btn-primary2">Cadastre-se</button>
                        </div>
                        <div className="second-column">
                            <h2 className="title title-second">Entre em sua conta</h2>
                            <form className="form">
                                <label className=" inputs" htmlFor="true">
                                    <input className="input_email2" type="email" />
                                </label>
                                <label className="inputs" htmlFor="true">
                                    <input className="input_senha2" type="password" />
                                </label>
                                <button className="btn btn-second">Login</button>
                            </form>
                        </div>{/* second column */}
                    </div>{/* second-content */}
                </div>
            </div>
        );
    }
};