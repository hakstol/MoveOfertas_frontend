import Footer from "../../components/footer";
import '../../assets/css/ofertas_style.css'
import Retornar from '../../assets/img/retornar.png'


import Racao from '../../assets/img/ração.png';
import Excluir from '../../assets/img/excluir.png';
import Editar from '../../assets/img/editar.png'

function Reservas() {




    return (
        <div>
            <Header />
            <main>
                <section className="reservas_title container_home">
                    <button>
                        <img src={Retornar} alt="" />
                        Catálogo
                    </button>
                    <div className="select_category">
                        <h1>minhas reservas</h1>
                        <select name="selecionar_categoria" id="">
                            <option value="valor1" selected="">
                                Selecionar Categoria
                            </option>
                            <option value="valor2">Valor 2</option>
                            <option value="valor3">Valor 3</option>
                        </select>
                    </div>
                </section>
                <section className="card_reservas container_home">
                    <div className="control_reservas">
                        <div className="card">
                            <div className="título_card">
                                <h2>Nome Produto</h2>
                                <p>Lore Ipsum Definição</p>
                            </div>
                            <img src={Racao} alt="" />
                            <div className="buy_card">
                                <span>R$25</span>
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}