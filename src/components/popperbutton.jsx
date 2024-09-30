import confetti from "canvas-confetti";

function PartyPopper() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="h-screen w-screen bg-gray-600 flex items-center justify-center">
      <button
        onClick={triggerConfetti}
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Submit
      </button>
    </div>
  );
}

export default PartyPopper;
