import { useEffect } from "react";
import { useApi } from "./Hooks/useApi";
import { useState } from "react";

export const VedioPlay = () => {
  const { vedioData, playVedio } = useApi([]);
  console.log("ved", vedioData);
  const [vedioId, setVedioId]= useState(null)
  console.log(vedioId);
  

  useEffect(() => {
    playVedio();
  }, []);
  const handlePlay = (id)=>{
    setVedioId(id)
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {vedioId && (
        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${vedioId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-t-2xl"
        ></iframe>
      )}
      {vedioData?.map((item, index) => {
        
          const vedioData = item.items
         return <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={vedioData.snippet?.thumbnails?.high?.url}
              alt={item.snippet?.title}
              className="w-full h-48 object-cover"
              onClick={() => handlePlay(vedioData.id)}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {vedioData.snippet?.channelTitle}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                {/* {item.items.snippet?.description} */}
              </p>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                {item.kind}
              </span>
            </div>
          </div>
        
})}
    </div>
  );
};
