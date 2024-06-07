import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Banner from '../../components/Navbar/Banner';


const CheckHistory = () => {
    const { pemesanan_id } = useParams();
    const navigate = useNavigate();
    const [pemesanan, setPemesanan] = useState(null);
    const [detailpemesanan, setDetailPemesanan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPemesananDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/pemesanan/${pemesanan_id}`);
                setPemesanan(response.data);
                setDetailPemesanan(response.data.detailpemesanan); // Menetapkan detail pemesanan
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchPemesananDetails();
    }, [pemesanan_id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching pemesanan details: {error.message}</div>;
    }

    if (!pemesanan) {
        return <div>No pemesanan found with ID {pemesanan_id}</div>;
    }

    return (
        <>
            <Banner />
            <div className="informasi4">
                <header>
                    <h1>Cafe Microdata</h1>
                </header>
                <div className="completion-message">
                    {pemesanan.status === 'selesai' && (
                        <>
                            <div className="informasiaja-content">
                                <div className="informasiaja-text">
                                    <h1>Sudah Selesai</h1><br />
                                    Terimakasih Sudah Order Di Cafe Microdata
                                </div>
                                <div className="informasiaja-button">
                                    <button>Ulasan</button>
                                </div>
                            </div>

                        </>
                    )}
                    {pemesanan.status === 'pending' && (
                        <>
                            <div className="informasiaja-container">
                                <div className="informasiaja-content">
                                    <div className="informasiaja-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" />
                                            <path d="M8 12.5L11 15.5L16 10.5" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="informasiaja-message">
                                        Pesanan Anda Telah Berhasil Dikirim Ke Dapur
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {pemesanan.status === 'proses' && (
                        <>
                            <div className="informasiaja-content">
                                <div className="informasiaja-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2V6" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 18V22" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.93 4.93L7.76 7.76" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.24 16.24L19.07 19.07" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12H6" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18 12H22" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.93 19.07L7.76 16.24" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.24 7.76L19.07 4.93" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="informasiaja-text">
                                    <h1>Pesanan Sedang Diproses</h1>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <section className="order-summary">
                    <h3>Informasi Pemesanan</h3>
                    <div className="order-details">
                        <div className="order-id">
                            <h4>ID Pemesanan</h4>
                            <p>{pemesanan.id}</p>
                        </div>
                        <div className="order-info-grid">
                            <div>
                                <p>Nama</p>
                                <p>{pemesanan.nama_pengunjung}</p>
                            </div>
                            <div>
                                <p>Nomor Meja</p>
                                <p>{pemesanan.meja_id}</p>
                            </div>
                            <div>
                                <p>Keterangan</p>
                                <p>{pemesanan.keterangan}</p>
                            </div>
                            <div>
                                <p>Tanggal Pemesanan</p>
                                <p>{pemesanan.tanggal_pemesanan}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="order-items">
                    <h3>Rincian Pemesanan</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Nama Menu</th>
                                <th>Jumlah</th>
                                <th>subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailpemesanan && detailpemesanan.map(item => (
                                <tr key={item.menu_id}>
                                    <td>{item.menu_id}</td>
                                    <td>{item.jumlah}</td>
                                    <td>{item.subtotal ? `Rp ${item.subtotal.toLocaleString()}` : 'Unavailable'}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="2">Total</td>
                                <td>Rp {pemesanan.total ? pemesanan.total.toLocaleString() : 'Unavailable'}</td>

                            </tr>
                        </tbody>
                    </table>
                </section>
                <footer>
                    <button className="back-button" onClick={() => navigate('/')}>Kembali Ke Halaman Utama</button>
                    <p>Copyright © 2024 PKL-POUNELA-2024</p>
                </footer>
            </div>
        </>
    );
};

export default CheckHistory;
