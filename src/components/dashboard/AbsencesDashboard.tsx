import { studentLessonData } from "@/data/mocked/teacher";
import AbsenceOperation from "./AbsenceOperation";
import { Skeleton } from "../ui/skeleton";

const AbsencesDashboard = () => {
  if (false) return <AbsencesDashboardSkeleton />;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 text-center">
        <h1 className="mb-3 text-2xl font-bold">
          {studentLessonData.fullName}
        </h1>
        <h2 className="text-lg">Student's absences</h2>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <div className="flex-1"></div>
        <AbsenceOperation type="add" />
      </div>

      <ul className="rounded border shadow-sm">
        {studentLessonData.absences.map((absence, index) => (
          <li
            // TODO : Actual index
            key={index}
            className="flex items-center justify-between border-b p-4 last:border-b-0"
          >
            <p className="font-semibold">{absence.date}</p>
            <AbsenceOperation type="delete" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbsencesDashboard;

const AbsencesDashboardSkeleton = () => {
  return (
    <div className="container p-4">
      <div className="mb-6 flex flex-col items-center justify-center">
        <Skeleton className="mb-3 h-8 w-4/12" />
        <Skeleton className="h-7 w-40" />
      </div>

      <div className="mb-8 flex justify-end">
        <Skeleton className="h-10 w-36" />
      </div>

      <ul className="rounded border shadow-sm">
        {[...Array(4)].map((_, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b p-4 last:border-b-0"
          >
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-9 w-11" />
          </li>
        ))}
      </ul>
    </div>
  );
};