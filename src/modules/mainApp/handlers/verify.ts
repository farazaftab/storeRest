import {Request, Response} from 'express'

//import {verifyAccessToken, extractAccessToken} from '../helpers'

export default async (req: Request, res: Response) => {
  try {
    
    const json = {
      "status": "succcess",
      "response": "In progress 1"
     }
     res.json(json)
  } catch (e) {
    res.sendStatus(401)
  }
}
