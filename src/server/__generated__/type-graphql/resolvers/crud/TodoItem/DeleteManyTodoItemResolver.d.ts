import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTodoItemArgs } from "./args/DeleteManyTodoItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTodoItemResolver {
    deleteManyTodoItem(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTodoItemArgs): Promise<AffectedRowsOutput>;
}
