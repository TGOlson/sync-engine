import { Comment } from "../models/Comment";
import { PostHistory } from "../models/PostHistory";
import { User } from "../models/User";
import { PostCount } from "../resolvers/outputs/PostCount";
export declare class Post {
    id: string;
    published: boolean;
    postHistory?: PostHistory[];
    author?: User;
    authorId: string;
    comments?: Comment[];
    likes: number;
    createdAt: Date;
    updatedAt: Date;
    _count?: PostCount | null;
}
