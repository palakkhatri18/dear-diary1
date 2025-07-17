import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/CalendarComponent.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
const CalendarComponent = () => {
    const navigate = useNavigate();
    const [date, setDate] = React.useState(new Date());
    const handleDayClick = (selectedDate) => {
        if (!selectedDate)
            return;
        const formatted = format(selectedDate, "yyyy-MM-dd");
        navigate(`/entry/${formatted}`);
        setDate(selectedDate);
    };
    return (_jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen bg-zinc-700 text-white", children: [_jsx("h1", { className: "text-3xl font-semibold mb-4", children: "Welcome to your diary \uD83D\uDCD2 Start journaling your day!" }), _jsx("div", { className: "bg-white p-4 rounded-lg shadow-md text-black", children: _jsx(Calendar, { mode: "single", selected: date, onSelect: (d) => setDate(d), onDayClick: handleDayClick, captionLayout: "dropdown", disabled: () => false }) })] }));
};
export default CalendarComponent;
