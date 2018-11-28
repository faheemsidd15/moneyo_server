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
	// async totalIncome(parent, { id }, ctx: Context, info) {
	// 	const response  = await ctx
	// },
	async totalIncome(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)

		//console.log(ctx.db.query.incomes({ where: { id } }, info))

		//return ctx.db.query.incomes({ where: { user: { id: id } } }, info)
		const object = { amount: 0, name: "Total Income" }
		//return await object
		const amount = await new Promise((resolve, reject) => {
			Conn.query(`select 546 +  1 as amount`, function(error, results, fields) {
				if (error) throw error

				const response = results[0].amount
				object.amount = response
				resolve(response)
			})
		})

		return { ...object, amount }

		// const totalIncome = Conn.query(
		// 	"select sum(amount) as amount from `default@default`.`Income` join `default@default`.`_IncomeToUser` where Income.id = _IncomeToUser.A;",
		// 	function(error, results, fields) {
		// 		if (error) throw error
		// 		//return results[0].summary
		// 		console.log(results[0])
		// 		return results[0].amount
		// 	}
		// )
		// return totalIncome

		// await console.log(response)
		// return await response
		//console.log(ctx.db.query.incomes({ where: { id } }, info))
		//return ctx.db.query.incomesConnection({where: })
	},

	me(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)

		//console.log(ctx.db.query.user({ where: { id } }, info))

		return ctx.db.query.user({ where: { id } }, info)
	}
}
