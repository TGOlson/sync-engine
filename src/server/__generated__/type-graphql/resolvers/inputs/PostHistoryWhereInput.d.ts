import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PostHistoryWhereInput {
    AND?: PostHistoryWhereInput[] | undefined;
    OR?: PostHistoryWhereInput[] | undefined;
    NOT?: PostHistoryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    content?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    post?: PostRelationFilter | undefined;
}
