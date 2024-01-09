import { TodoItemOrderByWithAggregationInput } from "../../../inputs/TodoItemOrderByWithAggregationInput";
import { TodoItemScalarWhereWithAggregatesInput } from "../../../inputs/TodoItemScalarWhereWithAggregatesInput";
import { TodoItemWhereInput } from "../../../inputs/TodoItemWhereInput";
export declare class GroupByTodoItemArgs {
    where?: TodoItemWhereInput | undefined;
    orderBy?: TodoItemOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "text" | "complete" | "hidden" | "createdAt" | "updatedAt">;
    having?: TodoItemScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
