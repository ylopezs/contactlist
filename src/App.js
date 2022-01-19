import './App.css';
import useFetch from 'react-fetch-hook';
import { useEffect, useState } from 'react';
import Contacts from './Contacts';

function App() {

  const [ contactList, setContactlist ] = useState("");

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    const fetchContacts = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        //console.log(json);
        setContactlist(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    return fetchContacts();

  }, []);

  return (
    <div className="App">
      <div>

         {contactList.length >=1 && <Contacts contacts={contactList} />}
      </div>
    </div>
  );
}

export default App;
