import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
export declare class PostHistoryOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    post?: PostOrderByWithRelationInput | undefined;
}
