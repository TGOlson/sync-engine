import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TodoItemWhereInput } from "../inputs/TodoItemWhereInput";
export declare class TodoItemWhereUniqueInput {
    id?: number | undefined;
    AND?: TodoItemWhereInput[] | undefined;
    OR?: TodoItemWhereInput[] | undefined;
    NOT?: TodoItemWhereInput[] | undefined;
    text?: StringFilter | undefined;
    complete?: BoolFilter | undefined;
    hidden?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
