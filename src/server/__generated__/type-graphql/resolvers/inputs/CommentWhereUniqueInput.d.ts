import { CommentWhereInput } from "../inputs/CommentWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class CommentWhereUniqueInput {
    id?: string | undefined;
    AND?: CommentWhereInput[] | undefined;
    OR?: CommentWhereInput[] | undefined;
    NOT?: CommentWhereInput[] | undefined;
    text?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    likes?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    author?: UserRelationFilter | undefined;
    post?: PostRelationFilter | undefined;
}
