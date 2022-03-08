import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';

import Racao from '../../pages/assets/img/img/ração.png';

import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/header'
import Footer from '../../components/footer'

import '../assets/css/produto.css'

function Produtos() {
    const [listaOfertas, setListaOfertas] = useState([]);
    const history = useHistory();

    function buscarOfertas() {
        axios('http://localhost:5000/api/Ofertas')
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaOfertas(resposta.data);
                }
            })
            .catch(erro => console.log(erro));
    };

    useEffect(buscarOfertas, []);

    function reservar(oferta) {
        
        axios.post('http://localhost:5000/api/Ofertas/' + oferta.idOferta, {}, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(response => {
                if (response.status === 201) {
                    console.log('Reserva realizada com sucesso!');
                    history.push('/Reservas/Lista/Minhas');
                }
            })
            .catch(erro => {
                if (erro.toJSON().status === 401) {
                    history.push('/login');
                }
            });
    };

    return (
        <div>
            <title>Move Ofertas - Cadastro de oferta</title>
            <Header />
            <div className="voltarHome">
                <a className="arrowVoltar" href="../../moveofertas-ui/src/pages/home/App.js"><i className="fa-solid fa-arrow-left-long iconArrow" /></a>
                <p>Catálogo</p>
            </div>
            <main className="main">
                {
                    listaOfertas.map((oferta) => {
                        return (
                            <div>
                                <h1 className="titulo">{oferta.nomeProduto}</h1>
                                <div className="wrapper">
                                    <img src={Racao} alt="" />
                                    <a href="#"><i className="fa-solid fa-image posicionarIconImg" /></a>
                                    <form className="formulario">
                                        <span className="flex texto">{oferta.nomeProduto}</span>
                                        <span className="flex texto" htmlFor="preco">{oferta.valor}$</span>
                                        <span className="flex texto" htmlFor="categoria">{oferta.idCategoriaNavigation.nomeCategoria}</span>
                                        <span className="flex texto" htmlFor="quantidade">Quantidade: <select>{oferta.quantidade}</select></span>
                                        <span className="flex1 texto" htmlFor="descricao">{oferta.descricao}</span>
                                        <button className="btnCadastrar" type="submit" onClick={() => reservar(oferta)}>Reservar</button>
                                    </form>
                                </div>
                            </div>
                        )
                    })
                }
            </main>
            <Footer />
        </div >
    );
};

export default Produtos;