import { pasienModel } from '../models/pasien.model'
import { IPasien } from '../interfaces/pasien.interface'

export class PasienService {
  public pasienModel = pasienModel

  public async makePasien(data: IPasien): Promise<IPasien> {
    const createPasien = await pasienModel.create({
      ...data,
    })

    return createPasien
  }
}
