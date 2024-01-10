import { UserCountCommentsArgs } from "./args/UserCountCommentsArgs";
import { UserCountPostsArgs } from "./args/UserCountPostsArgs";
export declare class UserCount {
    posts: number;
    comments: number;
    getPosts(root: UserCount, args: UserCountPostsArgs): number;
    getComments(root: UserCount, args: UserCountCommentsArgs): number;
}
