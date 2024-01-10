import { PostHistoryCreateNestedManyWithoutPostInput } from "../inputs/PostHistoryCreateNestedManyWithoutPostInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateWithoutCommentsInput {
    id?: string | undefined;
    published: boolean;
    likes: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    postHistory?: PostHistoryCreateNestedManyWithoutPostInput | undefined;
    author: UserCreateNestedOneWithoutPostsInput;
}
