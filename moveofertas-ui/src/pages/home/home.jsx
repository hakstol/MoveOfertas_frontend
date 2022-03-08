import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/header';
import Racao from '../../pages/assets/img/img/ração.png';
import Tenis from '../assets/img/img/tenis.jpeg';
import Camiseta from '../assets/img/img/camiseta-azul.jpg';
import BuyBag from '../../pages/assets/img/img/bag-reserves.png';
import IconCatgory from '../../pages/assets/img/img/sports-svgrepo.png'

function Home() {
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

        axios.post('http://localhost:5000/api/Reservas/' + oferta.idOferta, {}, {
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
            <Header />
            <main>
                <section className="banner_home">
                    <div className="container_home banner_space">
                        <h1>
                            Encontre as melhores <span className="span_1">mercadorias</span>
                            em contato direto com os <span className="span_2"> fornecedores</span>
                        </h1>
                        <p>Estoques pelo melhores preços você só encontra aqui!</p>
                        <Link className="link" to="/login">
                            Crie já sua <b>conta!</b>
                        </Link>
                    </div>
                </section>
                <section className="container_home carrosel_produtos">
                    {/* <div className="card">
                        <div className="título_card">
                            <h2>Nome Produto</h2>
                            <p>Lore Ipsum Definição</p>
                        </div>
                        <img src={Racao} alt="" />
                        <div className="buy_card">
                            <span>R$25</span>
                            <button>
                                Reservar <img src={BuyBag} alt="" />
                            </button>
                        </div>
                    </div> */}

                    {
                        listaOfertas.map((oferta) => {
                            return (
                                <div key={oferta.idOferta} className="conteudoCards card título_card buy_card">
                                    <h2>{oferta.nomeProduto="Ração"}</h2>
                                    <p className="pDescricaoCategoria">{oferta.descricao}</p>
                                    <p className="pDescricaoCategoria">{oferta.idCategoriaNavigation.nomeCategoria}</p>
                                    {/* <img src={} alt="" /> */}

                                    <p className="valor">{oferta.valor}$</p>
                                    <button onClick={() => reservar(oferta)}>Reservar <img src={BuyBag} alt="" /></button>
                                </div>
                            )
                        })
                    }

                </section>
                <img className="division" src="assets/division.png" alt="" />
                <section className="container_home categorys">
                    <div className="box_categorys">
                        <div className="posicionador_cards">
                            <div className="category_card_blue">
                                <img src="assets/sports-svgrepo.png" alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_orange">
                                <img src="assets/sports-svgrepo.png" alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_blue">
                                <img src="assets/sports-svgrepo.png" alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_orange">
                                <img src="assets/sports-svgrepo.png" alt="" />
                                <a href="">categoria</a>
                            </div>
                        </div>
                        <div className="posicionador_cards2">
                            <div className="category_card_orange">
                                <img src="assets/sports-svgrepo.png" alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_blue">
                                <img src="assets/sports-svgrepo.png" alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_orange">
                                <img src="assets/sports-svgrepo.png" alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_blue">
                                <img src="assets/sports-svgrepo.png" alt="" />
                                <a href="">categoria</a>
                            </div>
                        </div>
                    </div>
                </section>
                <img className="division2" src="assets/division.png" alt="" />
                <section className="about_us">
                    <div className="container_home">
                        <div>
                            <h3>Quem nós somos?</h3>
                            <hr />
                        </div>
                        <div>
                            <p className="p1">
                                A MoveOfertas tem como objetivo disponibilizar em massa ofertas a um
                                valor baixo de mercado para consumidores interessados em comprar mais
                                barato, diminuindo o prejuízo.
                            </p>
                            <p className="p2">
                                Conectando as partes interessadas, dando um melhor uso a esses
                                produtos. Ao invés dos varejistas realizarem grandes queimas de
                                estoque, ou incineração de produtos vencidos, podem disponibilizá-los
                                para quem precisa, além de obter retorno financeiro em produtos que
                                anteriormente seriam lixo. A solução implementada em massa pode ser
                                útil principalmente em franquias.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;