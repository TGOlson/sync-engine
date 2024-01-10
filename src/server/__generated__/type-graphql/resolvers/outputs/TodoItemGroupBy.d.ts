import { TodoItemCountAggregate } from "../outputs/TodoItemCountAggregate";
import { TodoItemMaxAggregate } from "../outputs/TodoItemMaxAggregate";
import { TodoItemMinAggregate } from "../outputs/TodoItemMinAggregate";
export declare class TodoItemGroupBy {
    id: string;
    text: string;
    complete: boolean;
    hidden: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TodoItemCountAggregate | null;
    _min: TodoItemMinAggregate | null;
    _max: TodoItemMaxAggregate | null;
}
