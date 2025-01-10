import React, { useState } from 'react';

const BehaviorTracker: React.FC = () => {
  const [behaviors, setBehaviors] = useState<string[]>([]);
  const [currentBehavior, setCurrentBehavior] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [addAnother, setAddAnother] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 12) {
      setError('Entry must be 12 characters or less.');
    } else {
      setError('');
      setCurrentBehavior(value);
    }
  };

  const handleAddBehavior = () => {
    if (currentBehavior.trim() !== '' && error === '') {
      setBehaviors([...behaviors, currentBehavior.trim()]);
      setCurrentBehavior('');
      setAddAnother(true);
    }
  };

  const handleAddAnother = (response: boolean) => {
    setAddAnother(false);
    if (!response) {
      console.log('Tracked Behaviors:', behaviors); // Replace with desired action
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Behavior Tracker</h1>
      {!addAnother ? (
        <div>
          <p>This is where you can enter behaviors you would like to track. It can be eating a certain ingredient, like gluten or food dyes, or it could be something like exercising or meditating.</p>
          <label htmlFor="behavior-input">Enter a behavior to track:</label>
          <input
            id="behavior-input"
            type="text"
            value={currentBehavior}
            onChange={handleInputChange}
            style={{ display: 'block', margin: '10px 0', padding: '5px', width: '100%' }}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button
            onClick={handleAddBehavior}
            disabled={!currentBehavior.trim() || !!error}
            style={{
              padding: '10px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Add Behavior
          </button>
          <div style={{ marginTop: '20px' }}>
            <h3>Tracked Behaviors:</h3>
            {behaviors.length === 0 ? (
              <p>No behaviors tracked yet.</p>
            ) : (
              <ul>
                {behaviors.map((behavior, index) => (
                  <li key={index}>{behavior}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div>
          <p>Would you like to track another behavior?</p>
          <button
            onClick={() => handleAddAnother(true)}
            style={{
              padding: '10px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
          >
            Yes
          </button>
          <button
            onClick={() => handleAddAnother(false)}
            style={{
              padding: '10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default BehaviorTracker;
