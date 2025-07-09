import { useEffect, useState } from "react";
import { useApi } from "./Hooks/useApi";

export const VedioPlay = () => {
  const { vedioData, playVedio } = useApi();
  const [vedioId, setVedioId] = useState(null);

  useEffect(() => {
    playVedio();
  }, []);

  const handlePlay = (id) => {
    setVedioId(id);
  };

  return (
    <div className="p-6  min-h-screen text-white flex flex-col lg:flex-row gap-8">
      <div className="lg:w-2/3 w-full rounded-2xl p-4 shadow-lg">
        {vedioId && (
          <iframe
            width="100%"
            height="700"
            src={`https://www.youtube.com/embed/${vedioId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        )}
      </div>

      <div className="lg:w-1/3 w-full overflow-y-auto space-y-6 max-h-[90vh] rounded-md">
        {vedioData?.map((item, index) => {
          const video = item.items;
          return (
            <div
              key={index}
              onClick={() => handlePlay(video.id)}
              className="cursor-pointer bg-white text-gray-800 rounded-xl shadow-md hover:shadow-xl  transition-all duration-300"
              onMouseEnter={() => handlePlay(video.id)}
            >
              <img
                src={video.snippet?.thumbnails?.high?.url}
                alt={video.snippet?.title}
                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300" 
              />
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
    </div>
  );
};
