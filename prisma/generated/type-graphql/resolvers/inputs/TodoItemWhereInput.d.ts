import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TodoItemWhereInput {
    AND?: TodoItemWhereInput[] | undefined;
    OR?: TodoItemWhereInput[] | undefined;
    NOT?: TodoItemWhereInput[] | undefined;
    id?: IntFilter | undefined;
    text?: StringFilter | undefined;
    complete?: BoolFilter | undefined;
    hidden?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
