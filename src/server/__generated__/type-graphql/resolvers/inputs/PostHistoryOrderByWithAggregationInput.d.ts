import { PostHistoryCountOrderByAggregateInput } from "../inputs/PostHistoryCountOrderByAggregateInput";
import { PostHistoryMaxOrderByAggregateInput } from "../inputs/PostHistoryMaxOrderByAggregateInput";
import { PostHistoryMinOrderByAggregateInput } from "../inputs/PostHistoryMinOrderByAggregateInput";
export declare class PostHistoryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: PostHistoryCountOrderByAggregateInput | undefined;
    _max?: PostHistoryMaxOrderByAggregateInput | undefined;
    _min?: PostHistoryMinOrderByAggregateInput | undefined;
}
