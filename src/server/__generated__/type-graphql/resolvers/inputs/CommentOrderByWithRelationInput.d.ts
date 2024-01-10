import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class CommentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    likes?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    post?: PostOrderByWithRelationInput | undefined;
}
