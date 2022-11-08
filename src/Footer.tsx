const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-8 py-4 border-t-[4px] border-t-[#1A47E5]">
      <img className="h-8" src="logo.png" alt="" />
      <h1 className="text-gray-500">© Computer Science 2022</h1>
      <a
        href="#hero"
        className="flex items-center gap-2 px-4 py-2 bg-[#1A47E5] text-white"
      >
        Go Up
        <img className="w-4" src="arrow-up.png" alt="" />
      </a>
    </footer>
  );
};

export default Footer;
