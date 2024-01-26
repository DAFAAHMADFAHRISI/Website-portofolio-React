import { HeartIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-white">
      <div className="max-w-6xl mx-auto flex justify-center items-center text-center">
        <p className="text-gray-500">Diubat dengan </p>
        <HeartIcon className="h-6 w-6 text-gray-500 mx-1" />
        <p className="text-gray-500">oleh Ahdiat Brafiadi</p>
      </div>
    </footer>
  );
};

export default Footer;
