export const TOTAL_MONTHLY_INCOME =
	"select sum(amount) as amount from Income join _IncomeToUser where Income.id = _IncomeToUser.A and Income.type = 'monthly' and _IncomeToUser.B = "

export const TOTAL_WEEKLY_INCOME =
	"select sum(amount) as amount from Income join _IncomeToUser where Income.id = _IncomeToUser.A and Income.type = 'weekly' and _IncomeToUser.B = "

const sqlFunction = (query: string, id: any) => {
	return query + `'${id}';`
}

export default sqlFunction
