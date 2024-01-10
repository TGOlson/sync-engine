import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTodoItemArgs } from "./args/DeleteOneTodoItemArgs";
import { TodoItem } from "../../../models/TodoItem";
export declare class DeleteOneTodoItemResolver {
    deleteOneTodoItem(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTodoItemArgs): Promise<TodoItem | null>;
}
