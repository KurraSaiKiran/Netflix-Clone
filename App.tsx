import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import FAQ from './components/FAQ';
import Reasons from './components/Reasons';
import { trendingMovies, topPicksMovies } from './data/movies';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-10 -mt-40 pb-8">
          <MovieRow title="Trending Now" movies={trendingMovies} />
          <MovieRow title="Top 10 TV Shows in India Today" movies={topPicksMovies} />
        </div>
        <Reasons />
        <FAQ />
      </main>
    </div>
  );
}

export default App;