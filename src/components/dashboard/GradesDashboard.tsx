import { Button } from "../ui/button";
import { studentLessonData } from "@/data/mocked/teacher";
import { PlusIcon } from "lucide-react";
import GradeOperations from "./GradeOperations";
import { toast } from "sonner";
import GradeForm from "./GradeForm";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

const GradesDashboard = () => {
  const [showDialog, setShowDialog] = useState(false);

  if (false) return <GradesDashboardSkeleton />;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 text-center">
        <h1 className="mb-3 text-2xl font-bold">
          {studentLessonData.fullName}
        </h1>
        <h2 className="text-lg">Student's grades</h2>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <div className="flex-1"></div>
        <Button
          className="flex items-center justify-end"
          onClick={() => setShowDialog(true)}
        >
          <PlusIcon className="mr-2 h-5 w-5" />
          Add Grade
        </Button>
      </div>

      <ul className="rounded border shadow-sm">
        {studentLessonData.grades.map((grade, index) => (
          <li
            // TODO : Actual index
            key={index}
            className="flex items-center justify-between border-b p-4 last:border-b-0"
          >
            <div className="space-y-1">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Score: {grade.score}
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Date: {grade.assessmentDate}
              </p>
              <p className="text-sm text-slate-700  dark:text-slate-300">
                Comment: {grade.comment}
              </p>
            </div>
            <div>
              <GradeOperations grade={grade} />
            </div>
          </li>
        ))}
      </ul>
      <GradeForm
        open={showDialog}
        setOpen={setShowDialog}
        type="Add"
        onSubmit={() => toast.success("Added!")}
      />
    </div>
  );
};

export default GradesDashboard;

const GradesDashboardSkeleton = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex flex-col items-center justify-center">
        <Skeleton className="mb-3 h-8 w-4/12" />
        <Skeleton className="h-7 w-40" />
      </div>

      <div className="mb-8 flex justify-end">
        <Skeleton className="h-10 w-36" />
      </div>

      <ul className="rounded border shadow-sm">
        {[...Array(2)].map((_, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b p-4 last:border-b-0"
          >
            <div className="flex-1 space-y-1">
              <Skeleton className="h-6 w-1/12" />
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-5 w-1/3" />
            </div>
            <Skeleton className="h-8 w-8" />
          </li>
        ))}
      </ul>
    </div>
  );
};