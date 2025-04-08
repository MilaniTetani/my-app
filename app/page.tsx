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
          src="/study.gif"
          alt="Studying Gif"
          width={300}
          height={300}
          className="study-gif"
        />
        <button className="show-btn" onClick={() => setShowTimetable(true)}>
          Click to see!
        </button>
      </div>
    </main>
  );
}
