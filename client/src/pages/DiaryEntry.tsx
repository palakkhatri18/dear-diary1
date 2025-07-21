// src/pages/DiaryEntry.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { format, parseISO } from "date-fns";

const DiaryEntry = () => {
  const { date } = useParams();
  const { user } = useUser();
  const userId = user?.id;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [entryText, setEntryText] = useState("");
  const [mood, setMood] = useState("");
  const [tags, setTags] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEntry = async () => {
      if (!userId || !date) return;

      try {
        const res = await axios.get(`${BACKEND_URL}/api/diary/${userId}/${date}`);
        setEntryText(res.data.entryText);
        setMood(res.data.mood);
        setTags(res.data.tags.join(", "));
      } catch (err) {
        setEntryText("");
        setMood("");
        setTags("");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEntry();
  }, [userId, date]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/api/diary`, {
  userId,
  date,
  entryText,
  mood,
  tags: tags.split(",").map((tag) => tag.trim()),
});

      alert("Entry saved!");
    } catch (err) {
      alert("Failed to save entry.");
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Diary for {date ? format(parseISO(date), "MMMM d, yyyy") : ""}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full border p-2"
          rows={6}
          placeholder="Write your thoughts..."
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
        />
        <input
          className="w-full border p-2"
          placeholder="Mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
        <input
          className="w-full border p-2"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button
          type="submit"
          className="bg-zinc-800 text-white px-4 py-2 rounded hover:bg-zinc-700"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
};

export default DiaryEntry;
