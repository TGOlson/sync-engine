import { Comment } from "../models/Comment";
import { Post } from "../models/Post";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name: string;
    email: string;
    posts?: Post[];
    comments?: Comment[];
    createdAt: Date;
    updatedAt: Date;
    _count?: UserCount | null;
}
