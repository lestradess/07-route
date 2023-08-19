import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { HomePage } from '../components/HomePage'
import { Articles } from '../components/Articles'
import { Contacts } from '../components/Contacts'
import { Error } from '../components/Error'

export const RouterMain = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/homePage" element={ <HomePage /> } />
                <Route path="/articles" element={ <Articles /> } />
                <Route path="/contacts" element={ <Contacts /> } />
                {/*Con el asterisco se definen todas las demás rutas no definidas */}
                <Route path="*" element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    )
}
