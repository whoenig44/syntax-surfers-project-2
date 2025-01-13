import React, { useState, useEffect } from 'react';

interface InputFormProps {
  onSubmit: (chartId: number, title: string, x: string, y: number) => void;
  chartId: number;
  defaultTitle?: string;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, chartId, defaultTitle }) => {
  const [title, setTitle] = useState<string>(defaultTitle || '');
  const [x, setX] = useState<string>('');
  const [y, setY] = useState<string | number>('');

  useEffect(() => {
    setTitle(defaultTitle || '');
  }, [defaultTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const xDate = new Date(x);
    const yValue = parseFloat(y as string);

    if (isNaN(yValue)) {
      console.error('Invalid value for y:', y);
      return;
    }

    if (isNaN(xDate.getTime())) {
      console.error('Invalid value for x:', x);
      return;
    }

    onSubmit(chartId, title, xDate.toISOString(), yValue);
    setX('');
    setY('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            readOnly={!!defaultTitle}
          />
        </label>
        <label>
          X (Date):
          <input
            type="text"
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Y (Value):
          <input
            type="number"
            value={y}
            onChange={(e) => setY(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Add Data Point</button>
    </form>
  );
};

export default InputForm;








// import React, { useState, useEffect } from 'react';

// interface InputFormProps {
//   onSubmit: (chartId: number, title: string, x: string, y: number) => void;
//   chartId: number; // Add chartId to props
//   defaultTitle?: string; // Optional prop
// }

// const InputForm: React.FC<InputFormProps> = ({ onSubmit, chartId, defaultTitle }) => {
//   const [title, setTitle] = useState<string>(defaultTitle || '');
//   const [x, setX] = useState<string>(''); // x should be a string initially
//   const [y, setY] = useState<string | number>(''); // y can be string or number for input handling

//   useEffect(() => {
//     setTitle(defaultTitle || '');
//   }, [defaultTitle]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Convert x to Date
//     const xDate = new Date(x); // Convert x (date string) to Date object
//     const yValue = parseFloat(y as string); // Convert y (string or number) to a number

//     // Handle invalid values for y and x
//     if (isNaN(yValue)) {
//       console.error('Invalid value for y:', y);
//       return;
//     }

//     if (isNaN(xDate.getTime())) {
//       console.error('Invalid value for x:', x);
//       return;
//     }

//     // Call the onSubmit function with valid values
//     onSubmit(chartId, title, xDate.toISOString(), yValue); // Pass x as ISO string
//     setX(''); // Clear the x input
//     setY(''); // Clear the y input
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Title:
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             readOnly={!!defaultTitle} // Make title readonly if defaultTitle is provided
//           />
//         </label>
//         <label>
//           X (Date):
//           <input
//             type="text"
//             value={x}
//             onChange={(e) => setX(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Y (Value):
//           <input
//             type="number"
//             value={y}
//             onChange={(e) => setY(e.target.value)}
//           />
//         </label>
//       </div>
//       <button type="submit">Add Data Point</button>
//     </form>
//   );
// };

// export default InputForm;