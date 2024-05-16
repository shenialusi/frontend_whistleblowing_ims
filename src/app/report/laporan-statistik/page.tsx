"use client";
import { useState, useRef, useEffect } from 'react';
import Header from '../../components/header';
import axios, { AxiosError } from 'axios';

export interface KeyValue {
    key: string;
    value: number;
}

export interface LaporanStatistik {
    total_laporan: number;
    close: number;
    open: number;
    saluran_pelaporan: KeyValue[];
    kategori_laporan: KeyValue[];
    total_saluran_pelaporan: number;
}


const StatistikPage = () => {
    const [responseData, setResponseData] = useState<LaporanStatistik>({
        total_laporan: 0,
        close: 0,
        open: 0,
        saluran_pelaporan: [],
        kategori_laporan: [],
        total_saluran_pelaporan: 0,
    });
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

    const [year, setYear] = useState(currentYear);

    const handleYearChange = (event) => {
        setYear(event.target.value);
        console.log(`Year selected: ${event.target.value}`);
    };

    const fetchData = async () => {
        const result = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/saluran-pelaporan/" + year).then((res) => {
            const resp = res.data.data;
            const total_saluran_pelaporan = Array.isArray(resp.saluran_pelaporan)
            ? resp.saluran_pelaporan.reduce((total, item) => total + (item.value || 0), 0)
            : Object.entries(resp.saluran_pelaporan || {}).reduce((total, [key, value]) => total + (value || 0), 0);
    

            let resData: LaporanStatistik = {
                total_laporan: resp.total_laporan,
                close: resp.close,
                open: resp.open,
                saluran_pelaporan: Array.isArray(resp.saluran_pelaporan) ? resp.saluran_pelaporan : Object.entries(resp.saluran_pelaporan || {}).map(([key, value]) => ({ key, value })),
                kategori_laporan: Array.isArray(resp.kategori_laporan) ? resp.kategori_laporan : Object.entries(resp.kategori_laporan || {}).map(([key, value]) => ({ key, value })),
                total_saluran_pelaporan: total_saluran_pelaporan,
            };
            setResponseData(resData);
        }).catch(
            (e: Error | AxiosError) => console.log(e)
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchData(year);
    }, [year]);

    return (
        <main>
            <Header />
            <section id="whistleblowing">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center min-h-screen bg-white">
                        <div className="cek-status w-full p-8">
                            <h1 className="title-cek-status text-xl font-semibold text-center mb- mt-20">Laporan {year}</h1>
                            <form className="bg-white rounded pt-6 pb-8 mb-4"
                                method="POST" action="/report/laporan-statistik/">
                                <p className="text-gray-700 font-semibold text-center mb-4">Januari-Desember</p>
                                <div className="grid grid-cols-3 gap-10 mb-8 w-full px-4">
                                    {/* Total Laporan */}
                                    <div className="kotak-1 text-white p-4 rounded-lg shadow-md w-full max-w-md">
                                        <h2 className="text-lg font-regular text-right">Total Laporan</h2>
                                        <p className="text-kotak-1 text-2xl font-semibold text-right">{responseData.total_laporan}</p>
                                    </div>

                                    {/* Close */}
                                    <div className="kotak-2 text-white p-4 rounded-lg shadow-md w-full max-w-md">
                                        <h2 className="text-lg font-regular text-right">Close</h2>
                                        <p className="text-kotak-2 text-2xl font-semibold text-right">{responseData.close}</p>
                                    </div>

                                    {/* Open */}
                                    <div className="kotak-3 text-white p-4 rounded-lg shadow-md w-full max-w-md">
                                        <h2 className="text-lg font-regular text-right">Open</h2>
                                        <p className="text-kotak-3 text-2xl font-semibold text-right">{responseData.open}</p>
                                    </div>

                                </div>
                                <div className="flex columns-2 w-full">
                                    <div className='w-full p-10'>
                                        <p className="text-gray-950 font-semibold text-center mb-6">Kategori Kejadian</p>
                                        {responseData.kategori_laporan.map((item, index) => (
                                            <div key={index} className='mb-6'>
                                                <div className='container clear-both mb-4'>
                                                    <div className='columns-2'>
                                                        <div>{item.key}</div>
                                                        <div className='text-right'>{item.value}</div>
                                                    </div>
                                                </div>
                                                <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                                    <div
                                                        className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                                                        style={{ width: `${item.value / responseData.total_laporan * 100}%`, height: '20px' }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='w-full p-10'>
                                        <p className="text-gray-950 font-semibold text-center mb-6">Saluran Pengaduan</p>
                                        {responseData.saluran_pelaporan.map((item, index) => (
                                            <div key={index} className='mb-6'>
                                                <div className='container clear-both mb-4'>
                                                    <div className='columns-2'>
                                                        <div>{item.key}</div>
                                                        <div className='text-right'>{item.value}</div>
                                                    </div>
                                                </div>
                                                <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                                    <div
                                                        className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                                                        style={{ width: `${item.value / responseData.total_saluran_pelaporan * 100}%`, height: '20px' }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='w-full p-10'>
                                    <p className="text-gray-950 font-semibold mb-6">Ubah tahun:</p>
                                    <select value={year} onChange={handleYearChange}>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StatistikPage;
