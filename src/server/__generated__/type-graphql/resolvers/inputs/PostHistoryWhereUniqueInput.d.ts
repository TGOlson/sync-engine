import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostHistoryWhereInput } from "../inputs/PostHistoryWhereInput";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PostHistoryWhereUniqueInput {
    id?: string | undefined;
    AND?: PostHistoryWhereInput[] | undefined;
    OR?: PostHistoryWhereInput[] | undefined;
    NOT?: PostHistoryWhereInput[] | undefined;
    title?: StringFilter | undefined;
    content?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    post?: PostRelationFilter | undefined;
}
