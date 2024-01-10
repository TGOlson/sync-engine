import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { PostHistoryOrderByRelationAggregateInput } from "../inputs/PostHistoryOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class PostOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    likes?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    postHistory?: PostHistoryOrderByRelationAggregateInput | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    comments?: CommentOrderByRelationAggregateInput | undefined;
}
