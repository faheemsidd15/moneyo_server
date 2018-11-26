import { GraphQLServer } from "graphql-yoga"
import { Prisma } from "./generated/prisma"
import resolvers from "./resolvers"
import { Conn } from "./utils"

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers,
	context: req => ({
		...req,
		Conn,
		db: new Prisma({
			endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
			debug: true // log all GraphQL queries & mutations sent to the Prisma API
			// secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
		})
	})
})

const startServer = async () => {
	await Conn.connect()
	server.start(() => console.log(`Server is running on http://localhost:4000`))
}

startServer()

// /* Some example code for mysql queries */
// Conn.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
// 	if (error) throw error
// 	console.log("The solution is: ", results[0].solution)
// })

// const varible = 5

// Conn.query(`select ${varible} * ${varible} as problem`, (error, results, fields) => {
// 	if (error) throw error
// 	console.log("the Problem is : ", results[0].problem)
// })
