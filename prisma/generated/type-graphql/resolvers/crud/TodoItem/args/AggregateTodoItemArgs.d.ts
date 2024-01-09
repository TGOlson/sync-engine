import { TodoItemOrderByWithRelationInput } from "../../../inputs/TodoItemOrderByWithRelationInput";
import { TodoItemWhereInput } from "../../../inputs/TodoItemWhereInput";
import { TodoItemWhereUniqueInput } from "../../../inputs/TodoItemWhereUniqueInput";
export declare class AggregateTodoItemArgs {
    where?: TodoItemWhereInput | undefined;
    orderBy?: TodoItemOrderByWithRelationInput[] | undefined;
    cursor?: TodoItemWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
