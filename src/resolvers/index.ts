import { Query } from "./Query"
import { auth } from "./Mutation/auth"
import { post } from "./Mutation/post"
import { income } from "./Mutation/incomes"
import { AuthPayload } from "./AuthPayload"

export default {
	User: {
		totalIncome: async ({ id, incomes }, args, ctx: any) => {
			console.log(ctx.db)

			return incomes.reduce((acc, { amount }) => {
				return acc + amount
			}, 0)
		}
	},
	Query,
	Mutation: {
		...auth,
		...post,
		...income
	},
	// User: {
	//   posts: (user, input, ctx) => {
	//     // return ctx.models.UserPosts.where({ userId: user.id })
	//   }
	// },
	AuthPayload
}
