import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTodoItemArgs } from "./args/FindFirstTodoItemArgs";
import { TodoItem } from "../../../models/TodoItem";
export declare class FindFirstTodoItemResolver {
    findFirstTodoItem(ctx: any, info: GraphQLResolveInfo, args: FindFirstTodoItemArgs): Promise<TodoItem | null>;
}
