import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutPostInput {
    id?: string | undefined;
    text: string;
    likes: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    author: UserCreateNestedOneWithoutCommentsInput;
}
