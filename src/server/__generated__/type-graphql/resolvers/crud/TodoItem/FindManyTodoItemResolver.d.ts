import type { GraphQLResolveInfo } from "graphql";
import { FindManyTodoItemArgs } from "./args/FindManyTodoItemArgs";
import { TodoItem } from "../../../models/TodoItem";
export declare class FindManyTodoItemResolver {
    todoItems(ctx: any, info: GraphQLResolveInfo, args: FindManyTodoItemArgs): Promise<TodoItem[]>;
}
