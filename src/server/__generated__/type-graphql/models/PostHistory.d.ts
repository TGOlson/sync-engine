import { Post } from "../models/Post";
export declare class PostHistory {
    id: string;
    title: string;
    content: string;
    post?: Post;
    postId: string;
    createdAt: Date;
    updatedAt: Date;
}
