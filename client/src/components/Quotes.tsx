// https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value
import {useState, useEffect} from 'react';

export default function Quotes() {
    const [quote, setQuote] = useState<any>('');
    useEffect(() => {
        const getQuote = async () => {
            const response = await fetch('http://api.quotable.io/random');
            const data = await response.json();
            console.log(data);
            setQuote(data);
        }
        getQuote();
    }, []);
    return (
        <div>
        
        <p>"{quote.content}" &mdash; {quote.author}</p>
        </div>
    );
}