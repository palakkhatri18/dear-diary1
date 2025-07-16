// src/components/CalendarComponent.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const CalendarComponent = () => {
  const navigate = useNavigate();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleDayClick = (selectedDate: Date) => {
    if (!selectedDate) return;
    const formatted = format(selectedDate, "yyyy-MM-dd");
    navigate(`/entry/${formatted}`);
    setDate(selectedDate);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-700 text-white">
      <h1 className="text-3xl font-semibold mb-4">
        Welcome to your diary 📒 Start journaling your day!
      </h1>
      <div className="bg-white p-4 rounded-lg shadow-md text-black">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => setDate(d)} // still update selection
          onDayClick={handleDayClick} // ✅ this fixes today not clickable
          captionLayout="dropdown"
          disabled={() => false}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
