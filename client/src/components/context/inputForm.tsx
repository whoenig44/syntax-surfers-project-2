import React, { useState, useEffect } from 'react';

interface InputFormProps {
  onSubmit: (chartId: number, title: string, x: string, y: number) => void;
  chartId: number; //add CharId to props
  defaultTitle?: string; // Optional prop
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, chartId, defaultTitle }) => {
  const [title, setTitle] = useState(defaultTitle || '');
  const [x, setX] = useState<string>('');
  const [y, setY] = useState<string | number>(''); // Initialize y as string for input handling

  useEffect(() => {
    setTitle(defaultTitle || '');
  }, [defaultTitle]);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const yValue = parseFloat(y as string); //Convert y to number before submitting
    if (!isNaN(yValue)) {
      onSubmit(chartId, title, x, yValue);
      setX('');
      setY('');
    } else {
      console.error('Invalid value for y: ', y);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} readOnly={!!defaultTitle} />
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

