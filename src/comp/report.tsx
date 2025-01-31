import { Card } from "@/components/ui/card";
import React from "react";
import { report } from "@/lib/data";
import { useState } from "react";
import { ChevronDownCircle } from "lucide-react";

function Report() {
  const completedItems = report.filter((item) => item.status === "completed");
  const failedItems = report.filter((item) => item.status === "failed");
  const [isCompletedOpen, setIsCompletedOpen] = useState(true);
  const [isFailedOpen, setIsFailedOpen] = useState(true);

  return (
    <div className="report-main-box">
      {/* Completed Dropdown */}
      <div className="status-container">
        <button
          className="status-button"
          onClick={() => setIsCompletedOpen(!isCompletedOpen)}
        >
          Completed {completedItems.length}
          <ChevronDownCircle
            className={`icon ${isCompletedOpen ? "rotate" : ""}`}
            size={20}
          />
        </button>
        <div className={`status-list ${isCompletedOpen ? "open" : ""}`}>
          {completedItems.map((item) => (
            <div key={item.id} className="status-item">
              {item.id}
            </div>
          ))}
        </div>
      </div>

      {/* Failed Dropdown */}
      <div className="status-container">
        <button
          className="status-button failed"
          onClick={() => setIsFailedOpen(!isFailedOpen)}
        >
          Failed {failedItems.length}
          <ChevronDownCircle
            className={`icon ${isFailedOpen ? "rotate" : ""}`}
            size={20}
          />
        </button>
        <div className={`status-list ${isFailedOpen ? "open-failed open" : ""}`}>
          {failedItems.map((item) => (
            <div key={item.id} className="status-item">
              {item.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Report;
