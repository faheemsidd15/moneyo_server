import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    expenses: <T = Expense[]>(args: { where?: ExpenseWhereInput, orderBy?: ExpenseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    incomes: <T = Income[]>(args: { where?: IncomeWhereInput, orderBy?: IncomeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categories: <T = Category[]>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    expense: <T = Expense | null>(args: { where: ExpenseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    income: <T = Income | null>(args: { where: IncomeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    category: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    expensesConnection: <T = ExpenseConnection>(args: { where?: ExpenseWhereInput, orderBy?: ExpenseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    incomesConnection: <T = IncomeConnection>(args: { where?: IncomeWhereInput, orderBy?: IncomeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categoriesConnection: <T = CategoryConnection>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createExpense: <T = Expense>(args: { data: ExpenseCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createIncome: <T = Income>(args: { data: IncomeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCategory: <T = Category>(args: { data: CategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateExpense: <T = Expense | null>(args: { data: ExpenseUpdateInput, where: ExpenseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateIncome: <T = Income | null>(args: { data: IncomeUpdateInput, where: IncomeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCategory: <T = Category | null>(args: { data: CategoryUpdateInput, where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteExpense: <T = Expense | null>(args: { where: ExpenseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteIncome: <T = Income | null>(args: { where: IncomeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCategory: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertExpense: <T = Expense>(args: { where: ExpenseWhereUniqueInput, create: ExpenseCreateInput, update: ExpenseUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertIncome: <T = Income>(args: { where: IncomeWhereUniqueInput, create: IncomeCreateInput, update: IncomeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCategory: <T = Category>(args: { where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyExpenses: <T = BatchPayload>(args: { data: ExpenseUpdateInput, where?: ExpenseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyIncomes: <T = BatchPayload>(args: { data: IncomeUpdateInput, where?: IncomeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCategories: <T = BatchPayload>(args: { data: CategoryUpdateInput, where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyExpenses: <T = BatchPayload>(args: { where?: ExpenseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyIncomes: <T = BatchPayload>(args: { where?: IncomeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCategories: <T = BatchPayload>(args: { where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    expense: <T = ExpenseSubscriptionPayload | null>(args: { where?: ExpenseSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    income: <T = IncomeSubscriptionPayload | null>(args: { where?: IncomeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    category: <T = CategorySubscriptionPayload | null>(args: { where?: CategorySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Expense: (where?: ExpenseWhereInput) => Promise<boolean>
  Income: (where?: IncomeWhereInput) => Promise<boolean>
  Category: (where?: CategoryWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCategory {
  count: Int!
}

type AggregateExpense {
  count: Int!
}

type AggregateIncome {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Category implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type CategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String!
}

input CategoryCreateOneInput {
  create: CategoryCreateInput
  connect: CategoryWhereUniqueInput
}

"""An edge in a connection."""
type CategoryEdge {
  """The item at the end of the edge."""
  node: Category!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  name: String!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
}

input CategoryUpdateDataInput {
  name: String
}

input CategoryUpdateInput {
  name: String
}

input CategoryUpdateOneInput {
  create: CategoryCreateInput
  connect: CategoryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CategoryUpdateDataInput
  upsert: CategoryUpsertNestedInput
}

input CategoryUpsertNestedInput {
  update: CategoryUpdateDataInput!
  create: CategoryCreateInput!
}

input CategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [CategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input CategoryWhereUniqueInput {
  id: ID
}

scalar DateTime

type Expense implements Node {
  id: ID!
  category(where: CategoryWhereInput): Category
  name: String!
  amount: Float!
  type: String!
  dueDate: DateTime!
  user(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type ExpenseConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ExpenseEdge]!
  aggregate: AggregateExpense!
}

input ExpenseCreateInput {
  name: String!
  amount: Float!
  type: String!
  dueDate: DateTime!
  category: CategoryCreateOneInput
  user: UserCreateOneWithoutExpensesInput!
}

input ExpenseCreateManyWithoutUserInput {
  create: [ExpenseCreateWithoutUserInput!]
  connect: [ExpenseWhereUniqueInput!]
}

input ExpenseCreateWithoutUserInput {
  name: String!
  amount: Float!
  type: String!
  dueDate: DateTime!
  category: CategoryCreateOneInput
}

"""An edge in a connection."""
type ExpenseEdge {
  """The item at the end of the edge."""
  node: Expense!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ExpenseOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  amount_ASC
  amount_DESC
  type_ASC
  type_DESC
  dueDate_ASC
  dueDate_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ExpensePreviousValues {
  id: ID!
  name: String!
  amount: Float!
  type: String!
  dueDate: DateTime!
}

type ExpenseSubscriptionPayload {
  mutation: MutationType!
  node: Expense
  updatedFields: [String!]
  previousValues: ExpensePreviousValues
}

input ExpenseSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ExpenseSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExpenseSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExpenseSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ExpenseWhereInput
}

input ExpenseUpdateInput {
  name: String
  amount: Float
  type: String
  dueDate: DateTime
  category: CategoryUpdateOneInput
  user: UserUpdateOneWithoutExpensesInput
}

input ExpenseUpdateManyWithoutUserInput {
  create: [ExpenseCreateWithoutUserInput!]
  connect: [ExpenseWhereUniqueInput!]
  disconnect: [ExpenseWhereUniqueInput!]
  delete: [ExpenseWhereUniqueInput!]
  update: [ExpenseUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ExpenseUpsertWithWhereUniqueWithoutUserInput!]
}

input ExpenseUpdateWithoutUserDataInput {
  name: String
  amount: Float
  type: String
  dueDate: DateTime
  category: CategoryUpdateOneInput
}

input ExpenseUpdateWithWhereUniqueWithoutUserInput {
  where: ExpenseWhereUniqueInput!
  data: ExpenseUpdateWithoutUserDataInput!
}

input ExpenseUpsertWithWhereUniqueWithoutUserInput {
  where: ExpenseWhereUniqueInput!
  update: ExpenseUpdateWithoutUserDataInput!
  create: ExpenseCreateWithoutUserInput!
}

input ExpenseWhereInput {
  """Logical AND on all given filters."""
  AND: [ExpenseWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExpenseWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExpenseWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  dueDate: DateTime

  """All values that are not equal to given value."""
  dueDate_not: DateTime

  """All values that are contained in given list."""
  dueDate_in: [DateTime!]

  """All values that are not contained in given list."""
  dueDate_not_in: [DateTime!]

  """All values less than the given value."""
  dueDate_lt: DateTime

  """All values less than or equal the given value."""
  dueDate_lte: DateTime

  """All values greater than the given value."""
  dueDate_gt: DateTime

  """All values greater than or equal the given value."""
  dueDate_gte: DateTime
  category: CategoryWhereInput
  user: UserWhereInput
}

input ExpenseWhereUniqueInput {
  id: ID
}

type Income implements Node {
  id: ID!
  category(where: CategoryWhereInput): Category
  name: String!
  amount: Float!
  type: String!
  payDate: DateTime!
  user(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type IncomeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [IncomeEdge]!
  aggregate: AggregateIncome!
}

input IncomeCreateInput {
  name: String!
  amount: Float!
  type: String!
  payDate: DateTime!
  category: CategoryCreateOneInput
  user: UserCreateOneWithoutIncomesInput!
}

input IncomeCreateManyWithoutUserInput {
  create: [IncomeCreateWithoutUserInput!]
  connect: [IncomeWhereUniqueInput!]
}

input IncomeCreateWithoutUserInput {
  name: String!
  amount: Float!
  type: String!
  payDate: DateTime!
  category: CategoryCreateOneInput
}

"""An edge in a connection."""
type IncomeEdge {
  """The item at the end of the edge."""
  node: Income!

  """A cursor for use in pagination."""
  cursor: String!
}

enum IncomeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  amount_ASC
  amount_DESC
  type_ASC
  type_DESC
  payDate_ASC
  payDate_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type IncomePreviousValues {
  id: ID!
  name: String!
  amount: Float!
  type: String!
  payDate: DateTime!
}

type IncomeSubscriptionPayload {
  mutation: MutationType!
  node: Income
  updatedFields: [String!]
  previousValues: IncomePreviousValues
}

input IncomeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [IncomeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [IncomeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [IncomeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: IncomeWhereInput
}

input IncomeUpdateInput {
  name: String
  amount: Float
  type: String
  payDate: DateTime
  category: CategoryUpdateOneInput
  user: UserUpdateOneWithoutIncomesInput
}

input IncomeUpdateManyWithoutUserInput {
  create: [IncomeCreateWithoutUserInput!]
  connect: [IncomeWhereUniqueInput!]
  disconnect: [IncomeWhereUniqueInput!]
  delete: [IncomeWhereUniqueInput!]
  update: [IncomeUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [IncomeUpsertWithWhereUniqueWithoutUserInput!]
}

input IncomeUpdateWithoutUserDataInput {
  name: String
  amount: Float
  type: String
  payDate: DateTime
  category: CategoryUpdateOneInput
}

input IncomeUpdateWithWhereUniqueWithoutUserInput {
  where: IncomeWhereUniqueInput!
  data: IncomeUpdateWithoutUserDataInput!
}

input IncomeUpsertWithWhereUniqueWithoutUserInput {
  where: IncomeWhereUniqueInput!
  update: IncomeUpdateWithoutUserDataInput!
  create: IncomeCreateWithoutUserInput!
}

input IncomeWhereInput {
  """Logical AND on all given filters."""
  AND: [IncomeWhereInput!]

  """Logical OR on all given filters."""
  OR: [IncomeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [IncomeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  payDate: DateTime

  """All values that are not equal to given value."""
  payDate_not: DateTime

  """All values that are contained in given list."""
  payDate_in: [DateTime!]

  """All values that are not contained in given list."""
  payDate_not_in: [DateTime!]

  """All values less than the given value."""
  payDate_lt: DateTime

  """All values less than or equal the given value."""
  payDate_lte: DateTime

  """All values greater than the given value."""
  payDate_gt: DateTime

  """All values greater than or equal the given value."""
  payDate_gte: DateTime
  category: CategoryWhereInput
  user: UserWhereInput
}

input IncomeWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createUser(data: UserCreateInput!): User!
  createExpense(data: ExpenseCreateInput!): Expense!
  createIncome(data: IncomeCreateInput!): Income!
  createCategory(data: CategoryCreateInput!): Category!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateExpense(data: ExpenseUpdateInput!, where: ExpenseWhereUniqueInput!): Expense
  updateIncome(data: IncomeUpdateInput!, where: IncomeWhereUniqueInput!): Income
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  deletePost(where: PostWhereUniqueInput!): Post
  deleteUser(where: UserWhereUniqueInput!): User
  deleteExpense(where: ExpenseWhereUniqueInput!): Expense
  deleteIncome(where: IncomeWhereUniqueInput!): Income
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertExpense(where: ExpenseWhereUniqueInput!, create: ExpenseCreateInput!, update: ExpenseUpdateInput!): Expense!
  upsertIncome(where: IncomeWhereUniqueInput!, create: IncomeCreateInput!, update: IncomeUpdateInput!): Income!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyExpenses(data: ExpenseUpdateInput!, where: ExpenseWhereInput): BatchPayload!
  updateManyIncomes(data: IncomeUpdateInput!, where: IncomeWhereInput): BatchPayload!
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyExpenses(where: ExpenseWhereInput): BatchPayload!
  deleteManyIncomes(where: IncomeWhereInput): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  expenses(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Expense]!
  incomes(where: IncomeWhereInput, orderBy: IncomeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Income]!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  post(where: PostWhereUniqueInput!): Post
  user(where: UserWhereUniqueInput!): User
  expense(where: ExpenseWhereUniqueInput!): Expense
  income(where: IncomeWhereUniqueInput!): Income
  category(where: CategoryWhereUniqueInput!): Category
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  expensesConnection(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExpenseConnection!
  incomesConnection(where: IncomeWhereInput, orderBy: IncomeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IncomeConnection!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  expense(where: ExpenseSubscriptionWhereInput): ExpenseSubscriptionPayload
  income(where: IncomeSubscriptionWhereInput): IncomeSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  expenses(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Expense!]
  incomes(where: IncomeWhereInput, orderBy: IncomeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Income!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
  expenses: ExpenseCreateManyWithoutUserInput
  incomes: IncomeCreateManyWithoutUserInput
}

input UserCreateOneWithoutExpensesInput {
  create: UserCreateWithoutExpensesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutIncomesInput {
  create: UserCreateWithoutIncomesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutExpensesInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
  incomes: IncomeCreateManyWithoutUserInput
}

input UserCreateWithoutIncomesInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
  expenses: ExpenseCreateManyWithoutUserInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String!
  expenses: ExpenseCreateManyWithoutUserInput
  incomes: IncomeCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  expenses: ExpenseUpdateManyWithoutUserInput
  incomes: IncomeUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutExpensesInput {
  create: UserCreateWithoutExpensesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutExpensesDataInput
  upsert: UserUpsertWithoutExpensesInput
}

input UserUpdateOneWithoutIncomesInput {
  create: UserCreateWithoutIncomesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutIncomesDataInput
  upsert: UserUpsertWithoutIncomesInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutExpensesDataInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  incomes: IncomeUpdateManyWithoutUserInput
}

input UserUpdateWithoutIncomesDataInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  expenses: ExpenseUpdateManyWithoutUserInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
  expenses: ExpenseUpdateManyWithoutUserInput
  incomes: IncomeUpdateManyWithoutUserInput
}

input UserUpsertWithoutExpensesInput {
  update: UserUpdateWithoutExpensesDataInput!
  create: UserCreateWithoutExpensesInput!
}

input UserUpsertWithoutIncomesInput {
  update: UserUpdateWithoutIncomesDataInput!
  create: UserCreateWithoutIncomesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  expenses_every: ExpenseWhereInput
  expenses_some: ExpenseWhereInput
  expenses_none: ExpenseWhereInput
  incomes_every: IncomeWhereInput
  incomes_some: IncomeWhereInput
  incomes_none: IncomeWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC'

export type ExpenseOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'type_ASC' |
  'type_DESC' |
  'dueDate_ASC' |
  'dueDate_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type IncomeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'type_ASC' |
  'type_DESC' |
  'payDate_ASC' |
  'payDate_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
}

export interface IncomeCreateInput {
  name: String
  amount: Float
  type: String
  payDate: DateTime
  category?: CategoryCreateOneInput
  user: UserCreateOneWithoutIncomesInput
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[] | CategoryWhereInput
  OR?: CategoryWhereInput[] | CategoryWhereInput
  NOT?: CategoryWhereInput[] | CategoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface IncomeUpsertWithWhereUniqueWithoutUserInput {
  where: IncomeWhereUniqueInput
  update: IncomeUpdateWithoutUserDataInput
  create: IncomeCreateWithoutUserInput
}

export interface CategoryUpsertNestedInput {
  update: CategoryUpdateDataInput
  create: CategoryCreateInput
}

export interface IncomeUpdateWithoutUserDataInput {
  name?: String
  amount?: Float
  type?: String
  payDate?: DateTime
  category?: CategoryUpdateOneInput
}

export interface UserCreateOneWithoutIncomesInput {
  create?: UserCreateWithoutIncomesInput
  connect?: UserWhereUniqueInput
}

export interface IncomeUpdateWithWhereUniqueWithoutUserInput {
  where: IncomeWhereUniqueInput
  data: IncomeUpdateWithoutUserDataInput
}

export interface ExpenseWhereInput {
  AND?: ExpenseWhereInput[] | ExpenseWhereInput
  OR?: ExpenseWhereInput[] | ExpenseWhereInput
  NOT?: ExpenseWhereInput[] | ExpenseWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  amount?: Float
  amount_not?: Float
  amount_in?: Float[] | Float
  amount_not_in?: Float[] | Float
  amount_lt?: Float
  amount_lte?: Float
  amount_gt?: Float
  amount_gte?: Float
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  dueDate?: DateTime
  dueDate_not?: DateTime
  dueDate_in?: DateTime[] | DateTime
  dueDate_not_in?: DateTime[] | DateTime
  dueDate_lt?: DateTime
  dueDate_lte?: DateTime
  dueDate_gt?: DateTime
  dueDate_gte?: DateTime
  category?: CategoryWhereInput
  user?: UserWhereInput
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  author: UserCreateOneWithoutPostsInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface UserCreateWithoutPostsInput {
  email: String
  password: String
  name: String
  expenses?: ExpenseCreateManyWithoutUserInput
  incomes?: IncomeCreateManyWithoutUserInput
}

export interface UserUpsertWithoutIncomesInput {
  update: UserUpdateWithoutIncomesDataInput
  create: UserCreateWithoutIncomesInput
}

export interface ExpenseCreateManyWithoutUserInput {
  create?: ExpenseCreateWithoutUserInput[] | ExpenseCreateWithoutUserInput
  connect?: ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ExpenseCreateWithoutUserInput {
  name: String
  amount: Float
  type: String
  dueDate: DateTime
  category?: CategoryCreateOneInput
}

export interface IncomeWhereUniqueInput {
  id?: ID_Input
}

export interface CategoryCreateOneInput {
  create?: CategoryCreateInput
  connect?: CategoryWhereUniqueInput
}

export interface UserUpdateWithoutIncomesDataInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
  expenses?: ExpenseUpdateManyWithoutUserInput
}

export interface CategoryCreateInput {
  name: String
}

export interface IncomeUpdateInput {
  name?: String
  amount?: Float
  type?: String
  payDate?: DateTime
  category?: CategoryUpdateOneInput
  user?: UserUpdateOneWithoutIncomesInput
}

export interface IncomeCreateManyWithoutUserInput {
  create?: IncomeCreateWithoutUserInput[] | IncomeCreateWithoutUserInput
  connect?: IncomeWhereUniqueInput[] | IncomeWhereUniqueInput
}

export interface UserUpdateWithoutExpensesDataInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
  incomes?: IncomeUpdateManyWithoutUserInput
}

export interface IncomeCreateWithoutUserInput {
  name: String
  amount: Float
  type: String
  payDate: DateTime
  category?: CategoryCreateOneInput
}

export interface ExpenseUpdateInput {
  name?: String
  amount?: Float
  type?: String
  dueDate?: DateTime
  category?: CategoryUpdateOneInput
  user?: UserUpdateOneWithoutExpensesInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
  expenses?: ExpenseCreateManyWithoutUserInput
  incomes?: IncomeCreateManyWithoutUserInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface IncomeUpdateManyWithoutUserInput {
  create?: IncomeCreateWithoutUserInput[] | IncomeCreateWithoutUserInput
  connect?: IncomeWhereUniqueInput[] | IncomeWhereUniqueInput
  disconnect?: IncomeWhereUniqueInput[] | IncomeWhereUniqueInput
  delete?: IncomeWhereUniqueInput[] | IncomeWhereUniqueInput
  update?: IncomeUpdateWithWhereUniqueWithoutUserInput[] | IncomeUpdateWithWhereUniqueWithoutUserInput
  upsert?: IncomeUpsertWithWhereUniqueWithoutUserInput[] | IncomeUpsertWithWhereUniqueWithoutUserInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface ExpenseCreateInput {
  name: String
  amount: Float
  type: String
  dueDate: DateTime
  category?: CategoryCreateOneInput
  user: UserCreateOneWithoutExpensesInput
}

export interface IncomeSubscriptionWhereInput {
  AND?: IncomeSubscriptionWhereInput[] | IncomeSubscriptionWhereInput
  OR?: IncomeSubscriptionWhereInput[] | IncomeSubscriptionWhereInput
  NOT?: IncomeSubscriptionWhereInput[] | IncomeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: IncomeWhereInput
}

export interface UserCreateOneWithoutExpensesInput {
  create?: UserCreateWithoutExpensesInput
  connect?: UserWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
  expenses_every?: ExpenseWhereInput
  expenses_some?: ExpenseWhereInput
  expenses_none?: ExpenseWhereInput
  incomes_every?: IncomeWhereInput
  incomes_some?: IncomeWhereInput
  incomes_none?: IncomeWhereInput
}

export interface UserCreateWithoutExpensesInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
  incomes?: IncomeCreateManyWithoutUserInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface IncomeWhereInput {
  AND?: IncomeWhereInput[] | IncomeWhereInput
  OR?: IncomeWhereInput[] | IncomeWhereInput
  NOT?: IncomeWhereInput[] | IncomeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  amount?: Float
  amount_not?: Float
  amount_in?: Float[] | Float
  amount_not_in?: Float[] | Float
  amount_lt?: Float
  amount_lte?: Float
  amount_gt?: Float
  amount_gte?: Float
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  payDate?: DateTime
  payDate_not?: DateTime
  payDate_in?: DateTime[] | DateTime
  payDate_not_in?: DateTime[] | DateTime
  payDate_lt?: DateTime
  payDate_lte?: DateTime
  payDate_gt?: DateTime
  payDate_gte?: DateTime
  category?: CategoryWhereInput
  user?: UserWhereInput
}

export interface CategoryWhereUniqueInput {
  id?: ID_Input
}

export interface ExpenseUpsertWithWhereUniqueWithoutUserInput {
  where: ExpenseWhereUniqueInput
  update: ExpenseUpdateWithoutUserDataInput
  create: ExpenseCreateWithoutUserInput
}

export interface UserUpsertWithoutExpensesInput {
  update: UserUpdateWithoutExpensesDataInput
  create: UserCreateWithoutExpensesInput
}

export interface UserCreateWithoutIncomesInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
  expenses?: ExpenseCreateManyWithoutUserInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  author?: UserUpdateOneWithoutPostsInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
  expenses?: ExpenseUpdateManyWithoutUserInput
  incomes?: IncomeUpdateManyWithoutUserInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface ExpenseSubscriptionWhereInput {
  AND?: ExpenseSubscriptionWhereInput[] | ExpenseSubscriptionWhereInput
  OR?: ExpenseSubscriptionWhereInput[] | ExpenseSubscriptionWhereInput
  NOT?: ExpenseSubscriptionWhereInput[] | ExpenseSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ExpenseWhereInput
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  password?: String
  name?: String
  expenses?: ExpenseUpdateManyWithoutUserInput
  incomes?: IncomeUpdateManyWithoutUserInput
}

export interface ExpenseWhereUniqueInput {
  id?: ID_Input
}

export interface ExpenseUpdateManyWithoutUserInput {
  create?: ExpenseCreateWithoutUserInput[] | ExpenseCreateWithoutUserInput
  connect?: ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput
  disconnect?: ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput
  delete?: ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput
  update?: ExpenseUpdateWithWhereUniqueWithoutUserInput[] | ExpenseUpdateWithWhereUniqueWithoutUserInput
  upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput[] | ExpenseUpsertWithWhereUniqueWithoutUserInput
}

export interface UserUpdateOneWithoutExpensesInput {
  create?: UserCreateWithoutExpensesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutExpensesDataInput
  upsert?: UserUpsertWithoutExpensesInput
}

export interface CategoryUpdateDataInput {
  name?: String
}

export interface CategoryUpdateOneInput {
  create?: CategoryCreateInput
  connect?: CategoryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CategoryUpdateDataInput
  upsert?: CategoryUpsertNestedInput
}

export interface ExpenseUpdateWithoutUserDataInput {
  name?: String
  amount?: Float
  type?: String
  dueDate?: DateTime
  category?: CategoryUpdateOneInput
}

export interface ExpenseUpdateWithWhereUniqueWithoutUserInput {
  where: ExpenseWhereUniqueInput
  data: ExpenseUpdateWithoutUserDataInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface UserUpdateOneWithoutIncomesInput {
  create?: UserCreateWithoutIncomesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutIncomesDataInput
  upsert?: UserUpsertWithoutIncomesInput
}

export interface CategoryUpdateInput {
  name?: String
}

export interface CategorySubscriptionWhereInput {
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  NOT?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CategoryWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface CategoryPreviousValues {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  posts?: Post[]
  expenses?: Expense[]
  incomes?: Income[]
}

export interface CategorySubscriptionPayload {
  mutation: MutationType
  node?: Category
  updatedFields?: String[]
  previousValues?: CategoryPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CategoryEdge {
  node: Category
  cursor: String
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  author: User
}

export interface AggregateIncome {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * A connection to a list of items.

 */
export interface IncomeConnection {
  pageInfo: PageInfo
  edges: IncomeEdge[]
  aggregate: AggregateIncome
}

export interface IncomePreviousValues {
  id: ID_Output
  name: String
  amount: Float
  type: String
  payDate: DateTime
}

/*
 * An edge in a connection.

 */
export interface ExpenseEdge {
  node: Expense
  cursor: String
}

export interface Income extends Node {
  id: ID_Output
  category?: Category
  name: String
  amount: Float
  type: String
  payDate: DateTime
  user: User
}

export interface AggregateUser {
  count: Int
}

export interface IncomeSubscriptionPayload {
  mutation: MutationType
  node?: Income
  updatedFields?: String[]
  previousValues?: IncomePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

export interface AggregateCategory {
  count: Int
}

export interface Category extends Node {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface IncomeEdge {
  node: Income
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ExpenseConnection {
  pageInfo: PageInfo
  edges: ExpenseEdge[]
  aggregate: AggregateExpense
}

export interface ExpensePreviousValues {
  id: ID_Output
  name: String
  amount: Float
  type: String
  dueDate: DateTime
}

export interface ExpenseSubscriptionPayload {
  mutation: MutationType
  node?: Expense
  updatedFields?: String[]
  previousValues?: ExpensePreviousValues
}

export interface Expense extends Node {
  id: ID_Output
  category?: Category
  name: String
  amount: Float
  type: String
  dueDate: DateTime
  user: User
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateExpense {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CategoryConnection {
  pageInfo: PageInfo
  edges: CategoryEdge[]
  aggregate: AggregateCategory
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AggregatePost {
  count: Int
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string