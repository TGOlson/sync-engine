import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTodoItemArgs } from "./args/UpsertOneTodoItemArgs";
import { TodoItem } from "../../../models/TodoItem";
export declare class UpsertOneTodoItemResolver {
    upsertOneTodoItem(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTodoItemArgs): Promise<TodoItem>;
}
