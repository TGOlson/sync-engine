import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { PostHistoryCreateNestedManyWithoutPostInput } from "../inputs/PostHistoryCreateNestedManyWithoutPostInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateInput {
    id?: string | undefined;
    published: boolean;
    likes: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    postHistory?: PostHistoryCreateNestedManyWithoutPostInput | undefined;
    author: UserCreateNestedOneWithoutPostsInput;
    comments?: CommentCreateNestedManyWithoutPostInput | undefined;
}
