import {Request, Response} from 'express'


export default async (req: Request, res: Response) => {
  try {
    const json = {
      "status": "succcess",
      "response": "In progress"
     }
      res.json(json)

  } catch (e) {
    res.sendStatus(400)
  }
}
