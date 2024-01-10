import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTodoItemArgs } from "./args/CreateOneTodoItemArgs";
import { TodoItem } from "../../../models/TodoItem";
export declare class CreateOneTodoItemResolver {
    createOneTodoItem(ctx: any, info: GraphQLResolveInfo, args: CreateOneTodoItemArgs): Promise<TodoItem>;
}
