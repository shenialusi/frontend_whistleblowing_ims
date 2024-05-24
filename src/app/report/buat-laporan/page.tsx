"use client"
import { useState, useRef, useEffect } from 'react';
import Header from "../../components/header";
import axios, { AxiosError } from 'axios';

interface RuangLingkup {
    namaruanglingkup: string;
    deskripsi: string;
    id: number;
}

interface MappingPertanyaan {
    ruanglingkupid: number;
    namapertanyaan: string;
    jawaban: string;
}

const BuatLaporan = () => {
    const [ruanglingkup, setRuangLingkup] = useState<RuangLingkup[]>([]);
    const [mappingpertanyaan, setMappingPertanyaan] = useState<MappingPertanyaan[]>([]);
    const [isAnonymous, setIsAnonymous] = useState(true);
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = (index: any) => {
        setSelectedButton(index);
    };

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/ruang-lingkup").then((res) => {
                var arr_page: RuangLingkup[] = []
                res.data.data.forEach((e: any) => {
                    arr_page.push({
                        "namaruanglingkup": e.nama_ruang_lingkup,
                        "deskripsi": e.deskripsi,
                        "id": e.id,
                    })
                });

                setRuangLingkup(arr_page);
            }).catch(
                (e: Error | AxiosError) => console.log(e)
            );
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedButton != null) {
            const fetchData = async () => {
                const result = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/mapping-pertanyaan/" + selectedButton).then((res) => {
                    var arr_page: MappingPertanyaan[] = []
                    res.data.data.forEach((e: any) => {
                        arr_page.push({
                            "ruanglingkupid": e.m_ruang_lingkup_id,
                            "namapertanyaan": e.nama_pertanyaan,
                            "jawaban": "",
                        })
                    });

                    setMappingPertanyaan(arr_page);
                }).catch(
                    (e: Error | AxiosError) => console.log(e)
                );
            }

            fetchData();
        }
    }, [selectedButton]);


    return (
        <main>
            <Header />
            <section id="whistleblowing" className="bg-grey-600 pt-20">
                <div className="container mx-auto bg-white">
                    <div className="p-10 mt-2">
                        <h2 className="buat-laporan-text1 text-xl font-bold mb-2">Keamanan Pengungkapan Informasi</h2>
                        <p className="buat-laporan-text2 font-reguler">Silahkan pilih tingkat pengungkapan yang berkaitan dengan rincian identitas pribadi Anda</p>
                        <div className="flex mt-3">
                            <button className={`btn text-center border p-5 mr-3 flex-grow ${isAnonymous ? '' : 'bg-blue-700 text-white'}`} onClick={() => setIsAnonymous(false)}>
                                <p className="buat-laporan-text2 font-semibold mt-2">Pengungkapan Penuh</p> <br /><br />
                                <p className="buat-laporan-text2 font-reguler">Pelapor akan memberikan identitas / rincian kontak kepada PT INKA Multi Solusi maupun Tim WBS</p>
                            </button>

                            <button className={`btn text-center border p-5 flex-grow ${isAnonymous ? 'bg-blue-700 text-white' : ''}`} onClick={() => setIsAnonymous(true)}>
                                <p className="buat-laporan-text2 font-semibold mt-2">Anonim</p> <br /><br />
                                <p className="buat-laporan-text2 font-reguler">Pelapor tidak akan memberikan identitas/rincian kontak baik kepada PT INKA Multi Solusi maupun Tim WBS</p>
                            </button>
                        </div>
                        {isAnonymous === false ? (<>
                            <div className="flex colums-2 w-full mt-6">
                                <div className="w-1/4">
                                    <p className="buat-laporan-text2 text-black font-semibold">Nama Pelapor</p>
                                </div>
                                <div className="flex-auto">
                                    <input type="text" className="border w-full p-2" />
                                </div>
                            </div>
                            <div className="flex colums-2 w-full mt-6">
                                <div className="w-1/4">
                                    <p className="buat-laporan-text2 text-black font-semibold">Departemen</p>
                                </div>
                                <div className="flex-auto">
                                    <input type="text" className="border w-full p-2" />
                                </div>
                            </div>
                            <div className="flex colums-2 w-full mt-6">
                                <div className="w-1/4">
                                    <p className="buat-laporan-text2 text-black font-semibold">Alamat Email</p>
                                </div>
                                <div className="flex-auto">
                                    <input type="text" className="border w-full p-2" />
                                </div>
                            </div>
                            <div className="flex colums-2 w-full mt-6">
                                <div className="w-1/4">
                                    <p className="buat-laporan-text2 text-black font-semibold">Nomor Kontak</p>
                                </div>
                                <div className="flex-auto">
                                    <input type="text" className="border w-full p-2" />
                                </div>
                            </div>
                            <div className="flex colums-2 w-full mt-6">
                                <div className="w-1/4">
                                    <p className="buat-laporan-text2 text-black font-semibold">Informasi Lain</p>
                                </div>
                                <div className="flex-auto">
                                    <input type="text" className="border w-full p-2" />
                                </div>
                            </div></>) : (<></>)}
                        <div className="mt-8">
                            <h2 className="buat-laporan-text1 text-xl font-bold mb-2">Koneksi Anda</h2>
                            <p className="buat-laporan-text2 mb-2">Silahkan pilih tingkat pengungkapan yang berkaitan dengan rincian identitas pribadi Anda</p>
                            <select className="buat-laporan-text2 w-full border p-2" defaultValue="1">
                                <option value="1" disabled>Harap Pilih</option>
                                <option value="2">Karyawan</option>
                                <option value="3">Public</option>
                                <option value="4">Vendor</option>
                                <option value="5">N/A</option>
                            </select>
                        </div>
                        <div className="w-full mt-6">
                            <h2 className="buat-laporan-text1 text-xl font-bold mb-2">Tipe Insiden</h2>
                            <p className="buat-laporan-text2 mb-2">Silahkan Pilih tipe insiden yang paling mendekati masalah yang Anda laporkan</p>
                            {ruanglingkup.map((item, index) => (
                                <button
                                    key={item.id}
                                    className={`w-2/6 ${selectedButton === item.id ? 'bg-sky-600 text-white' : ''}`}
                                    onClick={() => handleButtonClick(item.id)}
                                >
                                    <p className="buat-laporan-text2 btn text-center border p-5 flex-grow">{item.namaruanglingkup}</p>
                                </button>
                            ))}
                        </div>
                        {mappingpertanyaan.map((item, index) => (
                            <div className="w-full mt-6">
                                <div className="w-full mb-6">
                                    <p className="buat-laporan-text2 text-black font-semibold">{item.namapertanyaan}</p>
                                </div>
                                <div className="w-full">
                                    <input type="text" className="border w-full p-2" />
                                </div>
                            </div>
                        ))}
                        <div className="w-full mt-6">
                            <h2 className="buat-laporan-text1 text-xl font-bold mb-2">Lampiran</h2>
                            <p className="buat-laporan-text2 mb-2 text-justify">Silahkan tambahkan lampiran yang menurut Anda dapat memberikan penjelasan lebih lanjut atas pengungkapan ini, harap berhati-hati untuk tidak memasukkan informasi yang dapat mengungkapkan identitas Anda jika Anda ingin mengaku sebagai anonim. Anda dapat melampirkan data apa saja hingga 25MB.</p>
                        </div>

                        <button
                            className="mt-6 px-4 py-2 text-white font-bold bg-blue-700 rounded"
                            onClick={openModal}
                        >
                            Kirim
                        </button>

                        {isOpen && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="bg-white rounded shadow-lg p-8 m-4 max-w-xs max-h-full text-center">
                                    <h2 className="buat-laporan-text2 font-semibold mb-6 text-xl">Terima Kasih telah melaporkan peristiwa tersebut</h2>
                                    <p className="buat-laporan-text2 mb-8">Berikut ID Laporan dan Kata Sandi untuk melihat status laporan</p>
                                    <p className="buat-laporan-text2 mb-8">ID Laporan 990567812</p>
                                    <p className="buat-laporan-text2 mb-8">Kata Sandi Ab1452</p>
                                    <button
                                        className="px-4 py-2 text-white font-bold bg-blue-700 rounded"
                                        onClick={closeModal}
                                    >
                                        Selesai
                                    </button>
                                </div>
                            </div>
                        )}
                    </div >
                </div>
            </section >
        </main >
    );
};

export default BuatLaporan;