import { getUserId, Context } from "../../utils"

export const income = {
	async updateIncome(parent, { input: { id, ...data } }, ctx: Context, info) {
		console.log("This is the id of the income passed: ", id)
		const userId = getUserId(ctx)
		const income = await ctx.db.query.income({ where: { id } }, `{ user { id } }`)
		console.log("THis is a query ", income)

		if (userId !== income.user.id) {
			throw new Error("Not Authorized")
		}

		return ctx.db.mutation.updateIncome(
			{
				where: {
					id
				},
				data
			},
			info
		)
	},

	async createIncome(parent, { input: { name, amount, type, payDate } }, ctx: Context, info) {
		const userId = getUserId(ctx)
		//
		return ctx.db.mutation.createIncome(
			{
				data: {
					name,
					amount,
					type,
					payDate,
					user: {
						connect: { id: userId }
					}
				}
			},
			info
		)
	},
	async deleteIncome(parent, { id }, ctx: Context, info) {
		const userId = getUserId(ctx)
		const IncomeExists = await ctx.db.exists.Income({
			id,
			user: { id: userId }
		})
		if (!IncomeExists) {
			throw new Error(`Income not found or you're not the user`)
		}

		return ctx.db.mutation.deleteIncome({ where: { id } })
	}
}
