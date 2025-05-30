'use client';

import { Button } from '@my-monorepo/ui';
import { formatUserName, generateRandomId } from '@my-monorepo/utils';
import { User } from '@my-monorepo/types';
import { useState } from 'react';

export default function Home() {
  const [generatedId, setGeneratedId] = useState<string>('');

  const currentUser: User = {
    id: 'user-123',
    name: 'Budi Santoso',
    email: 'budi.santoso@example.com',
  };

  const handleButtonClick = () => {
    const newId = generateRandomId();
    setGeneratedId(newId);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-6 md:p-12 bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 overflow-hidden font-sans">
      {/* Efek lingkaran ngeblur dengan radial gradient yang lebih halus */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.4), transparent 70%)',
          filter: 'blur(150px)',
          zIndex: 0,
        }}
      />
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4">
        {/* Judul Utama */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-blue-800 text-center drop-shadow-sm">
          Monorepo App Showcase
        </h1>
        {/* Deskripsi */}
        <p className="text-md md:text-xl mb-8 text-center max-w-2xl leading-relaxed text-gray-700">
          Platform demonstrasi ini menampilkan kemampuan monorepo dalam mengintegrasikan berbagai
          aplikasi dan paket yang dapat digunakan kembali untuk efisiensi pengembangan.
        </p>

        {/* Kontainer Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-purple-700">Informasi Pengguna</h2>
            <p className="text-base md:text-lg mb-2 text-gray-700">
              Nama Pengguna Diformat:{' '}
              <span className="font-semibold text-green-700">
                {formatUserName(currentUser)}
              </span>
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Email:{' '}
              <span className="font-semibold text-green-700">
                {currentUser.email}
              </span>
            </p>
          </div>

          {/* Card Generator ID Acak */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-orange-700">Generator ID Acak</h2>
            <div className="mb-4 text-center">
              <p className="text-base md:text-lg text-gray-700">
                ID yang Dihasilkan:{' '}
                <span className="font-extrabold text-red-600 break-words">
                  {generatedId || 'Klik tombol untuk menghasilkan ID'}
                </span>
              </p>
            </div>
            <button
              onClick={handleButtonClick}
              className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Hasilkan ID Acak
            </button>
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-500 mt-8 text-center">
          Build using Next.js, Tailwind CSS, dan Turborepo.
        </p>
      </div>
    </div>
  );
}