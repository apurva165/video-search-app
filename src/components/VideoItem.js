import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  //videos.map(video => {

  return (
    <div onClick={() => onVideoSelect(video)} className="item">
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
      <img
        className="ui image avator"
        src={video.snippet.thumbnails.medium.url}
        alt="images"
      />
    </div>
  );
};

export default VideoItem;
