import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CommentScalarWhereInput {
    AND?: CommentScalarWhereInput[] | undefined;
    OR?: CommentScalarWhereInput[] | undefined;
    NOT?: CommentScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    text?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    likes?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
