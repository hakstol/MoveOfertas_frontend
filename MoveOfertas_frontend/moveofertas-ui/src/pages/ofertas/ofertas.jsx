import Footer from "../../components/footer";
import '../../assets/css/ofertas_style.css'

import Racao from '../../assets/img/ração.png';
import Excluir from '../../assets/img/excluir.png';
import Editar from '../../assets/img/editar.png'
import Retornar from '../../assets/img/retornar.png'

function Ofertas() {




    return (
        <div>
            <Header/>
            <main>
                <section className="ofertas_title container_home">
                    <button>
                        <img src={Retornar} alt="" />
                        Catálogo
                    </button>
                    <div className="select_category">
                        <h1>minhas ofertas</h1>
                        <select name="selecionar_categoria" id="">
                            <option value="valor1" selected="">
                                Selecionar Categoria
                            </option>
                            <option value="valor2">Valor 2</option>
                            <option value="valor3">Valor 3</option>
                        </select>
                    </div>
                </section>
                <section className="card_ofertas container_home">
                    <div className="control_Ofertas">
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
                        <div className="buttons">
                            <button>
                                <img src={Excluir}alt="" />
                            </button>
                            <button>
                                <img src={Editar} alt="" />
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}