import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePostHistoryArgs } from "./args/FindUniquePostHistoryArgs";
import { PostHistory } from "../../../models/PostHistory";
export declare class FindUniquePostHistoryResolver {
    postHistory(ctx: any, info: GraphQLResolveInfo, args: FindUniquePostHistoryArgs): Promise<PostHistory | null>;
}
