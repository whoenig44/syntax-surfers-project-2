import React, { useState } from 'react';

interface BehaviorEntry {
  date: string;
  behaviors: Record<string, boolean>;
  feeling: number;
}

interface BehaviorTrackerPageProps {
  trackedBehaviors: string[];
}

const RecordData: React.FC<BehaviorTrackerPageProps> = ({ trackedBehaviors }) => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [entries, setEntries] = useState<Record<string, BehaviorEntry>>({});
  const [currentBehaviors, setCurrentBehaviors] = useState<Record<string, boolean>>({});
  const [feeling, setFeeling] = useState<number>(5);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setSelectedDate(date);

    const existingEntry = entries[date];
    if (existingEntry) {
      setCurrentBehaviors(existingEntry.behaviors);
      setFeeling(existingEntry.feeling);
    } else {
      // Reset fields if no data for the selected date
      const defaultBehaviors = trackedBehaviors.reduce((acc, behavior) => {
        acc[behavior] = false;
        return acc;
      }, {} as Record<string, boolean>);
      setCurrentBehaviors(defaultBehaviors);
      setFeeling(5);
    }
  };

  const handleBehaviorChange = (behavior: string) => {
    setCurrentBehaviors((prev) => ({
      ...prev,
      [behavior]: !prev[behavior],
    }));
  };

  const handleFeelingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeeling(parseInt(e.target.value, 10));
  };

  const handleSubmit = () => {
    setEntries((prev) => ({
      ...prev,
      [selectedDate]: {
        date: selectedDate,
        behaviors: currentBehaviors,
        feeling,
      },
    }));
    alert('Results saved!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>Behavior Log</h1>

      {/* Date Input */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="date">Select a Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
      </div>

      {/* Behavior Checklist */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Did you complete these behaviors?</h3>
        {trackedBehaviors.map((behavior) => (
          <div key={behavior}>
            <label>
              <input
                type="checkbox"
                checked={currentBehaviors[behavior] || false}
                onChange={() => handleBehaviorChange(behavior)}
              />
              {behavior}
            </label>
          </div>
        ))}
      </div>

      {/* Feeling Scale */}
      <div style={{ marginBottom: '20px' }}>
        <h3>How were you feeling today (1-10)?</h3>
        <input
          type="range"
          min="1"
          max="10"
          value={feeling}
          onChange={handleFeelingChange}
        />
        <p>Feeling: {feeling}</p>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Submit Results
      </button>

      {/* Display Previous Results */}
      {entries[selectedDate] && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
          <h3>Previous Results for {selectedDate}:</h3>
          <ul>
            {Object.entries(entries[selectedDate].behaviors).map(([behavior, completed]) => (
              <li key={behavior}>
                {behavior}: {completed ? 'Yes' : 'No'}
              </li>
            ))}
          </ul>
          <p>Feeling: {entries[selectedDate].feeling}</p>
        </div>
      )}
    </div>
  );
};

export default RecordData;