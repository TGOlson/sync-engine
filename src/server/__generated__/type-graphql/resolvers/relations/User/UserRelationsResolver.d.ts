import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
export declare class UserRelationsResolver {
    posts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserPostsArgs): Promise<Post[]>;
    comments(user: User, ctx: any, info: GraphQLResolveInfo, args: UserCommentsArgs): Promise<Comment[]>;
}
