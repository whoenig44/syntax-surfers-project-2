import React, { useState, useEffect } from 'react';

// interface FormData {
//   title: string;
//   date: string;
//   message: string;
// }

// const AddNote: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//         title: '',
//         date: '',
//         message: '',
//       });
//   const [cardData, setCardData] = useState<FormData | null>(null);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setCardData(formData);
//     setFormData({ title: '', date: '', message: '' });
//   };

//   return (
//     <div className="App">
//       <h1>Create a new note</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="date">Date:</label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {cardData && (
//         <div className="card">
//           <h2>{cardData.title}</h2>
//           <p><strong>Date:</strong> {cardData.date}</p>
//           <p>{cardData.message}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddNote;


interface FormData {
  title: string;
  date: string;
  message: string;
}

const AddNote: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ title: '', date: '', message: '' });
  const [cardsData, setCardsData] = useState<FormData[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('cardsData');
    if (savedData) {
      setCardsData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cardsData', JSON.stringify(cardsData));
  }, [cardsData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCardsData([...cardsData, formData]);
    setFormData({ title: '', date: '', message: '' });
  };

  return (
    <div className="App">
      <h1>Submit Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <p><strong>Date:</strong> {card.date}</p>
            <p>{card.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddNote;



