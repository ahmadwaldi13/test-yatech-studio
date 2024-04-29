import { model, Schema, Document } from 'mongoose'
import { IPasien } from '../interfaces/pasien.interface'

const pasienSchema: Schema = new Schema<IPasien>({
  nama: { type: String, required: true },
  tanggal_pengobatan: { type: Date },
  keluhan: { type: [String], required: true },
  resep_obat: { type: [String], required: true },
  biaya: { type: Number, required: true },
  asuransi: { type: Boolean, default: false },
  nama_asuransi: { type: String, default: null },
  biaya_cover_asuransi: { type: Number, default: 0 },
})

export const pasienModel = model<IPasien & Document>('pasien', pasienSchema)
