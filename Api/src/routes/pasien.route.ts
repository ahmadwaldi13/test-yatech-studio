import { Router } from 'express'
import { Routes } from '../interfaces/routes.interface'
import { PasienController } from '../controllers/pasien.controller'

export class PasienRoute implements Routes {
  public path = '/'
  public router = Router()
  public pasienController = new PasienController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(`${this.path}pasien`, this.pasienController.createPasien)
  }
}
