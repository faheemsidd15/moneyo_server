import { getUserId, Context, Conn } from "../utils"
import { Result } from "range-parser"
import { forwardTo } from "prisma-binding"
import sqlFunction, {
	TOTAL_MONTHLY_INCOME,
	TOTAL_WEEKLY_INCOME,
	TOTAL_BIWEEKLY_INCOME,
	TOTAL_DAILY_INCOME
} from "../sql"

const factors = { monthly: 1, weekly: 4, daily: 30, biweekly: 2 }

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
	// income: (parent, args, ctx: Context, info) => {
	// 	getUserId(ctx);
	// 	return forwardTo("db")(parent, args, ctx, info);
	// },
	async totalMonthlyIncome(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)

		const amount = await new Promise((resolve, reject) => {
			Conn.query(sqlFunction(TOTAL_MONTHLY_INCOME, id), (error, results, fields) => {
				if (error) throw error
				const response = results[0].amount
				resolve(response)
				console.log("Monthly Query Resolved")
			})
		})

		return amount
	},

	async totalWeeklyIncome(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)

		const amount = await new Promise((resolve, reject) => {
			Conn.query(sqlFunction(TOTAL_WEEKLY_INCOME, id), (error, results, fields) => {
				if (error) throw error
				const response = results[0].amount
				resolve(response)
				console.log("Weekly Query Resolved")
			})
		})

		return amount
	},

	async totalDailyIncome(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)

		const amount = await new Promise((resolve, reject) => {
			Conn.query(sqlFunction(TOTAL_DAILY_INCOME, id), (error, results, fields) => {
				if (error) throw error
				const response = results[0].amount
				resolve(response)
				console.log("Daily Query Resolved")
			})
		})

		return amount
	},

	async totalBiweeklyIncome(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)

		const amount = await new Promise((resolve, reject) => {
			Conn.query(sqlFunction(TOTAL_BIWEEKLY_INCOME, id), (error, results, fields) => {
				if (error) throw error
				const response = results[0].amount
				resolve(response)
				console.log("Biweekly Query Resolved")
			})
		})

		return amount
	},

	totalIncome(parent, args, ctx: Context, info) {
		return Promise.all([
			Query.totalMonthlyIncome(parent, args, ctx, info),
			Query.totalWeeklyIncome(parent, args, ctx, info),
			Query.totalDailyIncome(parent, args, ctx, info),
			Query.totalBiweeklyIncome(parent, args, ctx, info)
		]).then((results: any[]) => {
			const noNull = results.map(res => (res === null ? 0 : res))
			const mapFactors = [factors.monthly, factors.weekly, factors.daily, factors.biweekly]
			return noNull.reduce((r, a, i) => r + a * mapFactors[i], 0)
		})
	},

	me(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)
		return ctx.db.query.user({ where: { id } }, info)
	}
}
