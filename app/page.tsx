import Link from 'next/link';
import { FaUser, FaCloudDownloadAlt, FaGraduationCap, FaBriefcase, FaBolt } from "react-icons/fa";
import { Biodata, Keahlian } from '@/types';

interface CVData {
  biodata: Biodata | null;
  keahlian: Keahlian[];
}

async function getCVData(): Promise<CVData> {
  try {
    const [bioRes, skillRes] = await Promise.all([
      fetch('http://localhost:3000/api/biodata', { cache: 'no-store' }),
      fetch('http://localhost:3000/api/keahlian', { cache: 'no-store' })
    ]);
    return {
      biodata: bioRes.ok ? await bioRes.json() : null,
      keahlian: skillRes.ok ? await skillRes.json() : [] 
    };
  } catch (e) { return { biodata: null, keahlian: [] }; }
}

const getLevelWidth = (level: string) => {
  const lvl = level ? level.toLowerCase() : '';
  if (lvl === 'expert') return 'w-full';
  if (lvl === 'intermediate') return 'w-2/3';
  if (lvl === 'basic') return 'w-1/3'; 
  return 'w-1/2';
};

export default async function Home() {
  const { biodata, keahlian } = await getCVData();

  const bio = biodata || {
    id: 0, nama: "Nama Belum Diisi", deskripsi: "Deskripsi kosong.", 
    email: "-", alamat: "-", no_hp: "-", foto_url: "" 
  };
  
  const skills = keahlian;

  return (
    <main className="min-h-screen bg-[#111111] text-gray-300 font-sans flex justify-center items-center p-4 md:p-10">
      
      <div className="flex w-full max-w-5xl bg-[#1a1a1a] shadow-2xl overflow-hidden rounded-lg aspect-[15/9]">
        
        {/* SIDEBAR */}
        <aside className="hidden md:flex w-20 bg-[#1a1a1a] flex-col items-center py-10 space-y-8 border-r border-gray-800 z-50">
          <div className="text-cyan-400 text-xl font-bold mb-4 border-b border-gray-700 pb-4 w-full text-center">CV</div>
          <Link href="/" className="group relative flex justify-center w-full">
            <FaUser className="text-cyan-400 cursor-pointer transition text-xl" /> {/* Aktif */}
          </Link>
          <Link href="/pendidikan" className="group relative flex justify-center w-full">
            <FaGraduationCap className="hover:text-cyan-400 cursor-pointer transition text-xl" />
          </Link>
          <Link href="/pengalaman" className="group relative flex justify-center w-full">
            <FaBriefcase className="hover:text-cyan-400 cursor-pointer transition text-xl" />
          </Link>
          <Link href="/keahlian" className="group relative flex justify-center w-full">
            <FaBolt className="hover:text-cyan-400 cursor-pointer transition text-xl" />
          </Link>
          <div className="flex-grow"></div>
          <FaCloudDownloadAlt className="hover:text-cyan-400 cursor-pointer transition" size={24} />
        </aside>

        {/* KONTEN */}
        <div className="flex flex-col md:flex-row w-full h-full">
          
          {/* KOLOM 1: FOTO */}
          <section className="w-full md:w-[40%] relative bg-[#121212] h-full group">
             <div className="absolute inset-0 bg-black/30 z-10 transition group-hover:bg-black/10"></div>
             <img src="/fotoprofile.jpg" alt="Profile" className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition duration-700 ease-in-out" />
             <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10 bg-gradient-to-t from-black via-black/50 to-transparent">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">{bio.nama}</h1>
                <p className="text-cyan-400 text-base mt-2 tracking-widest uppercase font-semibold">Mahasiswa / Developer</p>
                <div className="mt-4 text-sm text-gray-300 space-y-1">
                    <p>📧 {bio.email}</p>
                    <p>📱 {bio.no_hp}</p>
                    <p>📍 {bio.alamat}</p>
                </div>
             </div>
          </section>

          {/* KOLOM 2: KONTEN */}
          <section className="w-full md:w-[60%] p-8 md:p-12 flex flex-col h-full overflow-y-auto scrollbar-hide">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Profil</h2>
              <div className="h-1 w-20 bg-cyan-500 mb-6"></div>
              <p className="text-gray-400 leading-relaxed text-sm text-justify">{bio.deskripsi || "Deskripsi belum diisi."}</p>
            </div>

            <hr className="border-gray-800 mb-8" />

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                 <span className="text-cyan-400 text-xl bg-cyan-400/10 p-2 rounded">⚡</span>
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider">Skills</h3>
              </div>
              <div className="space-y-6">
                {skills.length > 0 ? (
                    skills.map((skill) => (
                    <div key={skill.id} className="group">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm font-bold text-gray-200 uppercase tracking-wide group-hover:text-cyan-400 transition">{skill.nama_skill}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-800 text-cyan-400 border border-gray-700">{skill.level}</span>
                        </div>
                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                           <div className={`bg-cyan-500 h-full rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)] ${getLevelWidth(skill.level)}`}></div>
                        </div>
                    </div>
                    ))
                ) : (<div className="text-gray-500 text-sm">Belum ada data skill.</div>)}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}