"use client";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { url } from 'inspector';
import Modal from "./Modal";
import Header from './components/header';
import { useState, useRef, useEffect } from 'react';

export default function Home() {

  // Modal Ruang Lingkup
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  
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

          <div className='jenis-ruanglingkup2 grid grid-cols-3 mt-10'>
            {/* Testimonial 1 */}
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen1(true)}
            >
              Benturan Kepentingan
            </button>

            <Modal open={isOpen1} onClose={() => {
              setIsOpen1(false)
            }}>
              <p className="text-black  text-justify">
                Situasi di mana terdapat konflik kepentingan seseorang yang memanfaatkan kedudukan dan wewenang untuk kepentingan pribadi, keluarga, atau golongannya.
                Hal ini dapat menyebabkan konflik antara kepentingan individu dan kepentingan organisasi, yang dapat merugikan perusahaan dalam jangka panjang.
                Benturan kepentingan ini dapat timbul dalam berbagai konteks, seperti pengambilan keputusan, alokasi sumber daya, dan interaksi dengan pihak eksternal,
                pemilihan Vendor atau Pemasok dan sebagainya.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen2(true)}
            >
              Korupsi
            </button>

            <Modal open={isOpen2} onClose={() => {
              setIsOpen2(false)
            }}>
              <p className="text-black text-justify">
                Penyelewengan atau penyalahgunaan uang perusahaan, organisasi, yayasan, dan sebagainya untuk keuntungan pribadi atau orang lain.
                Hal ini dapat mencakup penyuapan, pemerasan, pencucian uang, manipulasi laporan keuangan, atau tindakan korupsi lainnya yang merugikan
                integritas, keadilan, dan keberlanjutan perusahaan.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen3(true)}
            >
              Kecurangan
            </button>

            <Modal open={isOpen3} onClose={() => {
              setIsOpen3(false)
            }}>
              <p className="text-black text-justify">
                Tindakan yang tidak jujur atau tidak sah yang dilakukan seseorang atau sekelompok orang untuk memperoleh keuntungan atau hasil yang tidak pantas atau tidak adil.
                Ini bisa meliputi manipulasi keuangan, penyalahgunaan aset perusahaan, penggelapan dana, atau pelanggaran kebijakan perusahaan.
                Kecurangan dalam perusahaan dapat merugikan perusahaan itu sendiri, para pemegang saham, karyawan, dan pelanggan, serta dapat
                berdampak negatif pada reputasi perusahaan.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen4(true)}
            >
              Gratifikasi
            </button>

            <Modal open={isOpen4} onClose={() => {
              setIsOpen4(false)
            }}>
              <p className="text-black text-justify">
                Pemberian atau penerimaan hadiah, suap, atau fasilitas lainnya yang dapat mempengaruhi seseorang dalam menjalankan tugasnya.
                Gratifikasi dapat merusak integritas, transparansi, dan kepercayaan dalam lingkungan bisnis, serta dapat berdampak negatif pada reputasi perusahaan.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen5(true)}
            >
              Penyalahgunaan Jabatan
            </button>

            <Modal open={isOpen5} onClose={() => {
              setIsOpen5(false)
            }}>
              <p className="text-black text-justify">
                Tindakan seseorang yang memiliki kekuasaan atau otoritas dalam suatu jabatan memanfaatkan kekuasaan tersebut untuk kepentingan pribadi atau golongan tertentu, bukan untuk kepentingan yang seharusnya.
                Hal ini dapat mencakup tindakan seperti korupsi, pencurian, manipulasi keuangan, penyalahgunaan informasi, atau pelanggaran etika lainnya.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen6(true)}
            >
              Pembocoran Rahasia
            </button>

            <Modal open={isOpen6} onClose={() => {
              setIsOpen6(false)
            }}>
              <p className="text-black text-justify">
                Tindakan mengungkapkan informasi yang seharusnya dijaga kerahasiaannya kepada pihak yang tidak berhak atau tidak berwenang.
                Ini dapat mencakup rincian produk, strategi pemasaran, data pelanggan, atau informasi internal lainnya yang memiliki nilai komersial atau keunggulan persaingan.
                Pembocoran rahasia dapat menyebabkan kerugian finansial, kerugian reputasi, dan bahkan tuntutan hukum terhadap perusahaan yang terkena dampaknya.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen7(true)}
            >
              Penggelapan Aset
            </button>

            <Modal open={isOpen7} onClose={() => {
              setIsOpen7(false)
            }}>
              <p className="text-black text-justify">
                Tindakan ilegal di mana seseorang, biasanya seorang karyawan atau pejabat perusahaan, mengambil atau
                menggunakan aset perusahaan tanpa izin atau untuk kepentingan pribadi tanpa memperhatikan kepentingan perusahaan.
                Ini bisa mencakup pencurian uang tunai, pencurian barang fisik, atau manipulasi data keuangan untuk tujuan penipuan.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen8(true)}
            >
              Pemerasan
            </button>

            <Modal open={isOpen8} onClose={() => {
              setIsOpen8(false)
            }}>
              <p className="text-black text-justify">
                Memaksa seseorang dengan kekerasan atau ancaman kekerasan untuk memberikan suatu barang milik orang itu atau milik orang lain baik sebagian atau seluruhnya.
                Penggunaan kekuasaan atau pengaruh yang tidak adil untuk memperoleh keuntungan pribadi atau untuk menciptakan keadaan yang menguntungkan bagi pihak yang memeras.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen9(true)}
            >
              Pelanggaran Etika dan Perbuatan Asusila
            </button>

            <Modal open={isOpen9} onClose={() => {
              setIsOpen9(false)
            }}>
              <p className="text-black text-justify">
                Pelanggaran etika dalam sebuah perusahaan terjadi ketika individu atau kelompok tidak mematuhi norma-norma moral atau prinsip-prinsip
                yang dianggap benar atau pantas dalam lingkungan kerja. Ini bisa mencakup tindakan seperti penipuan, penggelapan, atau diskriminasi. Sedangkan
                Perbuatan asusila dalam suatu perusahaan merujuk pada tindakan atau perilaku yang tidak senonoh, tidak etis, atau tidak pantas
                di lingkungan kerja. Contoh-contoh termasuk pelecehan seksual, percakapan yang kasar atau tidak pantas, atau tindakan yang melanggar
                norma-norma budaya atau agama tertentu.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen10(true)}
            >
              Penipuan
            </button>

            <Modal open={isOpen10} onClose={() => {
              setIsOpen10(false)
            }}>
              <p className="text-black text-justify">
                Suatu perusahaan merujuk pada tindakan tidak jujur atau manipulatif yang dilakukan oleh individu atau kelompok di dalam perusahaan
                dengan tujuan untuk memperoleh keuntungan secara tidak sah atau untuk mengelabui pihak lain, seperti pemegang saham, klien, atau pemerintah.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen11(true)}
            >
              Pencurian
            </button>

            <Modal open={isOpen11} onClose={() => {
              setIsOpen11(false)
            }}>
              <p className="text-black text-justify">
                Suatu tindakan yang dilakukan berupa mengambil properti atau barang milik orang lain tanpa izin dari pemiliknya. Pencurian dalam suatu perusahaan
                terjadi ketika seseorang mengambil barang, uang, atau informasi yang dimiliki oleh perusahaan tanpa izin atau persetujuan.
                Hal ini dapat meliputi tindakan seperti mencuri uang tunai, mencuri barang fisik, atau mencuri data penting perusahaan. Pencurian di dalam perusahaan
                bisa dilakukan oleh karyawan sendiri atau pihak eksternal yang masuk ke dalam sistem perusahaan secara ilegal.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen12(true)}
            >
              Penyelewengan Uang Perseroan
            </button>

            <Modal open={isOpen12} onClose={() => {
              setIsOpen12(false)
            }}>
              <p className="text-black text-justify">
                Penyelewengan uang perseroan dalam suatu perusahaan terjadi ketika seseorang di dalam perusahaan menggunakan dana perusahaan untuk kepentingan
                pribadi atau tidak sah, bukan untuk kepentingan perusahaan atau para pemegang saham. Contoh tindakan penyelewengan uang perusahaan yaitu Pencurian atau Penggelapan data perusahaan,
                pembelian barang atau jasa yang tidak diperlukan dan pengalihan aset perusahaan ke entitas pribadi dan sebagainya.
              </p>
            </Modal>
            <button
              className="jenis-ruanglingkup hover:text-black font-semibold items-center m-5 p-6 space-y-6 rounded-lg bg-yellow-400"
              onClick={() => setIsOpen13(true)}
            >
              Penyalahgunaan dan Pemalsuan Data
            </button>

            <Modal open={isOpen13} onClose={() => {
              setIsOpen13(false)
            }}>
              <p className="text-black text-justify">
                Penyalahgunaan dan pemalsuan data dalam suatu perusahaan adalah tindakan tidak jujur di mana informasi atau data yang disediakan atau dimanipulasi
                dengan cara yang tidak benar atau tidak sah. Hal ini dapat meliputi penyembunyian informasi penting, manipulasi angka, atau pembuatan data palsu
                untuk kepentingan pribadi atau keuntungan yang tidak sah.
              </p>
            </Modal>
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
