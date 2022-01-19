import {useEffect} from 'react';

const Contact =({contact})=>{
    useEffect(()=>{
        console.log("ca");
        //console.log(contact);
    },[])
    return(
        <div>
            {contact.name}
        </div>
    )
}

export default Contact;