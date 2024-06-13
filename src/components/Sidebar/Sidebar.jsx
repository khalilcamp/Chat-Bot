import React, { useState, useEffect, useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { BsChatDots, BsChatFill } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt } = useContext(Context);

  const [location, setLocation] = useState(null); // State to store user location

  // Function to fetch user location using Geolocation API
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        },
        { enableHighAccuracy: true } // Optional: Request high accuracy
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
    }
  };

  // Use useEffect hook to fetch location on component mount
  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="sidebar">
      <div className="top">
        <FiAlignJustify
          size={30}
          onClick={() => setExtended(!extended)}
          className="menu"
        />
        <div className="newChat">
          <BsChatDots size={20} />

          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div className="recent-entry">
                  <BsChatFill />
                  <p>{item} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />         {" "}
          {extended ? <p> Help </p> : null}       {" "}
        </div>
               {" "}
        <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />         {" "}
          {extended ? <p> Activity </p> : null}       {" "}
        </div>
               {" "}
        <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />         {" "}
          {extended ? <p> Settings </p> : null}       {" "}
        </div>
        {location && (
          <div className="location-info">
            <p>{location.latitude}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
