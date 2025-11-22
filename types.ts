export interface Biodata {
  id: number;
  nama: string;
  email: string;
  alamat: string;
  deskripsi: string;
  no_hp?: string;
  foto_url?: string;
}

export interface Pendidikan {
  id: number;
  institusi: string;
  tingkat: string;
  jurusan?: string;
  tahun_mulai: number;
  tahun_selesai?: number;
}

export interface Pengalaman {
  id: number;
  posisi: string;
  perusahaan: string;
  jenis: string;
  deskripsi: string;
  tahun_mulai: number;
  tahun_selesai?: number;
}

export interface Keahlian {
  id: number;
  nama_skill: string;
  level: string;
  kategori: string;
}