import 'bootstrap/dist/css/bootstrap.css';
import Contact from "./Contact";

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