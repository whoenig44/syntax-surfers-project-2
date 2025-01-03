import React, { useState } from 'react';

const newNote: React.FC = () => {
  const [date, setDate] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Selected date: ${date}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the date for this note:
        <input
          type="date"
          value={date}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default newNote;