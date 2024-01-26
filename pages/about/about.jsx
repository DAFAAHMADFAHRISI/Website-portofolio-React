import "./about.css";

function About() {
  return (
    <div className="about-me">
      <h1>Tentang Saya</h1>
      <div className="profile-container">
        <img src="profile.jpg" alt="Profile" className="profile-image" />
        <div className="bio">
          <p>
            Halo semua, perkenalkan, saya [Nama] dari [Lokasi]. Saya memiliki
            minat dalam [Minat 1] dan [Minat 2]. ...
          </p>
          <p>[Paragraf bio tambahan]</p>
        </div>
      </div>
      <p>Terima kasih telah mengunjungi halaman saya!</p>
    </div>
  );
}

export default About;
