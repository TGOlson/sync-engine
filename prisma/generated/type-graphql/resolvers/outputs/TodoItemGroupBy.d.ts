import { TodoItemAvgAggregate } from "../outputs/TodoItemAvgAggregate";
import { TodoItemCountAggregate } from "../outputs/TodoItemCountAggregate";
import { TodoItemMaxAggregate } from "../outputs/TodoItemMaxAggregate";
import { TodoItemMinAggregate } from "../outputs/TodoItemMinAggregate";
import { TodoItemSumAggregate } from "../outputs/TodoItemSumAggregate";
export declare class TodoItemGroupBy {
    id: number;
    text: string;
    complete: boolean;
    hidden: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TodoItemCountAggregate | null;
    _avg: TodoItemAvgAggregate | null;
    _sum: TodoItemSumAggregate | null;
    _min: TodoItemMinAggregate | null;
    _max: TodoItemMaxAggregate | null;
}
