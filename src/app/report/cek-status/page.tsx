"use client";
import { useState, useRef, useEffect } from 'react';
import Header from '../../components/header';
import axios, { AxiosError } from 'axios';
import { request } from 'http';

interface Response {
  disclosure_status: number;
  id: number;
  nama_pelapor: string;
  departemen: string;
  alamat_email: string;
  nomor_kontak: string;
  status: number;
}

const StatusCheckPage = () => {
  const [idLaporan, setIdLaporan] = useState('');
  const [password, setPassword] = useState(''); // initial statenya string kosong
  const [showDetail, setShowDetail] = useState(false);
  const [response, setResponse] = useState<Response | null>(null);
  const [status, setStatus] = useState(2)
  const [anonim, setAnonim] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    const fetchData = async () => {
      const result = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/laporan-header/" + idLaporan, {
        "password": password
      }).then((res) => {
        const data = res.data.data[0]

        setResponse(data);
          setShowDetail(true);
     
      }).catch(
        (e: AxiosError) => {
          alert(e.response?.data.message);
          console.log(e); 
        }
      );
    }

    fetchData();
    
  }

  useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response]);

  return (
    <main>
      <Header />
      {showDetail === false ? (<>
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
                      type="number"
                      placeholder="ID Laporan"
                      value={idLaporan}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => setIdLaporan(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="password" className=
                      "block text-gray-700 text-sm font-semibold mb-2">
                      Kata Sandi
                    </label>
                    <input
                      id="password"
                      type="text"
                      placeholder="Kata Sandi"
                      value={password}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={handleSubmit}
                    >
                      Cek Status
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section></>) : (<>
          <section id="whistleblowing">
            <div className="bg-white">
              <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="w-full max-w-md p-8">
                  <h1 className="text-xl font-bold text-center mt-[-6] mb-6">Status Laporan</h1>

                  <table className="w-full mb-10">
                    <tbody>
                      <tr>
                        <td>ID Laporan</td>
                        <td>{response?.id}</td>
                      </tr>
                      {response?.disclosure_status == 1 ? (
                        <>
                          <tr>
                            <td>Nama Pelapor</td>
                            <td>{response?.nama_pelapor}</td>
                          </tr>
                          <tr>
                            <td>Departemen</td>
                            <td>{response?.departemen}</td>
                          </tr>
                          <tr>
                            <td>Alamat Email</td>
                            <td>{response?.alamat_email}</td>
                          </tr>
                          <tr>
                            <td>Nomor Kontak</td>
                            <td>{response?.nomor_kontak}</td>
                          </tr>
                        </>
                      ) : (
                        <>
                        </>
                      )}
                      <tr>
                        <td>Status</td>
                        <td>
                          {response?.status == 1 ? (
                            <span
                              className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              Open
                            </span>
                          ) : (
                            <></>
                            
                          )}
                          {response?.status == 3 || response?.status == 4 ? (
                            <span
                            className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-green-600/20">
                            Close
                          </span>
                          ) : (
                            <></>

                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className='flex justify-center items-center'>
                    <a href="/"
                      className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Selesai</a>
                  </div>
                </div>
              </div>
            </div>
          </section></>)}
    </main>
  );
};

export default StatusCheckPage;