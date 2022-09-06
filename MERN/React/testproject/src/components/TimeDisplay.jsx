import React, { useEffect, useState } from 'react';
 
const TimeDisplay = () => {
    const [time, setTime] = useState(new Date().toLocaleString());
 
    useEffect(() => {
        const int = setInterval(() => setTime(new Date().toLocaleString()), 1000);
        return () => { clearInterval(int); }
    }, []);
 
    return (
        <div>Current Time: {time}</div>
    );
}
export default TimeDisplay;
