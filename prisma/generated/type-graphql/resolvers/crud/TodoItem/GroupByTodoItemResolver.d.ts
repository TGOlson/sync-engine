import type { GraphQLResolveInfo } from "graphql";
import { GroupByTodoItemArgs } from "./args/GroupByTodoItemArgs";
import { TodoItemGroupBy } from "../../outputs/TodoItemGroupBy";
export declare class GroupByTodoItemResolver {
    groupByTodoItem(ctx: any, info: GraphQLResolveInfo, args: GroupByTodoItemArgs): Promise<TodoItemGroupBy[]>;
}
