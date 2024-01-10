import { PostCreateOrConnectWithoutPostHistoryInput } from "../inputs/PostCreateOrConnectWithoutPostHistoryInput";
import { PostCreateWithoutPostHistoryInput } from "../inputs/PostCreateWithoutPostHistoryInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedOneWithoutPostHistoryInput {
    create?: PostCreateWithoutPostHistoryInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutPostHistoryInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
}
