import { TodoItemCountOrderByAggregateInput } from "../inputs/TodoItemCountOrderByAggregateInput";
import { TodoItemMaxOrderByAggregateInput } from "../inputs/TodoItemMaxOrderByAggregateInput";
import { TodoItemMinOrderByAggregateInput } from "../inputs/TodoItemMinOrderByAggregateInput";
export declare class TodoItemOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    complete?: "asc" | "desc" | undefined;
    hidden?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: TodoItemCountOrderByAggregateInput | undefined;
    _max?: TodoItemMaxOrderByAggregateInput | undefined;
    _min?: TodoItemMinOrderByAggregateInput | undefined;
}
