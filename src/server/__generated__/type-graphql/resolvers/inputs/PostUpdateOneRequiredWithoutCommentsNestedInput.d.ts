import { PostCreateOrConnectWithoutCommentsInput } from "../inputs/PostCreateOrConnectWithoutCommentsInput";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateToOneWithWhereWithoutCommentsInput } from "../inputs/PostUpdateToOneWithWhereWithoutCommentsInput";
import { PostUpsertWithoutCommentsInput } from "../inputs/PostUpsertWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateOneRequiredWithoutCommentsNestedInput {
    create?: PostCreateWithoutCommentsInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput | undefined;
    upsert?: PostUpsertWithoutCommentsInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
    update?: PostUpdateToOneWithWhereWithoutCommentsInput | undefined;
}
