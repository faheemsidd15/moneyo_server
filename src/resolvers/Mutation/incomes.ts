import { getUserId, Context } from "../../utils"

export const income = {
	async createIncome(parent, { name, amount, type, payDate }, ctx: Context, info) {
		const userId = getUserId(ctx)
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
	}
}
