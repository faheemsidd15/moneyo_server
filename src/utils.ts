import * as jwt from "jsonwebtoken"
import { Prisma } from "./generated/prisma"
import { createConnection } from "mysql"

const config = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PWD,
	port: 3001,
	database: process.env.DB_DATABASE
}

export const Conn = createConnection(config)

export interface Context {
	db: Prisma
	request: any
	connection: any
}

export function getUserId(ctx: Context) {
	const Authorization = ctx.request.get("Authorization")
	console.log("AUTH", Authorization)
	const token = Authorization.replace("Bearer ", "")

	console.log(token)
	if (token) {
		const { userId } = jwt.verify(token, Buffer.from(process.env.APP_SECRET, "base64"))

		console.log(userId)

		return userId
	}

	throw new AuthError()
}

export const createToken = (userId: String) =>
	jwt.sign({ userId }, Buffer.from(process.env.APP_SECRET, "base64"), { expiresIn: "3d" })

export class AuthError extends Error {
	constructor() {
		super("Not authorized")
	}
}
