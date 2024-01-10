import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
export declare class CommentRelationsResolver {
    author(comment: Comment, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    post(comment: Comment, ctx: any, info: GraphQLResolveInfo): Promise<Post>;
}
