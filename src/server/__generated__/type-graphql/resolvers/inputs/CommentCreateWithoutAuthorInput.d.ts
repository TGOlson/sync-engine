import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutAuthorInput {
    id?: string | undefined;
    text: string;
    likes: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    post: PostCreateNestedOneWithoutCommentsInput;
}
