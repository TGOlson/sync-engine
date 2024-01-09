import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTodoItemArgs } from "./args/FindUniqueTodoItemArgs";
import { TodoItem } from "../../../models/TodoItem";
export declare class FindUniqueTodoItemResolver {
    todoItem(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTodoItemArgs): Promise<TodoItem | null>;
}
