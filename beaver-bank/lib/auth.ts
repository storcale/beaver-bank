import { NextApiRequest } from "next"
import jwt from "jsonwebtoken"

export function getUserFromRequest(req: NextApiRequest) {
  const token = req.cookies["token"]
  if (!token) return null

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
    return decoded
  } catch (err) {
    return null
  }
}