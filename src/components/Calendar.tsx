import { useState, useEffect } from 'react';
import { days, leapDays, months } from './shared/Consts';
import Header from './header/Header';
import Main from './main/Main';
import { Flex } from 'antd';

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const getStartDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const Days = isLeapYear(date.getFullYear()) ? leapDays : days;

  return (
    <Flex vertical gap={32}>
      <h1>Calendar</h1>
      <div className="calendar">
        <Header
          month={months[month]}
          year={year}
          onNext={() => setDate(new Date(year, month + 1, day))}
          onPrevious={() => setDate(new Date(year, month - 1, day))}
        />
        <Main
          currentDate={today}
          startDay={startDay}
          Days={Days}
          month={month}
          year={year}
          today={today}
          setDate={setDate}
          day={day}
        />
      </div>
    </Flex>
  );
};

export default Calendar;
