import App from './app'
import { PasienRoute } from './routes/pasien.route'

const app = new App([new PasienRoute()])

app.listen()
