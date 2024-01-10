import { TodoItemCountAggregate } from "../outputs/TodoItemCountAggregate";
import { TodoItemMaxAggregate } from "../outputs/TodoItemMaxAggregate";
import { TodoItemMinAggregate } from "../outputs/TodoItemMinAggregate";
export declare class AggregateTodoItem {
    _count: TodoItemCountAggregate | null;
    _min: TodoItemMinAggregate | null;
    _max: TodoItemMaxAggregate | null;
}
