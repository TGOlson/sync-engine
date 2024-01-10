import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PostHistoryScalarWhereInput {
    AND?: PostHistoryScalarWhereInput[] | undefined;
    OR?: PostHistoryScalarWhereInput[] | undefined;
    NOT?: PostHistoryScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    content?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
