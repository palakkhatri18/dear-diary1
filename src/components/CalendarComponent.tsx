import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const CalendarComponent = () => {
  const navigate = useNavigate();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleDayClick = (selectedDate: Date) => {
    // Check if selectedDate is a valid Date object before formatting
    if (selectedDate && selectedDate instanceof Date) {
      const formatted = format(selectedDate, "yyyy-MM-dd");
      navigate(`/entry/${formatted}`);
      setDate(selectedDate);
    }
  };

  return (
    // We've removed the outer div and the h1 to make this component reusable
    <div className="bg-white p-4 rounded-lg shadow-lg text-black">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        onDayClick={handleDayClick}
        captionLayout="dropdown"
        fromYear={1980} // Good for dropdowns
        toYear={new Date().getFullYear() + 5} // Good for dropdowns
        disabled={() => false}
      />
    </div>
  );
};

export default CalendarComponent;