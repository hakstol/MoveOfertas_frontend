import '../assets/css/home_style.css';
import LogoHeader from '../assets/img/logo-header.png';
import SearchIcon from '..assets/img/serach_icon.svg';
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
                        <a href="">home</a>
                        <a href="">products</a>
                        <a href="">my reserves</a>
                        <a href="">my account</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}