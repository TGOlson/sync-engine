import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePostHistoryOrThrowArgs } from "./args/FindUniquePostHistoryOrThrowArgs";
import { PostHistory } from "../../../models/PostHistory";
export declare class FindUniquePostHistoryOrThrowResolver {
    getPostHistory(ctx: any, info: GraphQLResolveInfo, args: FindUniquePostHistoryOrThrowArgs): Promise<PostHistory | null>;
}
