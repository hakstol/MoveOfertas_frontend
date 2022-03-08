import '../assets/home_style.css';
import LogoHeader from '../pages/assets/img/img/logo-header.png';
import SearchIcon from '../pages/assets/img/img/search_icon.svg';
export default function Header() {
    return (
        <header className="header_home">
            <div className="container_home">
                <div className="postion_home_header">
                    <img src={LogoHeader} alt="" />
                    <div className="search_bar">
                        <input type="search" placeholder="Pequisar..." />
                        <button>
                            <img src={SearchIcon} alt="" />
                        </button>
                    </div>
                    <nav>
                        <a href="http://localhost:3000/">home</a>
                        <a href="http://localhost:3000/produto">products</a>
                        <a href="http://localhost:3000//lista/minhas/reservas">my reserves</a>
                        <a href="http://localhost:3000/login">my account</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}