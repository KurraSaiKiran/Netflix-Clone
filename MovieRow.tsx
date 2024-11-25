import React from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <div className="mb-8 group/row">
      <h2 className="text-xl font-medium text-white mb-2 px-4">{title}</h2>
      <div className="relative">
        <div className="flex gap-2 overflow-x-scroll scrollbar-hide px-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative flex-none w-[280px] aspect-video group"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded w-full h-full object-cover transition duration-300 group-hover:brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition">
                      <Play className="h-6 w-6" fill="black" />
                    </button>
                    <button className="p-2 border-2 border-white/70 rounded-full hover:border-white hover:bg-white/10">
                      <Plus className="h-6 w-6 text-white" />
                    </button>
                    <button className="p-2 border-2 border-white/70 rounded-full hover:border-white hover:bg-white/10">
                      <ThumbsUp className="h-6 w-6 text-white" />
                    </button>
                    <button className="p-2 border-2 border-white/70 rounded-full hover:border-white hover:bg-white/10">
                      <ChevronDown className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}