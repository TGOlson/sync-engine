import { PostHistoryCreateInput } from "../../../inputs/PostHistoryCreateInput";
import { PostHistoryUpdateInput } from "../../../inputs/PostHistoryUpdateInput";
import { PostHistoryWhereUniqueInput } from "../../../inputs/PostHistoryWhereUniqueInput";
export declare class UpsertOnePostHistoryArgs {
    where: PostHistoryWhereUniqueInput;
    create: PostHistoryCreateInput;
    update: PostHistoryUpdateInput;
}
