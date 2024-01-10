import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateWithoutCommentsInput } from "../inputs/PostUpdateWithoutCommentsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";
export declare class PostUpsertWithoutCommentsInput {
    update: PostUpdateWithoutCommentsInput;
    create: PostCreateWithoutCommentsInput;
    where?: PostWhereInput | undefined;
}
