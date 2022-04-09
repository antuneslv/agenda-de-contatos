import { createContext, useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

export const ContactsDataContext = createContext()

function ContactsDataProvider({ children }) {
  const [contacts, setContacts] = useState([])
  const { loading, request } = useFetch()

  const getContacts = async () => {
    const resp = await request('contact')
    setContacts(resp.json.data || [])
  }

  useEffect(() => {
    getContacts()
  }, [localStorage.getItem('token')])

  return (
    <ContactsDataContext.Provider value={{ contacts }}>
      {children}
    </ContactsDataContext.Provider>
  )
}

export default ContactsDataProvider
