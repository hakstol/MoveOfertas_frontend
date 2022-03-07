import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Racao from '../../assets/img/ração.png';
import BuyBag from '../../asssets/img/bag-reserves.png';
import IconCategorys from '../../assets/img/sports-svgrepo.png'
import Division from '../../assets/img/division.png'

function App() {
    // const [listaEventos, setListaEventos] = useState([]);
    // let history = useHistory();

    // function buscarEventos() {
    //     axios('')
    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 setListaEventos(resposta.data);
    //             }
    //         })
    //         .catch(erro => console.log(erro));
    // };

    // useEffect(buscarEventos, []);

    // function inscrever(evento) {
    //     console.log(evento);

    //     // axios() // get
    //     // axios.post() // post

    //     axios.post('    ' + evento.idEvento, {}, {
    //         headers: {
    //             'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
    //         }
    //     })
    //         .then(response => {
    //             if (response.status === 201) {
    //                 console.log('Inscrição realizada com sucesso!');
    //                 history.push('/meuseventos');
    //             }
    //         })
    //         .catch(erro => {
    //             if (erro.toJSON().status === 401) {
    //                 history.push('/login');
    //             }
    //         });
    // };

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
                        <button>
                            Crie já sua <b>conta!</b>
                        </button>
                    </div>
                </section>
                <section className="container_home carrosel_produtos">
                    <div className="card">
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
                    </div>
                    <div className="card">
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
                    </div>
                    <div className="card">
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
                    </div>
                </section>
                <img className="division" src={Division} alt="" />
                <section className="container_home categorys">
                    <div className="box_categorys">
                        <div className="posicionador_cards">
                            <div className="category_card_blue">
                                <img src={IconCategorys} alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_orange">
                                <img src={IconCategorys} alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_blue">
                                <img src={IconCategorys} alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_orange">
                                <img src={IconCategorys} alt="" />
                                <a href="">categoria</a>
                            </div>
                        </div>
                        <div className="posicionador_cards2">
                            <div className="category_card_orange">
                                <img src={IconCategorys} alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_blue">
                                <img src={IconCategorys} alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_orange">
                                <img src={IconCategorys} alt="" />
                                <a href="">categoria</a>
                            </div>
                            <div className="category_card_blue">
                                <img src={IconCategorys} alt="" />
                                <a href="">categoria</a>
                            </div>
                        </div>
                    </div>
                </section>
                <img className="division2" src={Division} alt="" />
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
            <Footer />
        </div>

    );
}

export default App;