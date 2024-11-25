import React, { useState, useEffect } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
  const [muted, setMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[85vh] w-full">
      <div className="absolute inset-0">
        {videoLoaded ? (
          <video
            autoPlay
            muted={muted}
            loop
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-xl">
            <img
              src="https://occ-0-2186-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcZdjcnDphK1TiPkNt3X5oGKUYxzlU4zqCCh8cxNHitas9cc_2kwn-V0UyRXZyEQAFP-fzg_vw3J345_6qZJPrE9JdMREyolKWUw.webp?r=50c"
              alt="Stranger Things"
              className="w-full max-w-md mb-6"
            />
            <p className="text-lg text-gray-300 mb-6">
              When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center px-8 py-3 bg-white text-black rounded hover:bg-gray-200 transition font-medium">
                <Play className="h-6 w-6 mr-2" fill="black" />
                Play
              </button>
              <button className="flex items-center px-8 py-3 bg-gray-500/70 text-white rounded hover:bg-gray-500/90 transition font-medium">
                <Info className="h-6 w-6 mr-2" />
                More Info
              </button>
              <button
                onClick={() => setMuted(!muted)}
                className="ml-auto p-3 rounded-full border border-white/70 hover:border-white hover:bg-white/10"
              >
                {muted ? (
                  <VolumeX className="h-6 w-6 text-white" />
                ) : (
                  <Volume2 className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}