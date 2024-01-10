import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateInput {
    id?: string | undefined;
    text: string;
    likes: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    author: UserCreateNestedOneWithoutCommentsInput;
    post: PostCreateNestedOneWithoutCommentsInput;
}
