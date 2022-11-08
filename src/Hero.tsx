const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen flex items-center justify-between px-20"
    >
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold uppercase border-b-[#1A47E5] border-b-[4px] max-w-max">
          Cybersecurity
        </h1>
        <p className="text-gray-400 text-2xl w-[90%]">
          Be aware of hacker attacks and defeat them by being secured
        </p>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1A47E5] text-white">
          Learn More
          <img className="w-4" src="up-right.png" alt="" />
        </button>
      </div>

      <img
        src="Cyber attack-rafiki.png"
        alt="Cyber Attacker"
        className="w-[50%]"
      />
    </div>
  );
};

export default Hero;
