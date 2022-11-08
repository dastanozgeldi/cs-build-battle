const Info = () => {
  return (
    <div className="relative min-h-screen px-12 py-8">
      <div className="w-[70%] space-y-2">
        <h1 className="text-5xl font-bold">
          Protector Amongst The Leading Technology Firms By The Industry.
        </h1>
        <p className="text-2xl text-gray-500">
          Enable Cyber Situational Awareness by “securing” networks.
        </p>
      </div>

      {/* Features */}
      <div className="flex py-12">
        <div className="space-y-2">
          <img
            className="p-3 bg-gray-200 rounded-xl"
            src="network.png"
            alt=""
          />
          <h2 className="text-3xl font-bold">1 Trillion+ Network</h2>
          <p className="text-gray-500">
            Network sessions transformed to actionable intelligence.
          </p>
        </div>
        <div className="space-y-2">
          <img
            className="p-3 bg-gray-200 rounded-xl"
            src="protocol.png"
            alt=""
          />
          <h2 className="text-3xl font-bold">4500+ Protocols</h2>
          <p className="text-gray-500">
            Protocols supported on wired, wireless, radio and satellite
            networks.
          </p>
        </div>
        <div className="space-y-2">
          <img
            className="p-3 bg-gray-200 rounded-xl"
            src="computer.png"
            alt=""
          />
          <h2 className="text-3xl font-bold">Cyber Manage Risk</h2>
          <p className="text-gray-500">
            Manage cyber risks while reducing incident response costs by over
            60%
          </p>
        </div>
      </div>

      <img src="info-bottom.png" alt="" className="absolute bottom-0" />
    </div>
  );
};

export default Info;
