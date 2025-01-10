import React from 'react';
import RecordData from '../DataRecording';

const RecordingPage: React.FC = () => {
  const trackedBehaviors = ['Exercise', 'Read', 'Meditate'];

  return (
    <div>
      <RecordData trackedBehaviors={trackedBehaviors} />
    </div>
  );
};

export default RecordingPage;





// export default function RecordData() {
//     return (
//       <div>
//         <h1>Record Data</h1>
//         <p>
//          This will be the page where users which behaviors they did on a certain date.
//         </p>
//       </div>
//     );
//   }