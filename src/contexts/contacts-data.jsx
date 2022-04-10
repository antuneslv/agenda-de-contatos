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

  const provisions = { contacts, getContacts }

  return (
    <ContactsDataContext.Provider value={provisions}>
      {children}
    </ContactsDataContext.Provider>
  )
}

export default ContactsDataProvider

export const useContacts = () => useContext(ContactsDataContext)
