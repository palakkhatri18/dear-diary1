import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const CalendarComponent = () => {
  const navigate = useNavigate();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleDayClick = (selectedDate: Date) => {
    if (selectedDate && selectedDate instanceof Date) {
      const formatted = format(selectedDate, "yyyy-MM-dd");
      navigate(`/entry/${formatted}`);
      setDate(selectedDate);
    }
  };

  return (
    <div className="text-zinc-800">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        onDayClick={handleDayClick}
        captionLayout="dropdown"
        fromYear={1980}
        toYear={new Date().getFullYear() + 5}
        disabled={() => false}
      />
    </div>
  );
};

export default CalendarComponent;