import { PostCreateNestedOneWithoutPostHistoryInput } from "../inputs/PostCreateNestedOneWithoutPostHistoryInput";
export declare class PostHistoryCreateInput {
    id?: string | undefined;
    title: string;
    content: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    post: PostCreateNestedOneWithoutPostHistoryInput;
}
