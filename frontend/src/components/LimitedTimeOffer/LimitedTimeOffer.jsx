import { useState, useEffect } from "react";

const LimitedTimeOffer = () => {
  const targetDate = new Date().getTime() + 86400000; // Set the target date for 24 hours from now
  const [timeRemaining, setTimeRemaining] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="bg-purple-600 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Limited Time Offer</h2>
        <p className="mt-2 text-lg">Get 50% off on your first purchase! Hurry, time is ticking!</p>
        <div className="mt-4 flex justify-center space-x-6">
          <div className="bg-white text-purple-600 py-2 px-4 rounded-lg shadow-md">
            <span className="font-bold text-xl">{hours}</span>
            <p className="text-sm">Hours</p>
          </div>
          <div className="bg-white text-purple-600 py-2 px-4 rounded-lg shadow-md">
            <span className="font-bold text-xl">{minutes}</span>
            <p className="text-sm">Minutes</p>
          </div>
          <div className="bg-white text-purple-600 py-2 px-4 rounded-lg shadow-md">
            <span className="font-bold text-xl">{seconds}</span>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
        {timeRemaining <= 0 ? (
          <p className="mt-4 text-xl">Offer has ended!</p>
        ) : (
          <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
            Claim Offer Now
          </button>
        )}
      </div>
    </div>
  );
};

export default LimitedTimeOffer;
