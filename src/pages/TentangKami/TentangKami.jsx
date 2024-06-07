import React from "react";
import "./TentangKami.css";
import Header from "../../components/Header/Header";

const TentangKami = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
      </div>
      <div className="tentang-kami">
        <h3 align="center">Tentang Kami</h3>
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
        Datang dan rasakan sendiri pengalaman ngoding yang berbeda di Microdata!
      </div>
    </>
  );
};

export default TentangKami;
