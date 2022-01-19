import Contact from "./Contact";
import { useEffect } from 'react';

const Contacts =({contacts})=>{

    const contactList = contacts.map((contact)=>{
        return <Contact key={contact.id} contact={contact} />
    });

    return(
        <div>
  
            {contactList}
        </div>
    )
}

export default Contacts;