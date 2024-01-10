import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    name?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    posts?: PostListRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
}
