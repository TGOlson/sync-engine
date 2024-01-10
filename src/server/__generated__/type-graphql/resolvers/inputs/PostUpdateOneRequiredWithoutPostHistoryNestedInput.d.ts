import { PostCreateOrConnectWithoutPostHistoryInput } from "../inputs/PostCreateOrConnectWithoutPostHistoryInput";
import { PostCreateWithoutPostHistoryInput } from "../inputs/PostCreateWithoutPostHistoryInput";
import { PostUpdateToOneWithWhereWithoutPostHistoryInput } from "../inputs/PostUpdateToOneWithWhereWithoutPostHistoryInput";
import { PostUpsertWithoutPostHistoryInput } from "../inputs/PostUpsertWithoutPostHistoryInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateOneRequiredWithoutPostHistoryNestedInput {
    create?: PostCreateWithoutPostHistoryInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutPostHistoryInput | undefined;
    upsert?: PostUpsertWithoutPostHistoryInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
    update?: PostUpdateToOneWithWhereWithoutPostHistoryInput | undefined;
}
