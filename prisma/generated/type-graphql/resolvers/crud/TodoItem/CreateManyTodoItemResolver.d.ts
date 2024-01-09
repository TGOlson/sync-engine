import type { GraphQLResolveInfo } from "graphql";
import { CreateManyTodoItemArgs } from "./args/CreateManyTodoItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTodoItemResolver {
    createManyTodoItem(ctx: any, info: GraphQLResolveInfo, args: CreateManyTodoItemArgs): Promise<AffectedRowsOutput>;
}
