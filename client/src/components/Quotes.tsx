import { useState, useEffect } from 'react';

export default function Quotes() {
  const [quote, setQuote] = useState<{ content: string; author: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await fetch('http://api.quotable.io/random');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuote(data);
      } catch (error) {
        setError('Failed to fetch quote');
        console.error('Error fetching quote:', error);
      }
    };
    getQuote();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {quote ? (
        <p>"{quote.content}" &mdash; {quote.author}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}



// // https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value
// import {useState, useEffect} from 'react';

// export default function Quotes() {
//     const [quote, setQuote] = useState<any>('');
//     useEffect(() => {
//         const getQuote = async () => {
//             const response = await fetch('http://api.quotable.io/random');
//             const data = await response.json();
//             console.log(data);
//             setQuote(data);
//         }
//         getQuote();
//     }, []);
//     return (
//         <div>
        
//         <p>"{quote.content}" &mdash; {quote.author}</p>
//         </div>
//     );
// }