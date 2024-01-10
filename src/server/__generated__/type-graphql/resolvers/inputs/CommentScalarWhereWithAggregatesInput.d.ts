import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CommentScalarWhereWithAggregatesInput {
    AND?: CommentScalarWhereWithAggregatesInput[] | undefined;
    OR?: CommentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CommentScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    text?: StringWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
    postId?: StringWithAggregatesFilter | undefined;
    likes?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
