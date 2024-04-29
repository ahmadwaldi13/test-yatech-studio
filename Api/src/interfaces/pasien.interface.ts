export interface IPasien {
  id?: string
  nama: string
  tanggal_pengobatan: Date
  keluhan: string[]
  resep_obat: string[]
  biaya: number
  asuransi?: boolean
  nama_asuransi?: string | null
  biaya_cover_asuransi?: number | 0
}
