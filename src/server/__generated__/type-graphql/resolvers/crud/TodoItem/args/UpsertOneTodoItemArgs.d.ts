import { TodoItemCreateInput } from "../../../inputs/TodoItemCreateInput";
import { TodoItemUpdateInput } from "../../../inputs/TodoItemUpdateInput";
import { TodoItemWhereUniqueInput } from "../../../inputs/TodoItemWhereUniqueInput";
export declare class UpsertOneTodoItemArgs {
    where: TodoItemWhereUniqueInput;
    create: TodoItemCreateInput;
    update: TodoItemUpdateInput;
}
