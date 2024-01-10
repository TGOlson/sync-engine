import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPostHistoryArgs } from "./args/FindFirstPostHistoryArgs";
import { PostHistory } from "../../../models/PostHistory";
export declare class FindFirstPostHistoryResolver {
    findFirstPostHistory(ctx: any, info: GraphQLResolveInfo, args: FindFirstPostHistoryArgs): Promise<PostHistory | null>;
}
