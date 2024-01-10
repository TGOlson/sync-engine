import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyPostHistoryArgs } from "./args/UpdateManyPostHistoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPostHistoryResolver {
    updateManyPostHistory(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPostHistoryArgs): Promise<AffectedRowsOutput>;
}
