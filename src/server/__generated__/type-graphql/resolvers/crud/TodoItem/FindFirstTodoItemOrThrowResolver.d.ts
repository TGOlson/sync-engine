import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTodoItemOrThrowArgs } from "./args/FindFirstTodoItemOrThrowArgs";
import { TodoItem } from "../../../models/TodoItem";
export declare class FindFirstTodoItemOrThrowResolver {
    findFirstTodoItemOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTodoItemOrThrowArgs): Promise<TodoItem | null>;
}
