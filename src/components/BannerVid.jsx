import React from "react";
import "../style.css";

const BannerVid = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video w-screen object-fill"
      >
        <source
          src="https://www.in-plus.co.jp/wp-content/uploads/01_eSIM_v2-7_1205_1080p.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default BannerVid;
