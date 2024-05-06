"use client"
import { useState } from "react";
import Header from "../../components/header";

const BuatLaporan = () => {
    const [isAnonymous, setIsAnonymous] = useState(true);
    const [selectedButton, setSelectedButton] = useState(null);
    const tipekejadian = ['Benturan Kepentingan', 'Korupsi', 'Kecurangan', 'Gratifikasi', 'Penyalahgunaan Jabatan', 'Pembocoran Rahasia', 'Penggelapan Aset', 'Pemerasan', 'Pelanggaran Etika dan Perbuatan Asusila', 'Penipuan', 'Pencurian', 'Penyelewengan Uang Perseroan', 'Penyalahgunaan dan Pemalsuan Data'];

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

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
                            {tipekejadian.map((name, index) => (
                                <button
                                    key={index}
                                    className={`w-2/6 ${selectedButton === index ? 'bg-sky-600 text-white' : ''}`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    <p className="buat-laporan-text2 btn text-center border p-5 flex-grow">{name}</p>
                                </button>
                            ))}
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Kejadian yang ingin dilaporkan?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Siapa nama dan jabatan terlapor?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Dimana kejadian ini terjadi?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Kapan kejadian ini terjadi?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Apakah ada orang lain yang terlibat?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Apakah ada saksi mata?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Apakah tindakan lanjut akan mengidentifikasikan Anda sebagai pelapor?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Apakah kejadian ini mengakibatkan kerugian finansial? Jika ya, berapa besar jumlahnya?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Apakah kejadian ini pernah terjadi sebelumnya?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Apakah sudah dilaporkan melalui sarana lain? Jika iya, apa tanggapannya?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Apakah sudah berbicara dengan terlapor?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Apakah sudah dilaporkan ke polisi/pihak berwajib?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Menurut perkiraan Anda, seberapa besar jumlah uang yang terlibat?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Bagaimana Anda mengetahui kejadian ini?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Apakah kejadian ini akan terulang lagi?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Menurut perkiraan Anda, seberapa besar nilai gratifikasi yang terlibat?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="w-full mb-6">
                                <p className="buat-laporan-text2 text-black font-semibold">Menurut perkiraan Anda, seberapa besar kerugian finansial yang terjadi?</p>
                            </div>
                            <div className="w-full">
                                <input type="text" className="border w-full p-2" />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <h2 className="buat-laporan-text1 text-xl font-bold mb-2">Lampiran</h2>
                            <p className="buat-laporan-text2 mb-2 text-justify">Silahkan tambahkan lampiran yang menurut Anda dapat memberikan penjelasan lebih lanjut atas pengungkapan ini, harap berhati-hati untuk tidak memasukkan informasi yang dapat mengungkapkan identitas Anda jika Anda ingin mengaku sebagai anonim. Anda dapat melampirkan data apa saja hingga 25MB.</p>
                            <input type="file" />
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