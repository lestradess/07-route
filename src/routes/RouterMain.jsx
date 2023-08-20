import { Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom'
import { HomePage } from '../components/HomePage'
import { Articles } from '../components/Articles'
import { Contacts } from '../components/Contacts'
import { Error } from '../components/Error'

export const RouterMain = () => {
    return (
        <BrowserRouter>
            <h1>This is the header</h1>
            <hr />
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/homePage"
                            className={ ({ isActive }) => isActive ? "active" : "" }
                        >Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contacts"
                            className={ ({ isActive }) => isActive ? "active" : "" }
                        >Contactos</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/articles"
                            className={ ({ isActive }) => isActive ? "active" : "" }
                        >Artículos</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/homePage" element={ <HomePage /> } />
                <Route path="/articles" element={ <Articles /> } />
                <Route path="/contacts" element={ <Contacts /> } />
                {/*Con el asterisco se definen todas las demás rutas no definidas */ }
                <Route path="*" element={ <Error /> } />
            </Routes>
            <h3>&copy; 2023 <Link to="/homePage">HomePage.com</Link> Todos los derechos reservados.</h3>
        </BrowserRouter>
    )
}
