import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { PostHistory } from "../../../models/PostHistory";
import { User } from "../../../models/User";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
import { PostPostHistoryArgs } from "./args/PostPostHistoryArgs";
export declare class PostRelationsResolver {
    postHistory(post: Post, ctx: any, info: GraphQLResolveInfo, args: PostPostHistoryArgs): Promise<PostHistory[]>;
    author(post: Post, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    comments(post: Post, ctx: any, info: GraphQLResolveInfo, args: PostCommentsArgs): Promise<Comment[]>;
}
