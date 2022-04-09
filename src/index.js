import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import Router from './router'
// import AuthorizationProvider from './contexts/authorization'
import ContactsDataProvider from './contexts/contacts-data'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ContactsDataProvider>
    <Router />
  </ContactsDataProvider>
)
