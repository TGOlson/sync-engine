import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PostHistoryScalarWhereWithAggregatesInput {
    AND?: PostHistoryScalarWhereWithAggregatesInput[] | undefined;
    OR?: PostHistoryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PostHistoryScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    content?: StringWithAggregatesFilter | undefined;
    postId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
