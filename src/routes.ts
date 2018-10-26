import {Router} from 'express'

import mainAppAPI from './modules/mainApp/routes'
import sideAppAPI from './modules/sideApp/routes'

const router = Router()

router.use('/app1', mainAppAPI)
router.use('/app2', sideAppAPI)

router.all('*', (req, res) => res.sendStatus(404))

export default router
