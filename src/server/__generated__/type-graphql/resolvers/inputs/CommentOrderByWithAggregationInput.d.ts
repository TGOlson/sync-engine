import { CommentAvgOrderByAggregateInput } from "../inputs/CommentAvgOrderByAggregateInput";
import { CommentCountOrderByAggregateInput } from "../inputs/CommentCountOrderByAggregateInput";
import { CommentMaxOrderByAggregateInput } from "../inputs/CommentMaxOrderByAggregateInput";
import { CommentMinOrderByAggregateInput } from "../inputs/CommentMinOrderByAggregateInput";
import { CommentSumOrderByAggregateInput } from "../inputs/CommentSumOrderByAggregateInput";
export declare class CommentOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    likes?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: CommentCountOrderByAggregateInput | undefined;
    _avg?: CommentAvgOrderByAggregateInput | undefined;
    _max?: CommentMaxOrderByAggregateInput | undefined;
    _min?: CommentMinOrderByAggregateInput | undefined;
    _sum?: CommentSumOrderByAggregateInput | undefined;
}
