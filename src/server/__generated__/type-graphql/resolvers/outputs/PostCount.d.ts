import { PostCountCommentsArgs } from "./args/PostCountCommentsArgs";
import { PostCountPostHistoryArgs } from "./args/PostCountPostHistoryArgs";
export declare class PostCount {
    postHistory: number;
    comments: number;
    getPostHistory(root: PostCount, args: PostCountPostHistoryArgs): number;
    getComments(root: PostCount, args: PostCountCommentsArgs): number;
}
