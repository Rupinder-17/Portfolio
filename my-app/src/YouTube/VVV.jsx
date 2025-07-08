import { useEffect, useState } from "react";
import { useApi } from "./Hooks/useApi";

export const VedioPlay2 = () => {
  const { vedioData, playVedio } = useApi();
  const [hoveredVideo, setHoveredVideo] = useState(null);

  useEffect(() => {
    playVedio();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {vedioData?.map((item, index) => {
        const video = item.items;
        const isHovered = hoveredVideo === video.id;

        return (
          <div
            key={index}
            className="rounded-xl shadow-md bg-white text-black relative overflow-hidden"
            onMouseEnter={() => setHoveredVideo(video.id)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            {isHovered ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1`}
                title="hover video"
                allow="autoplay"
                frameBorder="0"
                className="w-full h-60"
              ></iframe>
            ) : (
              <img
                src={video.snippet?.thumbnails?.high?.url}
                alt={video.snippet?.title}
                className="w-full h-60 object-cover"
              />
            )}

            <div className="p-3">
              <h3 className="text-md font-semibold truncate">
                {video.snippet?.title}
              </h3>
              <p className="text-sm text-gray-600 truncate">
                {video.snippet?.channelTitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
