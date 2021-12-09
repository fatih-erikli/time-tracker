import { useState } from 'react';

const DateFilter = () => {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentDay, setCurrentDay] = useState(currentDate.getDay());
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 3,
    }}>
      <select value={currentYear} onChange={event => setCurrentYear(Number(event.target.value))}>
        <option>Year</option>
        {new Array(100).fill(0).map((_, index) => <option>{currentYear - index}</option>)}
      </select>
      <select value={currentMonth} onChange={event => setCurrentMonth(Number(event.target.value))}>
        <option>Month</option>
        {new Array(11).fill(0).map((_, index) => <option>{currentMonth - index}</option>)}
      </select>
      <select value={currentDay} onChange={event => setCurrentDay(Number(event.target.value))}>
        <option>Day</option>
        {new Array(30).fill(0).map((_, index) => <option>{currentDay - index}</option>)}
      </select>
    </div>
  );
}

export default DateFilter;
