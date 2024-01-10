import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PostScalarWhereInput {
    AND?: PostScalarWhereInput[] | undefined;
    OR?: PostScalarWhereInput[] | undefined;
    NOT?: PostScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    published?: BoolFilter | undefined;
    authorId?: StringFilter | undefined;
    likes?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
