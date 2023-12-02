import { WeekDays } from '../shared/Consts';
import { Flex } from 'antd';
import { WeekDay } from './weekDay';
import { Day } from './Day';

type Props = {
  currentDate: Date;
  startDay: number;
  Days: number[];
  day: number;
  month: number;
  year: number;
  today: Date;
  setDate: (date: Date) => void;
};

const Main = ({
  currentDate,
  startDay,
  Days,
  month,
  year,
  today,
  setDate,
  day,
}: Props) => {
  console.log(currentDate);
  return (
    <div>
      <Flex>
        {WeekDays.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </Flex>
      <Flex wrap="wrap">
        {Array(Days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            const m = today.getMonth();
            const y = today.getFullYear();

            return (
              <Day
                key={index}
                isToday={d === today.getDate() && m === month && y === year}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 ? d : ''}
              </Day>
            );
          })}
      </Flex>
    </div>
  );
};

export default Main;
