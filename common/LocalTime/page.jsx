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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '.2em',
      }}
    >
      <h3
        style={{
          color: 'grey',
          cursor: 'default',
          fontWeight: 300,
          fontSize: '0.7em',
          letterSpacing: '0.1em',
          margin: 0,
        }}
      >
        LOCAL TIME
      </h3>
      <div>
        <Magnetic>
          <span
            style={{
              fontSize: '1em',
              color: 'white',
              padding: '0 0.2em 0 0',
              cursor: 'pointer',
              textAlign: 'left',
              fontWeight: 400,
            }}
          >
            {time} GMT+5:30
          </span>
        </Magnetic>
      </div>
    </div>
  );
}
