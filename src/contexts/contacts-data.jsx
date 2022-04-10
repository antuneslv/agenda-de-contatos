import { createContext, useContext, useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const ContactsDataContext = createContext()

function ContactsDataProvider({ children }) {
  const [contacts, setContacts] = useState([])
  const { request } = useFetch()

  const getContacts = async () => {
    const resp = await request('contact')
    setContacts(resp.json.data || [])
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <ContactsDataContext.Provider value={{ contacts, getContacts }}>
      {children}
    </ContactsDataContext.Provider>
  )
}

export default ContactsDataProvider

export const useContacts = () => useContext(ContactsDataContext)
