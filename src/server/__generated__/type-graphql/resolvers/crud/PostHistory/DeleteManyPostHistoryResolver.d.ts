import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyPostHistoryArgs } from "./args/DeleteManyPostHistoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPostHistoryResolver {
    deleteManyPostHistory(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPostHistoryArgs): Promise<AffectedRowsOutput>;
}
