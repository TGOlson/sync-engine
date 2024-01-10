import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePostHistoryArgs } from "./args/UpsertOnePostHistoryArgs";
import { PostHistory } from "../../../models/PostHistory";
export declare class UpsertOnePostHistoryResolver {
    upsertOnePostHistory(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePostHistoryArgs): Promise<PostHistory>;
}
