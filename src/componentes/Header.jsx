import './Header.css'

function Header(){
    return(
        <header>
            <h1>¡Bienvenidos!</h1>
            <nav>
                <ul className='indice'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Fotos</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;