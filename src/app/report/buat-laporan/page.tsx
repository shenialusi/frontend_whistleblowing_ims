"use client"
import { useState, useRef, useEffect,FormEvent } from 'react';
import Header from "../../components/header";
import axios, { AxiosError } from 'axios';


interface RuangLingkup {
    namaruanglingkup: string;
    deskripsi: string;
    id: number;
}

interface MappingPertanyaan {
    pertanyaanid: number;
    namapertanyaan: string;
    jawaban: string;
}

const BuatLaporan = () => {
    const [ruanglingkup, setRuangLingkup] = useState<RuangLingkup[]>([]);
    const [mappingpertanyaan, setMappingPertanyaan] = useState<MappingPertanyaan[]>([]);
    const [nama_pelapor, setNama_Pelapor] = useState('');
    const [departemen, setDepartemen] = useState('');
    const [alamat_email, setAlamat_Email] = useState('');
    const [nomor_kontak, setNomor_Kontak] = useState('');
    const [informasi_lain, setInformasi_Lain] = useState('');
    const [koneksi, setKoneksi] = useState('Karyawan');
    const [idlaporan, setIdLaporan] = useState(0);
    const [password, setPassword] = useState('');
    const [file, setFile] = useState<File | null>(null);
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
                            "pertanyaanid": e.m_pertanyaan_id,
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

    useEffect(() => {
        console.log(mappingpertanyaan)
    }, [mappingpertanyaan])

    const handleSubmit = async () => {
       

        var formData = new FormData();
        formData.append('nama_pelapor',nama_pelapor)
        formData.append('departemen',departemen)
        formData.append('alamat_email',alamat_email)
        formData.append('nomor_kontak',nomor_kontak)
        formData.append('informasi_lain',informasi_lain)
        formData.append('koneksi',koneksi)
        if(isAnonymous){
            formData.append('disclosure_status', '0');
        }
        else{
            formData.append('disclosure_status', '1');
        }
        if(file){
            formData.append('lampiran_file', file);
        }
        if(selectedButton){
            formData.append('m_ruang_lingkup_id', selectedButton);
        }
        if(file){
            formData.append('file', file);
        }

        let jawaban: {[key: string]: any} = {};

        mappingpertanyaan.forEach((item) => {
            jawaban[item.pertanyaanid] = item.jawaban;
        });


        formData.append('pertanyaan', JSON.stringify(jawaban));
        Array.from(formData.entries()).forEach(([key, value]) => {
            console.log(`${key}, ${value}`);
        });
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/laporan-header/store/', formData, {
                
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                
            }).then((res) => {
                console.log(res)
                setIdLaporan(res.data.data.id)
                setPassword(res.data.data.password)
             
              }).catch(
                (e: AxiosError) => {
                  console.log(e); 
                }
              );
            console.log("upload sukses")
            openModal()
        } catch (error) {
            console.log("data error"+ error)
        }
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
                                        <input
                                            type="text" className="border w-full p-2"
                                            value={nama_pelapor}
                                            onChange={(e) => setNama_Pelapor(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex colums-2 w-full mt-6">
                                    <div className="w-1/4">
                                        <p className="buat-laporan-text2 text-black font-semibold">Departemen</p>
                                    </div>
                                    <div className="flex-auto">
                                        <input
                                            type="text" className="border w-full p-2"
                                            value={departemen}
                                            onChange={(e) => setDepartemen(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex colums-2 w-full mt-6">
                                    <div className="w-1/4">
                                        <p className="buat-laporan-text2 text-black font-semibold">Alamat Email</p>
                                    </div>
                                    <div className="flex-auto">
                                        <input
                                            type="text" className="border w-full p-2"
                                            value={alamat_email}
                                            onChange={(e) => setAlamat_Email(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex colums-2 w-full mt-6">
                                    <div className="w-1/4">
                                        <p className="buat-laporan-text2 text-black font-semibold">Nomor Kontak</p>
                                    </div>
                                    <div className="flex-auto">
                                        <input
                                            type="text" className="border w-full p-2"
                                            value={nomor_kontak}
                                            onChange={(e) => setNomor_Kontak(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex colums-2 w-full mt-6">
                                    <div className="w-1/4">
                                        <p className="buat-laporan-text2 text-black font-semibold">Informasi Lain</p>
                                    </div>
                                    <div className="flex-auto">
                                        <input
                                            type="text" className="border w-full p-2"
                                            value={informasi_lain}
                                            onChange={(e) => setInformasi_Lain(e.target.value)}
                                        />
                                    </div>
                                </div></>) : (<></>)}
                            <div className="mt-8">
                                <h2 className="buat-laporan-text1 text-xl font-bold mb-2">Koneksi Anda</h2>
                                <p className="buat-laporan-text2 mb-2">Silahkan pilih tingkat pengungkapan yang berkaitan dengan rincian identitas pribadi Anda</p>
                                <select
                                    className="buat-laporan-text2 w-full border p-2"
                                    value={koneksi}
                                    onChange={(e) => setKoneksi(e.target.value)}
                                >
                                    <option value="" disabled>Harap Pilih</option>
                                    <option value="Karyawan">Karyawan</option>
                                    <option value="Public">Public</option>
                                    <option value="Vendor">Vendor</option>
                                    <option value="N/A">N/A</option>
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
                                <div key={index} className="w-full mt-6">
                                    <div className="w-full mb-6">
                                        <p className="buat-laporan-text2 text-black font-semibold">{item.namapertanyaan}</p>
                                    </div>
                                    <div className="w-full">
                                        <input
                                            value={item.jawaban}
                                            onChange={(e) => setMappingPertanyaan(mappingpertanyaan.map(i => (i.pertanyaanid === item.pertanyaanid ? { ...i, jawaban: e.target.value } : i)))}
                                            type="text" className="border w-full p-2"
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="w-full mt-6">
                                <h2 className="buat-laporan-text1 text-xl font-bold mb-2">Lampiran</h2>
                                <p className="buat-laporan-text2 mb-2 text-justify">Silahkan tambahkan lampiran yang menurut Anda dapat memberikan penjelasan lebih lanjut atas pengungkapan ini, harap berhati-hati untuk tidak memasukkan informasi yang dapat mengungkapkan identitas Anda jika Anda ingin mengaku sebagai anonim. Anda dapat melampirkan data apa saja hingga 25MB.</p>
                                <input
                                    type="file"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files.length > 0) {
                                            setFile(e.target.files[0]);
                                        }
                                    }}
                                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif"
                                />
                            </div>

                            <button
                                className="mt-6 px-4 py-2 text-white font-bold bg-blue-700 rounded"
                                type='submit'
                                onClick={handleSubmit}
                            >
                                Kirim
                            </button>

                            {isOpen && (
                                <div className="fixed inset-0 flex items-center justify-center z-50">
                                    <div className="bg-white rounded shadow-lg p-8 m-4 max-w-xs max-h-full text-center">
                                        <h2 className="buat-laporan-text2 font-semibold mb-6 text-xl">Terima Kasih telah melaporkan peristiwa tersebut</h2>
                                        <p className="buat-laporan-text2 mb-8">Berikut ID Laporan dan Kata Sandi untuk melihat status laporan</p>
                                        <p className="buat-laporan-text2 mb-8">ID Laporan {idlaporan}</p>
                                        <p className="buat-laporan-text2 mb-8">Kata Sandi {password}</p>
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