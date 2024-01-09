import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTodoItemArgs } from "./args/UpdateManyTodoItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTodoItemResolver {
    updateManyTodoItem(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTodoItemArgs): Promise<AffectedRowsOutput>;
}
