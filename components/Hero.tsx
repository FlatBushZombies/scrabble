import React from 'react';
import WaitingList from './WaitingList';

const Hero = () => {
  return (
    <section className="flex flex-col items-center px-4 py-8 md:px-16">

      {/* Heading */}
      <div className="text-center mt-6">
        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight md:leading-none font-general">
          Empowering users and organizations with <br />
          <span className="text-primary">AI-Driven Insights</span>
        </h1>
        <p className="about-subtext text-base md:text-lg text-center text-gray-700 mb-12">
          Scrabble transforms how businesses and individuals make decisions, optimize workflows by combining cutting-edge AI metrics for the tools you use to grow faster and smarter.
        </p>
      </div>

      {/* Waiting List Section */}
      <div className="mt-20 w-full max-w-md border-t pt-8">
        <WaitingList />
      </div>

    </section>
  );
};

export default Hero;
