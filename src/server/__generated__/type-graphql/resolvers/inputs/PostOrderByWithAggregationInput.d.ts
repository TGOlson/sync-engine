import { PostAvgOrderByAggregateInput } from "../inputs/PostAvgOrderByAggregateInput";
import { PostCountOrderByAggregateInput } from "../inputs/PostCountOrderByAggregateInput";
import { PostMaxOrderByAggregateInput } from "../inputs/PostMaxOrderByAggregateInput";
import { PostMinOrderByAggregateInput } from "../inputs/PostMinOrderByAggregateInput";
import { PostSumOrderByAggregateInput } from "../inputs/PostSumOrderByAggregateInput";
export declare class PostOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    likes?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: PostCountOrderByAggregateInput | undefined;
    _avg?: PostAvgOrderByAggregateInput | undefined;
    _max?: PostMaxOrderByAggregateInput | undefined;
    _min?: PostMinOrderByAggregateInput | undefined;
    _sum?: PostSumOrderByAggregateInput | undefined;
}
