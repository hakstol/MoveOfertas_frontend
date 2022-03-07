import React from 'react';
import logo from '../pages/assets/img/img/logo.svg';

export default function Footer() {

    return (
        <footer className='footer'>
            <div className='centralizarConteudoFooter'>
                <img className='logoFooter' src={logo} alt='Logo da Move Ofertas'/>
                <p className='textoFooter'>&copy; Todos direitos reservados ao MoveOfertas.</p>
            </div>
        </footer>
    )
}