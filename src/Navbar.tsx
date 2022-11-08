const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <img className="h-8" src="logo.png" alt="Cybersecutiry Logo" />
      <ul className="flex justify-between text-md gap-6">
        <li className="text-[#1A47E5]">Home</li>
        <li>Network Security</li>
        <li>National Security</li>
        <li>Cloud Security</li>
      </ul>
      <button className="px-4 py-2 bg-[#1A47E5] text-white">Contact Now</button>
    </nav>
  );
};

export default Navbar;
