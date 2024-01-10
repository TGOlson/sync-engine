import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPostHistoryOrThrowArgs } from "./args/FindFirstPostHistoryOrThrowArgs";
import { PostHistory } from "../../../models/PostHistory";
export declare class FindFirstPostHistoryOrThrowResolver {
    findFirstPostHistoryOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPostHistoryOrThrowArgs): Promise<PostHistory | null>;
}
