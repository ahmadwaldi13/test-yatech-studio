import { Request, Response, NextFunction } from 'express'
import { PasienService } from '../services/pasien.service'

export class PasienController {
  public async createPasien(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const izinService = new PasienService()
      const data = req.body
      const makeIzin = await izinService.makePasien(data)

      res.json({
        data: makeIzin,
      })
    } catch (error) {
      console.info(error)
      next(error)
    }
  }
}
