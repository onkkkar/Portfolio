import { useEffect, useState } from 'react';
import Magnetic from '../Magnetic/page';

export default function LocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
        hour12: true,
      };
      // Get time in format: HH:MM AM/PM
      const formatted = now.toLocaleTimeString('en-US', options);
      setTime(formatted);
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        alignItems: 'flex-start',
      }}
    >
      <h3
        style={{
          color: 'grey',
          cursor: 'default',
          fontWeight: 300,
          fontSize: '0.7em',
          margin: 0,
          padding: '2.5px',
          textAlign: 'left',
        }}
      >
        Local Time
      </h3>
      <Magnetic>
        <span
          style={{
            fontSize: '1em',
            color: 'white',
            padding: '2.5px',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          {time} GMT+5:30
        </span>
      </Magnetic>
    </span>
  );
}
