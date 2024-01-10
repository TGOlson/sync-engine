import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { PostHistoryCreateNestedManyWithoutPostInput } from "../inputs/PostHistoryCreateNestedManyWithoutPostInput";
export declare class PostCreateWithoutAuthorInput {
    id?: string | undefined;
    published: boolean;
    likes: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    postHistory?: PostHistoryCreateNestedManyWithoutPostInput | undefined;
    comments?: CommentCreateNestedManyWithoutPostInput | undefined;
}
