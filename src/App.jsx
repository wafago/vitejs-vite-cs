import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { FaTools, FaHome, FaPaintRoller, FaHammer } from 'react-icons/fa';
import CountUp from 'react-countup'; // Import CountUp untuk animasi angka
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header dengan menu dan logo */}
      <header className="header">
        <div className="logo">
          <a href="/"><img src={viteLogo} alt="Logo Vite" /></a>
          <a href="/"><img src={reactLogo} alt="Logo React" /></a>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button> 
        <nav className="menu">
          <a href="#beranda">Beranda</a>
          <a href="#layanan-online">Layanan Online</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#profil">Profil</a>
          <a href="#organisasi">Organisasi</a>
          <a href="#artikel">Artikel</a>
          <a href="#karir">Karir</a>
        </nav>
        <a
          href="https://wa.me/6281234567890"
          className="consult-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Konsultasi Gratis
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Jasa Bangun Rumah Jember</h1>
        <p>Melayani area: Jember, Banyuwangi, Lumajang, Bondowoso, Surabaya</p>
        <div className="hero-buttons">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hero-button">
            Hubungi Kami
          </a>
          <a href="#portfolio" className="hero-button">
            Lihat Portfolio
          </a>
        </div>
      </section>

      {/* Layanan Kami Section */}
      <section className="services" id="layanan-online">
        <h2>Layanan Kami</h2>
        <div className="service-cards">
          <div className="service-card">
            <FaHome size={50} color="#3498db" />
            <h3>Jasa Bangun</h3>
            <p>Membangun rumah dari dasar hingga siap huni sesuai keinginan Anda.</p>
          </div>
          <div className="service-card">
            <FaHammer size={50} color="#e74c3c" />
            <h3>Jasa Renovasi</h3>
            <p>Mengubah dan memperbaiki rumah Anda dengan layanan renovasi terbaik.</p>
          </div>
          <div className="service-card">
            <FaPaintRoller size={50} color="#f1c40f" />
            <h3>Interior</h3>
            <p>Mendesain dan menata interior agar rumah terlihat lebih menarik dan nyaman.</p>
          </div>
          <div className="service-card">
            <FaTools size={50} color="#2ecc71" />
            <h3>Eksterior</h3>
            <p>Menciptakan desain eksterior yang kuat, estetis, dan sesuai dengan lingkungan.</p>
          </div>
        </div>
      </section>

      {/* Mengapa Harus Memilih Kami Section */}
      <section className="why-choose-us" id="mengapa-memilih-kami">
        <h2>Mengapa Harus Memilih Kami?</h2>
        <p>
          Kami adalah pilihan terbaik untuk mewujudkan hunian impian Anda dengan layanan lengkap, profesional, dan berpengalaman di berbagai aspek pembangunan rumah.
        </p>
        <div className="why-choose-us-buttons">
          <a href="#detail-pemilihan" className="more-info-button">
            Selengkapnya
          </a>
        </div>
      </section>

      {/* Jumlah Pengguna Section */}
      <section className="client-count">
        <h2>Jumlah Pengguna Layanan Kami</h2>
        <p>Kami dipercaya oleh lebih dari <span className="count">
          <CountUp end={100} duration={5} suffix="+" />
        </span> klien yang puas di Jember dan sekitarnya.</p>
      </section>

       {/* Portfolio Section */}
       <section className="portfolio" id="portfolio">
        <h2>Portfolio Kami</h2>
        <div className="portfolio-cards">
          {/* Contoh Card Portfolio */}
          <div className="portfolio-card">
            <img src="https://via.placeholder.com/300x200" alt="Proyek 1" className="portfolio-image" />
            <h3>Proyek Rumah Modern</h3>
            <p>Desain dan pembangunan rumah modern dengan konsep minimalis.</p>
            <div className="portfolio-buttons">
              <a href="#detail-portfolio" className="portfolio-button">Lihat Portfolio</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube-button">YouTube</a>
            </div>
          </div>
          {/* Card Portfolio Tambahan */}
          <div className="portfolio-card">
            <img src="https://via.placeholder.com/300x200" alt="Proyek 2" className="portfolio-image" />
            <h3>Proyek Rumah Klasik</h3>
            <p>Membangun rumah dengan gaya klasik yang elegan dan berkelas.</p>
            <div className="portfolio-buttons">
              <a href="#detail-portfolio" className="portfolio-button">Lihat Portfolio</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube-button">YouTube</a>
            </div>
          </div>
          {/* Tambahkan lebih banyak card sesuai kebutuhan */}
        </div>
      </section>

      {/* Konten utama */}
      <main>
        {/* Anda dapat menambahkan konten utama lainnya di sini */}
      </main>
    </div>
  );
}

export default App;
