import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTodoItemArgs } from "./args/UpdateOneTodoItemArgs";
import { TodoItem } from "../../../models/TodoItem";
export declare class UpdateOneTodoItemResolver {
    updateOneTodoItem(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTodoItemArgs): Promise<TodoItem | null>;
}
