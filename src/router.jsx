import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Access from './components/routes/access'
import LogIn from './components/routes/access/log-in'
import SignUp from './components/routes/access/sign-up'
import Contacts from './components/routes/contacts'
import NewContact from './components/routes/new-contact'
import DetailsContact from './components/routes/details-contact'
import EditContact from './components/routes/edit-contact'
import NotFoundPage from './components/routes/not-found-page'
import ProtectedRoutes from './components/routes/protected-routes'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<Access />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/contatos" element={<Contacts />} />
          <Route path="/novo-contato" element={<NewContact />} />
          <Route path="/contato/:id" element={<DetailsContact />} />
          <Route path="/contato/editar/:id" element={<EditContact />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
