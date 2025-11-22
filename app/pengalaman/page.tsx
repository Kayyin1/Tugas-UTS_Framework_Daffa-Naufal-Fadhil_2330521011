import Link from 'next/link';
import { FaUser, FaCloudDownloadAlt, FaGraduationCap, FaBriefcase, FaBolt } from "react-icons/fa";
import { Biodata, Pengalaman } from '@/types';

interface PageData {
  biodata: Biodata | null;
  pengalaman: Pengalaman[];
}

async function getData(): Promise<PageData> {
  try {
    const [bioRes, expRes] = await Promise.all([
      fetch('http://localhost:3000/api/biodata', { cache: 'no-store' }),
      fetch('http://localhost:3000/api/pengalaman', { cache: 'no-store' })
    ]);
    return {
      biodata: bioRes.ok ? await bioRes.json() : null,
      pengalaman: expRes.ok ? await expRes.json() : []
    };
  } catch (e) { return { biodata: null, pengalaman: [] }; }
}

export default async function PengalamanPage() {
  const { biodata, pengalaman } = await getData();
  const bio = biodata || { id: 0, nama: "Nama", deskripsi: "-", email: "-", alamat: "-", no_hp: "-", foto_url: "" };

  return (
    <main className="min-h-screen bg-[#111111] text-gray-300 font-sans flex justify-center items-center p-4 md:p-10">
      <div className="flex w-full max-w-5xl bg-[#1a1a1a] shadow-2xl overflow-hidden rounded-lg aspect-[15/9]">
        
        {/* SIDEBAR */}
        <aside className="hidden md:flex w-20 bg-[#1a1a1a] flex-col items-center py-10 space-y-8 border-r border-gray-800 z-50">
          <div className="text-cyan-400 text-xl font-bold mb-4 border-b border-gray-700 pb-4 w-full text-center">CV</div>
          <Link href="/"><FaUser className="hover:text-cyan-400 cursor-pointer transition text-xl" /></Link>
          <Link href="/pendidikan"><FaGraduationCap className="hover:text-cyan-400 cursor-pointer transition text-xl" /></Link>
          <Link href="/pengalaman"><FaBriefcase className="text-cyan-400 cursor-pointer transition text-xl" /></Link> {/* Aktif */}
          <Link href="/keahlian"><FaBolt className="hover:text-cyan-400 cursor-pointer transition text-xl" /></Link>
          <div className="flex-grow"></div>
          <FaCloudDownloadAlt className="hover:text-cyan-400 cursor-pointer transition" size={24} />
        </aside>

        {/* KONTEN */}
        <div className="flex flex-col md:flex-row w-full">
          
          {/* KOLOM 1 */}
          <section className="hidden md:block w-full md:w-[35%] relative bg-[#121212] border-r border-gray-800">
             <img src="/fotoprofile.jpg" alt="Profile" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" />
             <div className="relative z-20 h-full flex flex-col justify-end p-10 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent">
                <h1 className="text-3xl font-bold text-white">{bio.nama}</h1>
                <p className="text-cyan-400 text-sm tracking-widest uppercase mt-1">Experience</p>
                {/* Sosmed dihapus */}
             </div>
          </section>

          {/* KOLOM 2 */}
          <section className="w-full md:w-[65%] p-8 md:p-16 overflow-y-auto h-full max-h-[800px]">
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-white mb-4">Pengalaman</h2>
              <div className="h-1 w-20 bg-cyan-500"></div>
            </div>
            <div className="grid gap-6">
              {pengalaman.length > 0 ? (
                pengalaman.map((item) => (
                  <div key={item.id} className="bg-[#222] p-6 rounded border-l-4 border-cyan-500 hover:bg-[#2a2a2a] transition shadow-lg">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{item.posisi}</h3>
                        <span className="bg-cyan-900/30 text-cyan-400 text-xs px-2 py-1 rounded uppercase border border-cyan-900">{item.jenis}</span>
                    </div>
                    <p className="text-cyan-500 font-medium mb-4">{item.perusahaan}</p>
                    <div className="text-gray-400 text-sm leading-relaxed mb-4 border-b border-gray-700 pb-4">{item.deskripsi}</div>
                    <div className="text-xs font-mono text-gray-500">📅 {item.tahun_mulai} - {item.tahun_selesai || 'Sekarang'}</div>
                  </div>
                ))
              ) : (<div className="text-gray-500">Data pengalaman belum diisi.</div>)}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}