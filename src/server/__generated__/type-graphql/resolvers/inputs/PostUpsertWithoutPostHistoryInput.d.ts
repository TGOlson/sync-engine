import { PostCreateWithoutPostHistoryInput } from "../inputs/PostCreateWithoutPostHistoryInput";
import { PostUpdateWithoutPostHistoryInput } from "../inputs/PostUpdateWithoutPostHistoryInput";
import { PostWhereInput } from "../inputs/PostWhereInput";
export declare class PostUpsertWithoutPostHistoryInput {
    update: PostUpdateWithoutPostHistoryInput;
    create: PostCreateWithoutPostHistoryInput;
    where?: PostWhereInput | undefined;
}
