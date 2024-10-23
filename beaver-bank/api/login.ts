import { NextApiRequest, NextApiResponse } from "next"
import { connectToDB } from "@/lib/mongodb"
import { User } from "@/models/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { username, password } = req.body

  await connectToDB()

  const user = await User.findOne({ username })
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" })
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    return res.status(401).json({ message: "Invalid username or password" })
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1h" })
  res.status(200).json({ token, user })
}