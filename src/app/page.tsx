"use client";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { url } from 'inspector';
import Modal from "./Modal";
import Header from './components/header';
import { useState, useRef, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface RuangLingkup {
  namaruanglingkup: string;
  deskripsi: string;
}

export default function Home() {

  // Modal Ruang Lingkup
  const [ruanglingkup, setRuangLingkup] = useState<RuangLingkup[]>([]);
  const [modals, setModals] = useState(ruanglingkup.map(() => false));
  const openModal = (index: number) => {
    setModals(modals.map((modal, i) => (i === index ? true : false)));
  };
  const closeModal = (index: number) => {
    setModals(modals.map((modal, i) => (i === index ? false : modal)));
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/ruang-lingkup").then((res) => {
        var arr_page: RuangLingkup[] = []
        res.data.data.forEach((e: any) => {
          arr_page.push({
            "namaruanglingkup": e.nama_ruang_lingkup,
            "deskripsi": e.deskripsi,
          })
        });

        setRuangLingkup(arr_page);
        setModals(arr_page.map(() => false));
      }).catch(
        (e: Error | AxiosError) => console.log(e)
      );
    }

    fetchData();
  }, []);

  const tabs = [
    {
      name: 'Telp',
      content: '+62 3512812105 / +62 351 2812256',
    },
    {
      name: 'Fax',
      content: 'Konten untuk Tab 2',
    },
    {
      name: 'Email',
      content: 'Konten untuk Tab 3',
    },
    {
      name: 'Kirim Surat',
      content: 'Konten untuk Tab 4',
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main>
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8 grid grid-cols-2">
        <div className="py-14 col-span-full sm:col-span-1">

          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-gray-900/10 hover:ring-gray-900/20">
              {' '}
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="whistle1-text">Whistle</span><span className="blowing1-text">blowing</span><br></br>
              <span className="blowing2-text">System</span>
            </h1>
            <p className="laporkan-text mt-6 text-lg leading-8">
              <span className="whistle2-text font-bold">Laporkan</span> <span className='blowing3-text'>Apabila Anda Melihat, Mengalami atau<br></br>Mengetahui Tindakan Pelanggaran oleh Karyawan<br></br>PT INKA MULTI SOLUSI</span>
            </p>
            <div className="mt-10 flex items-center justify-left gap-x-6">
              <a
                href="/report/buat-laporan"
                className="btn-laporan rounded-full px-6 py-5 text-sm font-bold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Laporkan Pelanggaran
              </a>
              <a href="#" className="panah-text text-3xl font-semibold leading-6 text-gray-900">
                <span aria-hidden="true">&gt;</span>
              </a>
            </div>
          </div>
        </div>
        <div className='hidden sm:block relative'>
          <img className="img-logo6 absolute" src="/logo6.png" alt="Logo 6" />
          <img className='logo-5' src='/logo5.png' />
        </div>
      </div>
      <section id='ruanglingkup' style={{ backgroundColor: 'rgba(1, 55, 132, 1)' }}>
        {/* Container to heading and testm blocks */}
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center pt-8'>
          {/* Heading */}
          <h2 className='text-4xl font-bold text-center'>
            <span className="blowing6-text">Ruang Lingkup</span>
          </h2>
          <p className='mt-6 text-lg leading-8 text-center'>
            <span className="blowing6-text">Mencurigai suatu kecurangan atau pelanggaran peraturan Perusahaan yang terjadi</span>
          </p>

          <div className='jenis-ruanglingkup2 grid grid-cols-3 gap-4 mt-10'>
            {/* Testimonial 1 */}
            {ruanglingkup.map((item, index) => (
              <div key={index}>
                <button
                  className="jenis-ruanglingkup hover:text-black font-semibold items-center p-6 space-y-6 rounded-lg bg-yellow-400 w-full"
                  onClick={() => openModal(index)}
                >
                  {item.namaruanglingkup}
                </button>

                <Modal
                  open={modals[index]}
                  onClose={() => closeModal(index)}
                >
                  <p className="text-black text-justify">{item.deskripsi}</p>
                </Modal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='hubungi-kami' style={{ backgroundImage: "url('gambar1.png')" }}>
        {/* Container to heading and testm blocks */}
        <div className='max-w-6xl px-5 mx-auto text-center pt-10 pb-10'>
          {/* Heading */}
          <h2 className='text-4xl mb-5 font-bold text-center'>
            <span className="blowing4-text">Hubungi Kami</span>
          </h2>
          <p className='mt-6 mb-20 text-lg leading-8 text-center'>
            <span className="blowing5-text">Laporkan kepada kami untuk dapat kami tindaklanjuti. Kami sangat berterima kasih atas peran serta anda membantu kami mewujudkan IMS bersih.</span>
          </p>

          <div className="w-full">
            <div className="flex justify-start">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  className={
                    `text-kontak px-4 py-2 ${activeTab.name === tab.name ? 'bg-black text-white' : 'bg-white'}`
                  }
                  style={{
                    borderTopLeftRadius: i === 0 ? '10px' : 0,
                    borderTopRightRadius: i === tabs.length - 1 ? '10px' : 0
                  }}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <div className="text-kontak w-full border p-4 bg-white text-left">
              {activeTab.content}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='menu-bawah-color py-5'>
          <div className='flex justify-between text-white'>
            <div><img className='h-14 w-auto logo-menu-bawah bg-white' src="./logo.png" alt="" /></div>
            <div>
              <a href='/page' className='text2-menu-bawah mr-5 font-bold'>Beranda</a>
              <a href='/report/buat-laporan' className='text2-menu-bawah mr-5 font-bold'>Report</a>
              <a href='/faq' className='text2-menu-bawah mr-5 font-bold'>FAQ</a>
            </div>
          </div>
          <div className='text-menu-bawah font-reguler text-center text-white'>Copyright @ 2024 All Right Reserved.</div>
        </div>
      </section>
    </main>
  );
}
