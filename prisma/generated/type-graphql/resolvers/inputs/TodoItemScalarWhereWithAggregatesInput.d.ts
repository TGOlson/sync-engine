import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TodoItemScalarWhereWithAggregatesInput {
    AND?: TodoItemScalarWhereWithAggregatesInput[] | undefined;
    OR?: TodoItemScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TodoItemScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    text?: StringWithAggregatesFilter | undefined;
    complete?: BoolWithAggregatesFilter | undefined;
    hidden?: BoolWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}