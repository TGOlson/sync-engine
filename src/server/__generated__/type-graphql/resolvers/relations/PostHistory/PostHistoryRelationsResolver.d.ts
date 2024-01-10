import type { GraphQLResolveInfo } from "graphql";
import { Post } from "../../../models/Post";
import { PostHistory } from "../../../models/PostHistory";
export declare class PostHistoryRelationsResolver {
    post(postHistory: PostHistory, ctx: any, info: GraphQLResolveInfo): Promise<Post>;
}
