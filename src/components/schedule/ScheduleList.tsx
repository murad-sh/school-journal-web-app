import { studentLessons } from '@/data/mocked/student-lessons';
import { organizeScheduleByDay } from '@/lib/calculations/schedule';
import ScheduleListItem from './ScheduleListItem';

const ScheduleList = () => {
  const scheduleByDay = organizeScheduleByDay(studentLessons);
  const daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="container p-4">
      {daysOrder.map(
        (day) =>
          scheduleByDay[day] && (
            <div key={day} className="mb-10">
              <h2 className="text-lg font-semibold mb-2">{day}</h2>
              <ul className="bg-white shadow overflow-hidden rounded-md">
                {scheduleByDay[day].map((lesson, index) => (
                  <ScheduleListItem key={index} lesson={lesson} />
                ))}
              </ul>
            </div>
          )
      )}
    </div>
  );
};

export default ScheduleList;