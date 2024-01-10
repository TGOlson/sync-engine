import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
export declare class UserCreateWithoutPostsInput {
    id?: string | undefined;
    name: string;
    email: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;
}
