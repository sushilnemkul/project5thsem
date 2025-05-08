import React, { useState, useRef, useEffect } from "react";
import "./Search.css";

export default function SearchPopup() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  // Handle click outside popup to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <button className="search-btn" onClick={() => setOpen(true)}>
        Search
      </button>
      

      {open && (
        <div className="overlayy">
          <div className="popup" ref={popupRef}>
            <button className="close-btn" onClick={() => setOpen(false)}>×</button>
            <div className="search-area">
              <input type="text" placeholder="Search..." className="search-input" />
              <button className="submit-btn">Search</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
