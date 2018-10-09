import { Query } from "./Query"
import { auth } from "./Mutation/auth"
import { post } from "./Mutation/post"
import { AuthPayload } from "./AuthPayload"

export default {
	Query,
	Mutation: {
		...auth,
		...post
	},
	// User: {
	//   posts: (user, input, ctx) => {
	//     // return ctx.models.UserPosts.where({ userId: user.id })
	//   }
	// },
	AuthPayload
}
