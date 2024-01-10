import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
export declare class UserCreateInput {
    id?: string | undefined;
    name: string;
    email: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;
}
