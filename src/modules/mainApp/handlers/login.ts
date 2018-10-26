import {Request, Response} from 'express'

export default async (req: Request, res: Response) => {
  //const {username, password}: Credentials = req.body

  try {

    const json = {
     "status": "succcess",
     "response": "In progress"
    }

    res.json(json)
  } catch (e) {
    res.sendStatus(401)
  }
}
