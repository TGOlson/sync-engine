import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateWithoutPostHistoryInput {
    id?: string | undefined;
    published: boolean;
    likes: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    author: UserCreateNestedOneWithoutPostsInput;
    comments?: CommentCreateNestedManyWithoutPostInput | undefined;
}
