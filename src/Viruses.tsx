const Viruses = () => {
  return (
    <div className="min-h-screen">
      <header className="max-w-[76ch] mx-auto text-center space-y-2 py-8">
        <h1 className="text-4xl font-bold">Top Viruses To Be Aware Of</h1>
        <p className="text-gray-500 text-xl">
          Computer viruses are now a damaging and costly plague on our
          internet-connected world. More than 350,000 new pieces of malware are
          discovered every day, with an annual cost of over $55 billion.
        </p>
      </header>

      {/* MyDoom */}
      <div className="flex items-center justify-around">
        <img src="Fingerprint-rafiki.png" alt="" className="w-[35%]" />
        <div className="max-w-[40ch] text-right space-y-4">
          <h1 className="text-[#1A47E5] border-b-[4px] border-b-[#1A47E5] text-4xl font-bold">
            Mydoom - $38b
          </h1>
          <p className="text-gray-500 text-xl">
            Mydoom caused estimated damage of $38 billion in 2004, but its
            inflation-adjusted cost is actually $52.2 billion. Mydoom scraped
            addresses from infected machines, then sent copies of itself to
            those addresses.
          </p>
        </div>
      </div>
      {/* Sobig */}
      <div className="flex items-center justify-around">
        <div className="max-w-[40ch] space-y-4">
          <h1 className="text-[#1A47E5] border-b-[4px] border-b-[#1A47E5] text-4xl font-bold">
            Sobig - $30b
          </h1>
          <p className="text-gray-500 text-xl">
            The $30 billion figure is a worldwide total. This cybercriminal
            program masqueraded as legitimate computer software attached to
            emails. It disrupted ticketing at Air Canada and interfered with
            countless other businesses. The creator of the successful bug was
            never caught.
          </p>
        </div>
        <img src="Fingerprint-rafiki.png" alt="" className="w-[40%]" />
      </div>
      {/* WannaCry */}
      <div className="flex items-center justify-around">
        <img src="Fingerprint-rafiki.png" alt="" className="w-[40%]" />
        <div className="max-w-[40ch] text-right space-y-4">
          <h1 className="text-[#1A47E5] border-b-[4px] border-b-[#1A47E5] text-4xl font-bold">
            WannaCry - $4b
          </h1>
          <p className="text-gray-500 text-xl">
            WannaCry is a virus that takes over your computer and holds them
            hostage. The WannaCry ransomware ripped through computers in 150
            countries, causing massive productivity losses. The malware raged
            like wildfire through 200,000 computers worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Viruses;
