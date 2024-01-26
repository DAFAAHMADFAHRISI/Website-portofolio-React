import ImageTwo from "@/assets/foto2.jpg";
import "./awal.css";

function Awal() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="main-content">
        <h1>I am a Designer</h1>
        <p>100% ReactJs</p>
        <a href="portfolio" className="portfolio-button">
          VIEW PORTFOLIO
        </a>
      </div>
      <div className="bungkusfoto">
        <img src={ImageTwo} alt="Deskripsi Gambar" className="foto" />
      </div>
    </>
  );
}
export default Awal;
