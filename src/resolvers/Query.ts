import { getUserId, Context, Conn } from "../utils"
import { Result } from "range-parser"

export const Query = {
	feed(parent, args, ctx: Context, info) {
		return ctx.db.query.posts({ where: { isPublished: true } }, info)
	},

	drafts(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)

		const where = {
			isPublished: false,
			author: {
				id
			}
		}

		return ctx.db.query.posts({ where }, info)
	},

	post(parent, { id }, ctx: Context, info) {
		return ctx.db.query.post({ where: { id: id } }, info)
	},
	income(parent, { id }, ctx: Context, info) {
		return ctx.db.query.income({ where: { id: id } }, info)
	},

	async totalIncome(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)

		const amount = await new Promise((resolve, reject) => {
			Conn.query(`SELECT 768 + 1 as amount`, (error, results, fields) => {
				if (error) throw error

				console.log(`hello 'there'`)
				const response = results[0].amount
				resolve(response)
			})
		})

		return amount
	},

	me(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)

		//console.log(ctx.db.query.user({ where: { id } }, info))

		return ctx.db.query.user({ where: { id } }, info)
	}
}
