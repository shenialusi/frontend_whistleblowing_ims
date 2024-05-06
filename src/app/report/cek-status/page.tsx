"use client";
import { useState } from 'react';
import Header from '../../components/header';

const StatusCheckPage = () => {
  const [idLaporan, setIdLaporan] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main>
      <Header/>
      <section id="whistleblowing">
        <div className="bg-white">
          <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="cek-status w-full max-w-md p-8">
              <h1 className="title-cek-status text-xl font-bold text-center mb-2">CEK STATUS</h1>
              <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" method="POST" action="/report/cek-status/1">
                <p className="text-gray-700 text-center mb-4">Silahkan login dengan menggunakan ID Laporan dan Kata Sandi</p>
                <div className="mb-4">
                  <label htmlFor="id-laporan" className="block text-gray-700 text-sm font-semibold mb-2">
                    ID Laporan
                  </label>
                  <input
                    id="id-laporan"
                    type="text"
                    placeholder="ID Laporan"
                    value={idLaporan}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                    Kata Sandi
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Kata Sandi"
                    value={password}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cek Status
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StatusCheckPage;