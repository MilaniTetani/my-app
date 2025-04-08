"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showTimetable, setShowTimetable] = useState(false);

  return (
    <main className="main-wrapper">
      <div className="welcome-container">
        <h1 className="welcome-heading">
          Welcome to Milani's 2025 School and Study TimeTable
        </h1>
        <Image
          src="/studying.gif"
          alt="Studying Gif"
          width={300}
          height={300}
          className="study-gif"
        />
        <button className="show-btn" onClick={() => setShowTimetable(true)}>
          Click to see!
        </button>
      </div>

      {showTimetable && (
        <div className="timetables">
          <div className="timetable-box">
            <h2>📚 School Timetable</h2>
            <p>I will insert my school subjects here</p>
          </div>
          <div className="timetable-box">
            <h2>📖 Study Timetable</h2>
            <p>I will insert my study schedule here</p>
          </div>
        </div>
      )}
    </main>
  );
}
