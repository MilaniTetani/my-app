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
        <div className="button-container">
          <button className="show-btn" onClick={() => setShowTimetable(true)}>
            Click to see!
          </button>
        </div>
      </div>

      {showTimetable && (
        <div className="timetables">
          <div className="timetable-box">
            <h2>📚 School Timetable</h2>
            <p>
            <table className="schooltimetable">
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
              <tr>
                <td>07:45</td>
                <td></td>
                <td></td>
                <td></td>
                <td>MAP 311</td>
                <td>CS 302</td>
              </tr>
              <tr>
                <td>08:40</td>
                <td>CS 302</td>
                <td></td>
                <td></td>
                <td></td>
                <td>MAM 311</td>
              </tr>
              <tr>
                <td>09:35</td>
                <td>MAM 311</td>
                <td>CS 302</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>10:30</td>
                <td></td>
                <td>MAP 311</td>
                <td>CS 302</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>11:25</td>
                <td></td>
                <td></td>
                <td>MAM 311</td>
                <td>CS 302</td>
                <td></td>
              </tr>
              <tr>
                <td>12:20</td>
                <td></td>
                <td></td>
                <td>MAP 311</td>
                <td>CS 302</td>
                <td></td>
              </tr>
              <tr>
                <td>13:15</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>14:15</td>
                <td></td>
                <td>MAT1F Tutoring</td>
                <td>MAM 311 Tutorial</td>
                <td>CS 302 Prac</td>
                <td></td>
              </tr>
              <tr>
                <td>15:10</td>
                <td></td>
                <td>MAT1F Tutoring</td>
                <td>MAP 311 Tutorial</td>
                <td>CS 302 Prac</td>
                <td></td>
              </tr>
              <tr>
                <td>16:05</td>
                <td></td>
                <td></td>
                <td></td>
                <td>CS 302 Prac</td>
                <td></td>
              </tr>
              <tr>
                <td>17:00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
            </p>
            <p>
              <h3><u>Full Course Names:</u></h3>
              <ul>
                <b>
                <li>MAM 311 - Complex Analysis</li>
                <li>MAP 311 - Numerical Analysis</li>
                <li>CS 302 - Computer Science</li>
                <li>MAT1F - Mathematics Foundation</li>
                </b>
              </ul>
            </p>
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
