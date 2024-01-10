import { Post } from "../models/Post";
import { User } from "../models/User";
export declare class Comment {
    id: string;
    text: string;
    author?: User;
    authorId: string;
    post?: Post;
    postId: string;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
}
