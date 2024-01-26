const Header = () => {
  return (
    <header className="w-full py-5 px-10 bg-white   ">
      <div className="max-w-6xl mx-auto flex justify-center items-center text-center">
        <nav className="flex space-x-20">
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="/about" className="text-gray-600 hover:text-gray-800">
            About me
          </a>
          <a href="/portofolio" className="text-gray-600 hover:text-gray-800">
            Portfolio
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
