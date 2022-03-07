import '../assets/css/home_style.css';

export default function Footer() {
    return (
        <footer className="footer_home">
            <div className="footer">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>
                <ul className="social_icon">
                    <li>
                        <a herf="#">
                            <ion-icon name="logo-facebook" />
                        </a>
                    </li>
                    <li>
                        <a herf="#">
                            <ion-icon name="logo-twitter" />
                        </a>
                    </li>
                    <li>
                        <a herf="#">
                            <ion-icon name="logo-linkedin" />
                        </a>
                    </li>
                    <li>
                        <a herf="#">
                            <ion-icon name="logo-instagram" />
                        </a>
                    </li>
                </ul>
                <ul className="menu">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Team</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                <p>@2021 SpMedicalGroup | All Right Reserveds</p>
            </div>
        </footer>
    )
}