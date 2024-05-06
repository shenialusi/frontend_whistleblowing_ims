'use client'
import Header from '../../../components/header'
import { useState } from 'react'

export default function Page() {
const [status, setStatus] = useState(1)
const [anonim, setAnonim] = useState(2)



return (
<main>
    <Header />
    <section id="whistleblowing">
        <div className="bg-white">
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="w-full max-w-md p-8">
                    <h1 className="text-xl font-bold text-center mt-[-6] mb-6">Status Laporan</h1>

                    <table className="w-full mb-10">
                        <tbody>
                            <tr>
                                <td>ID Laporan</td>
                                <td>Value Field</td>
                            </tr>
                            { anonim === 1 ? (
                            <>
                                <tr>
                                    <td>Nama Pelapor</td>
                                    <td>Value Field</td>
                                </tr>
                                <tr>
                                    <td>Departemen</td>
                                    <td>Value Field</td>
                                </tr>
                                <tr>
                                    <td>Alamat Email</td>
                                    <td>Value Field</td>
                                </tr>
                                <tr>
                                    <td>Nomor Kontak</td>
                                    <td>Value Field</td>
                                </tr>
                            </>
                            ) : (
                            <>
                            </>
                            ) }
                            <tr>
                                <td>Status</td>
                                <td>
                                    { status === 1 ? (
                                    <span
                                        className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        On Process
                                    </span>
                                    ) : (
                                    <span
                                        className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-green-600/20">
                                        Close
                                    </span>
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
    </section>
</main>
)
}
