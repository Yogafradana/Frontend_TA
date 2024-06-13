import React from "react";
import "./TentangKami.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Navbar/Banner";

// Import gambar
import gambar1 from "../../assets/gambar1.png";
import gambar2 from "../../assets/gambar2.png";
import gambar3 from "../../assets/gambar3.png";

const TentangKami = () => {
  return (
    <>
      <Banner />
      <div>
        {/* <Header /> */}
      </div>
      <div className="tentang-kami">
        <h2 className="home-title-menu-section">Tentang Kami</h2>
        <p>
          Butuh tempat ngoding yang nyaman dan asyik? Datang ke Cafe Microdata,
          tempat nongkrong ideal bagi para programmer! <br />
          Microdata bukan hanya cafe biasa. Di sini, kamu akan menemukan suasana
          yang sempurna untuk fokus coding, bertukar ide, dan bersantai bersama
          komunitas programmer yang asyik. Mengapa Microdata?
        </p>
        <ul>
          <li>
            Kopi berkualitas tinggi: Kami menggunakan biji kopi pilihan dan
            racikan istimewa untuk memberikanmu kopi terbaik yang meningkatkan
            fokus dan konsentrasimu.
          </li>
          <li>
            Wi-Fi kencang dan stabil: Bebaskan diri dari koneksi internet yang
            lemot! Microdata memiliki Wi-Fi kencang dan stabil untuk memastikan
            kelancaran coding projectmu.
          </li>
          <li>
            Stopkontak di setiap meja: Tak perlu khawatir laptopmu kehabisan
            baterai. Stopkontak tersedia di setiap meja untuk memastikan kamu
            bisa ngoding tanpa henti.
          </li>
          <li>
            Suasana tenang dan nyaman: Bekerja dengan fokus dan bebas gangguan
            di ruangan yang tenang dan nyaman.
          </li>
          <li>
            Menu camilan dan makanan lezat: Isi energimu dengan camilan dan
            makanan lezat yang tersedia di Microdata.
          </li>
          <li>
            Komunitas programmer yang ramah: Temukan teman baru, bertukar ide,
            dan dapatkan inspirasi dari komunitas programmer yang asyik di
            Microdata.
          </li>
        </ul>
        <h2>Datang dan rasakan sendiri pengalaman ngoding yang berbeda di Microdata!</h2>
      </div>
      <main className="gallery">
        <img src={gambar1} alt="Gambar 1" />
        <img src={gambar2} alt="Gambar 2" />
        <img src={gambar3} alt="Gambar 3" />
      </main>
    </>
  );
};

export default TentangKami;
