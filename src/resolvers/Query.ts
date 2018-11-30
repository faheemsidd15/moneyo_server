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
			Conn.query(
				"select sum(amount) as amount from `default@default`.`Income` join `default@default`.`_IncomeToUser` where Income.id = _IncomeToUser.A and _IncomeToUser.B =" +
					`'${id}'` +
					";",
				(error, results, fields) => {
					if (error) throw error

					const response = results[0].amount

					resolve(response)
					console.log("Query Resolved")
				}
			)
		})

		return amount
	},

	me(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)
		return ctx.db.query.user({ where: { id } }, info)
	}
}
