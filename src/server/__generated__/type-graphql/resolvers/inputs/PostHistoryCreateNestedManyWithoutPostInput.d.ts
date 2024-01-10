import { PostHistoryCreateOrConnectWithoutPostInput } from "../inputs/PostHistoryCreateOrConnectWithoutPostInput";
import { PostHistoryCreateWithoutPostInput } from "../inputs/PostHistoryCreateWithoutPostInput";
import { PostHistoryWhereUniqueInput } from "../inputs/PostHistoryWhereUniqueInput";
export declare class PostHistoryCreateNestedManyWithoutPostInput {
    create?: PostHistoryCreateWithoutPostInput[] | undefined;
    connectOrCreate?: PostHistoryCreateOrConnectWithoutPostInput[] | undefined;
    connect?: PostHistoryWhereUniqueInput[] | undefined;
}
