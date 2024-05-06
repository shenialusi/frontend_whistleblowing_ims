import { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Dialog } from '@headlessui/react';


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [open, setOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">IMS</span>
                        <img
                            className="h-10 w-auto"
                            src="/logo.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="navbar-text hidden lg:flex lg:gap-x-20">

                    <a key="Beranda" href="/" className="item-menu-2 item-menu text-sm font-reguler leading-6 text-black rounded-md">
                        Beranda
                    </a>
                    <div className="relative">
                        <button onClick={() => setOpen(!open)} className="item-menu-2 text-sm font-reguler leading-6 text-black dropbtn" style={{ lineHeight: 2.1 }}>
                            Report <ChevronDownIcon className="h-4 w-4 inline-block" />
                        </button>
                        {open && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <a href="/report/buat-laporan" className="item-menu-2 item-menu block px-4 py-2 text-sm text-black">Buat Laporan</a>
                                <a href="/report/cek-status" className="item-menu-2 item-menu block px-4 py-2 text-sm text-black">Cek Status</a>
                                <a href="/report/laporan-statistik" className="item-menu-2 item-menu block px-4 py-2 text-sm text-black">Laporan Statistik</a>
                            </div>
                        )}
                    </div>

                    <a key="FAQ" href="/faq" className="item-menu-2 item-menu text-sm font-reguler leading-6 text-black">
                        FAQ
                    </a>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">IMS</span>
                            <img
                                className="h-8 w-auto"
                                src="/logo.png"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    key="Beranda"
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-reguler leading-7 text-black hover:bg-gray-50"
                                >
                                    Beranda
                                </a>
                                <a
                                    key="Report"
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-reguler leading-7 text-black hover:bg-gray-50"
                                >
                                    Report
                                </a>
                                <a
                                    key="Laporan"
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-reguler leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <ChevronRightIcon className="h-4 w-4 inline-block" /> Buat Laporan
                                </a>
                                <a
                                    key="Cek Status"
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-reguler leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <ChevronRightIcon className="h-4 w-4 inline-block" /> Cek Status
                                </a>
                                <a
                                    key="Laporan Statistik"
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-reguler leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <ChevronRightIcon className="h-4 w-4 inline-block" /> Laporan Statistik
                                </a>
                                <a
                                    key="FAQ"
                                    href="/faq"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-reguler leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    FAQ
                                </a>

                            </div>
                            <div className="py-6">
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )

}