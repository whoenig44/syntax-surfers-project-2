import React, { useState } from 'react';

interface InputFormProps {
  onSubmit: (title: string, x: string, y: number) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, x, parseFloat(y));
    setTitle('');
    setX('');
    setY('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          X (Date):
          <input type="text" value={x} onChange={(e) => setX(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Y (Value):
          <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
        </label>
      </div>
      <button type="submit">Add Data Point</button>
    </form>
  );
};

export default InputForm;

