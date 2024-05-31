import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CheckHistory.css';

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
        <div className="informasi4">
            <header>
                <h1>Cafe Microdata</h1>
            </header>
            <div className="completion-message">
                {pemesanan.status === 'selesai' && (
                    <>
                        <h2>Sudah Selesai</h2>
                        <p>Terimakasih Sudah Order Di Cafe Microdata</p>
                        <button className="review-button" onClick={() => navigate('/reviewform')}>Ulasan</button>
                    </>
                )}
                {pemesanan.status === 'pending' && (
                    <>
                        <h2>Pesanan Diterima di Dapur</h2>
                        <p>Pesanan dalam antrian dapur</p>
                    </>
                )}
                {pemesanan.status === 'proses' && (
                    <>
                        <h2>Pesanan Sedang Diproses</h2>
                        <p>Silakan tunggu pesanan Anda sedang diproses.</p>
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
    );
};

export default CheckHistory;
