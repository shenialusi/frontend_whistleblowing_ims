"use client";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { url } from 'inspector';
import Header from '../components/header';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [open, setOpen] = useState(false);
  const faqs = [
    {
      question: 'Apakah video gratis tersedia ?',
      answered: 'Tentu saja. Video yang berbayar bertanda icon rocket. Jika tidak ada tanda, video itu gratis.'
    },
    {
      question: 'Bagaimana cara nonton video gratis mau pun berbayar ?',
      answered: ' Dari kedua sisi baik gratis mau pun berbayar, Anda tetap harus login jika ingin menonton video. ',
    },
    {
      question: 'Bagaimana cara nonton video gratis mau pun berbayar ?',
      answered: ' Dari kedua sisi baik gratis mau pun berbayar, Anda tetap harus login jika ingin menonton video. ',
    },
    {
      question: 'Bagaimana cara nonton video gratis mau pun berbayar ?',
      answered: ' Dari kedua sisi baik gratis mau pun berbayar, Anda tetap harus login jika ingin menonton video. ',
    },
    {
      question: 'Bagaimana cara nonton video gratis mau pun berbayar ?',
      answered: ' Dari kedua sisi baik gratis mau pun berbayar, Anda tetap harus login jika ingin menonton video. ',
    },
    {
      question: 'Bagaimana cara nonton video gratis mau pun berbayar ?',
      answered: ' Dari kedua sisi baik gratis mau pun berbayar, Anda tetap harus login jika ingin menonton video. ',
    },
    {
      question: 'Bagaimana cara nonton video gratis mau pun berbayar ?',
      answered: ' Dari kedua sisi baik gratis mau pun berbayar, Anda tetap harus login jika ingin menonton video. ',
    },
    {
      question: 'Bagaimana cara nonton video gratis mau pun berbayar ?',
      answered: ' Dari kedua sisi baik gratis mau pun berbayar, Anda tetap harus login jika ingin menonton video. ',
    },
  ];

  interface ItemProps {
    q: string; // Tipe data q diubah menjadi string
    a: string; // Tipe data a diubah menjadi string
  }
  const Item: React.FC<ItemProps> = ({ q, a }) => (
    <div className="relative overflow-hidden">
      <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
      <div className="peer-checked:bg-yellow-400 hover:text-black h-12 w-full pl-5 flex items-center">
        <h1>
          {q}
        </h1>
      </div>
      <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="overflow-hidden bg-white transition-all duration-500 max-h-0 peer-checked:max-h-40">
        <div className="faq-2 p-5 border-t">{a}</div>
      </div>
    </div>
  );
  return (
    <main>
      <Header />

      <section>
        <div className='max-w-6xl px-5 mx-auto mt-24 text-center pt-2'>
          <h2 className='text-4xl font-medium text-center'>
            <span className="faq-text">Yang Sering Ditanyakan</span>
          </h2>
        </div>
        <div className="faq-text2 p-10">
          <div className="faq overflow-hidden divide-y border shadow-sm rounded-2xl mt-5">
            {faqs.map((item, key) => <Item q={item.question} a={item.answered} key={key} />)}
          </div>
        </div>

      </section>
    </main>
  );
}