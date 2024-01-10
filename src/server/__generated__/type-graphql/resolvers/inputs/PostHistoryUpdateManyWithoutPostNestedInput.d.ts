import { PostHistoryCreateOrConnectWithoutPostInput } from "../inputs/PostHistoryCreateOrConnectWithoutPostInput";
import { PostHistoryCreateWithoutPostInput } from "../inputs/PostHistoryCreateWithoutPostInput";
import { PostHistoryScalarWhereInput } from "../inputs/PostHistoryScalarWhereInput";
import { PostHistoryUpdateManyWithWhereWithoutPostInput } from "../inputs/PostHistoryUpdateManyWithWhereWithoutPostInput";
import { PostHistoryUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PostHistoryUpdateWithWhereUniqueWithoutPostInput";
import { PostHistoryUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PostHistoryUpsertWithWhereUniqueWithoutPostInput";
import { PostHistoryWhereUniqueInput } from "../inputs/PostHistoryWhereUniqueInput";
export declare class PostHistoryUpdateManyWithoutPostNestedInput {
    create?: PostHistoryCreateWithoutPostInput[] | undefined;
    connectOrCreate?: PostHistoryCreateOrConnectWithoutPostInput[] | undefined;
    upsert?: PostHistoryUpsertWithWhereUniqueWithoutPostInput[] | undefined;
    set?: PostHistoryWhereUniqueInput[] | undefined;
    disconnect?: PostHistoryWhereUniqueInput[] | undefined;
    delete?: PostHistoryWhereUniqueInput[] | undefined;
    connect?: PostHistoryWhereUniqueInput[] | undefined;
    update?: PostHistoryUpdateWithWhereUniqueWithoutPostInput[] | undefined;
    updateMany?: PostHistoryUpdateManyWithWhereWithoutPostInput[] | undefined;
    deleteMany?: PostHistoryScalarWhereInput[] | undefined;
}
