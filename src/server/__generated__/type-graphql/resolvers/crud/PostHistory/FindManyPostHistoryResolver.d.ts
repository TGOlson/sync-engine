import type { GraphQLResolveInfo } from "graphql";
import { FindManyPostHistoryArgs } from "./args/FindManyPostHistoryArgs";
import { PostHistory } from "../../../models/PostHistory";
export declare class FindManyPostHistoryResolver {
    postHistories(ctx: any, info: GraphQLResolveInfo, args: FindManyPostHistoryArgs): Promise<PostHistory[]>;
}
