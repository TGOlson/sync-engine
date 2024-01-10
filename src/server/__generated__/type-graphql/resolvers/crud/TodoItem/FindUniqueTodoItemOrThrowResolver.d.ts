import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTodoItemOrThrowArgs } from "./args/FindUniqueTodoItemOrThrowArgs";
import { TodoItem } from "../../../models/TodoItem";
export declare class FindUniqueTodoItemOrThrowResolver {
    getTodoItem(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTodoItemOrThrowArgs): Promise<TodoItem | null>;
}
