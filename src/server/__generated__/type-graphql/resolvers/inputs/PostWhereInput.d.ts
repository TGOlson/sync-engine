import { BoolFilter } from "../inputs/BoolFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostHistoryListRelationFilter } from "../inputs/PostHistoryListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PostWhereInput {
    AND?: PostWhereInput[] | undefined;
    OR?: PostWhereInput[] | undefined;
    NOT?: PostWhereInput[] | undefined;
    id?: StringFilter | undefined;
    published?: BoolFilter | undefined;
    authorId?: StringFilter | undefined;
    likes?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    postHistory?: PostHistoryListRelationFilter | undefined;
    author?: UserRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
}
