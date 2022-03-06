import { useState, useEffect } from 'react';
import axios from 'axios';

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
            <header className="cabecalhoPrincipal">
                <div className="container">

                    <nav className="cabecalhoPrincipal-nav">
                        <a href="#conteudoPrincipal-contato">Contato</a>
                        {/* <a className="cabecalhoPrincipal-nav-login" href="/login">Login</a> */}
                    </nav>
                </div>
            </header>

            <section className="conteudoImagem">
                <div>
                    <h1>Gufi</h1>
                    <h2>Área de eventos da Escola SENAI de Informática.</h2>
                </div>
            </section>

            <main className="conteudoPrincipal">
                <section id="conteudoPrincipal-eventos">
                    <h1 id="conteudoPrincipal-eventos-titulo">Próximos Eventos</h1>
                    <div className="container">
                    </div>
                </section>

                <section id="conteudoPrincipal-visao">
                    <h1 id="conteudoPrincipal-visao-titulo">Por Quê Participar?</h1>
                    <div className="container">
                        <p className="visao-texto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                            Nullam auctor suscipit eros sed blandit. <br />
                            Fusce euismod neque sed dapibus sollicitudin. <br />Duis vel lacus
                            vestibulum, molestie dui eu, bibendum nunc.
                        </p>
                    </div>
                </section>

                <section id="conteudoPrincipal-contato">
                    <h1 id="conteudoPrincipal-contato-titulo">Contato</h1>
                    <div
                        className="container conteudo-contato-titulo"
                    >
                        <div
                            className="contato-mapa conteudo-contato-mapa"
                        ></div>
                        <div
                            className="contato-endereco conteudo-contato-endereco"
                        >
                            Alameda Barão de Limeira, 539 <br />
                            São Paulo - SP
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;