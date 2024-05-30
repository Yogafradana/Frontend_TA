import React from "react";

const OrderInformationCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-orange-600 text-white text-lg font-semibold p-4">
        Informasi Pesanan
      </div>
      <div className="p-6">
        <div className="text-center text-zinc-800 text-xl font-bold mb-4">
          ID Pesanan
        </div>
        <div className="text-center text-2xl text-zinc-800 font-semibold mb-4">
          123456789
        </div>
        <hr className="border-t border-zinc-300 mb-4" />
        <div className="grid grid-cols-2 gap-4 text-zinc-800">
          <div className="flex flex-col">
            <span className="font-semibold">Nama</span>
            <span>Pelanggan A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Meja</span>
            <span>01</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Nomor Pesanan</span>
            <span>123456789</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Tanggal Pesanan</span>
            <span>2024-05-06 20:20:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformationCard;
