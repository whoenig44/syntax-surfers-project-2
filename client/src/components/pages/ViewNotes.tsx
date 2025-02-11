import { useState, useEffect } from 'react';
import './AddNewNotes.css';

const apiEndpoint = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';

export default function ViewNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch(`${apiEndpoint}/api/notes`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('id_token')}`
          }
        });
        const data = await response.json();
        console.log(data);
        setNotes(data);
      } catch (error) {
        console.error(error);
      }
    };
    getNotes();
  }, []);

  const renderNotes = () => {
    return notes.map((note: any) => {
      return (
        <div key={note.id} className='card'>
          <h3>{note.title}</h3>
          <p>{note.message}</p>
          <p>{note.date}</p>
        </div>
      );
    });
  }
    return (
      <div>
        <h1>Note History</h1>
       
        <div className='cards-container'>
          <div>
          {renderNotes()}
          </div>
        </div>
      </div>
    );
  }