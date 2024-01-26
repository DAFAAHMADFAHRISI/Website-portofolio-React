import foto1 from "../../assets/foto1.jpg";

const Awal = () => {
  return (
    <>
      <div className="relative ">
        <img src={foto1} alt="John" className="w-80  h-80 rounded-full object-cover border-4 border-white shadow-lg" />
      </div>
      <div className="ml-16">
        <h1 className="text-6xl font-bold mt-6">Hi, I'm Dafa 👋</h1>
        <h2 className="text-2xl font-light mt-3">I'm a New Developer.</h2>

        {/* Social links */}
      </div>
    </>
  );
};

export default Awal;
