import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

const Contact = ({ contact }) => {
    useEffect(() => {
        console.log("ca");
        console.log(contact);
    }, [])
    return (
        <div className="card">
            
            <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <div className="card-text">Phone: {contact.phone} <br />
                                            Website: {contact.website} <br />
                </div>
            </div>

        </div>
    )
}

export default Contact;