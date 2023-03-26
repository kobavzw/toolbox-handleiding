import React from 'react';

export default function Youtube({ url }) {
    return (
        <div className="w-full aspect-video">
      <iframe
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full aspect-video"
      ></iframe>
      </div>
    );
  }
  