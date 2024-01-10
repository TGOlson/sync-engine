import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
export declare class UserCreateWithoutCommentsInput {
    id?: string | undefined;
    name: string;
    email: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}
