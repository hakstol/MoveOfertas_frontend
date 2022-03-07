import React from 'react'
import { Component } from 'react/cjs/react.production.min'

import Header from '../../components/header'
import Footer from '../../components/footer'

import '../assets/css/cadastrarOferta.css'

export default class Cadastrar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <title>Move Ofertas - Cadastro de oferta</title>
                <Header />
                <div className="voltarHome">
                    <a className="arrowVoltar" href="../../moveofertas-ui/src/pages/home/App.js"><i className="fa-solid fa-arrow-left-long iconArrow" /></a>
                    <p>Catálogo</p>
                </div>
                <main className="main">
                    <h1 className="titulo">Cadastrar Oferta</h1>
                    <div className="wrapper">
                        <div className="uploadImg">
                            <a href="#"><i className="fa-solid fa-image posicionarIconImg" /></a>
                        </div>
                        <div className="wrapper">
                            <form className="formulario">
                                <span className="flex texto">Nome do Produto:<input className="inputs" type="text" name="nome" /></span>
                                <span className="flex texto" htmlFor="preco">Preço: <input className="inputs" type="number" name="preco" /></span>
                                <span className="flex texto" htmlFor="categoria">Categoria:<input className="inputs" type="text" name="categoria" /></span>
                                <span className="flex texto" htmlFor="quantidade">Quantidade:<select name="selectquantidade" /></span>
                                <span className="flex1 texto" htmlFor="descricao">Descrição:<textarea className="inputs inputDescricao" name="descricao" cols={30} rows={10} defaultValue={""} /></span>
                                <button className="btnCadastrar" type="submit">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        );
    }
};