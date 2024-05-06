"use client";
import { useState } from 'react';
import Header from '../../components/header';

const StatistikPage = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

    const [year, setYear] = useState(currentYear);

    const handleYearChange = (event) => {
        setYear(event.target.value);
        console.log(`Year selected: ${event.target.value}`);
    };

    return (
        <main>
            <Header />
            <section id="whistleblowing">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center min-h-screen bg-white">
                        <div className="cek-status w-full p-8">
                            <h1 className="title-cek-status text-xl font-semibold text-center mb- mt-20">Laporan 2024</h1>
                            <form className="bg-white rounded pt-6 pb-8 mb-4"
                                method="POST" action="/report/laporan-statistik/">
                                <p className="text-gray-700 font-semibold text-center mb-4">Januari-Desember</p>
                                <div className="grid grid-cols-3 gap-10 mb-8 w-full px-4">
                                    {/* Total Laporan */}
                                    <div className="kotak-1 text-white p-4 rounded-lg shadow-md w-full max-w-md">
                                        <h2 className="text-lg font-regular text-right">Total Laporan</h2>
                                        <p className="text-kotak-1 text-2xl font-semibold text-right">40</p>
                                    </div>

                                    {/* Close */}
                                    <div className="kotak-2 text-white p-4 rounded-lg shadow-md w-full max-w-md">
                                        <h2 className="text-lg font-regular text-right">Close</h2>
                                        <p className="text-kotak-2 text-2xl font-semibold text-right">20</p>
                                    </div>

                                    {/* Open */}
                                    <div className="kotak-3 text-white p-4 rounded-lg shadow-md w-full max-w-md">
                                        <h2 className="text-lg font-regular text-right">Open</h2>
                                        <p className="text-kotak-3 text-2xl font-semibold text-right">30</p>
                                    </div>

                                </div>
                                <div className="flex columns-2 w-full">
                                    <div className='w-full p-10'>
                                        <p className="text-gray-950 font-semibold text-center mb-6">Kategori Kejadian</p>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Benturan Kepentingan</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Gratifikasi</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Penggelapan Aset</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Penipuan</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Korupsi</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Penyalahgunaan dan Pemalsuan Data</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Penyalahgunaan Jabatan</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Pemerasan</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Pencurian</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Kecurangan</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Pembocoran Rahasia</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Pelanggaran Etika dan Perbuatan Asusila</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Penyelewengan Uang Perseroan</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>

                                    </div>
                                    <div className='w-full p-10'>
                                        <p className="text-gray-950 font-semibold text-center mb-6">Saluran Pengaduan</p>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Situs Website</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Email</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Fax</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Whatsapp</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
                                        <div className='container clear-both mb-4'>
                                            <div className='columns-2'>
                                                <div className=''>Telpon</div>
                                                <div className='text-right'>10</div>
                                            </div>
                                        </div>
                                        <div className="progress-bar-color1 w-full rounded-full dark:bg-gray-700 mb-4">
                                            <div className="progress-bar-color2 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '50%', height: '20px' }}></div>
                                        </div>
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
