import { PostHistoryOrderByWithRelationInput } from "../../../inputs/PostHistoryOrderByWithRelationInput";
import { PostHistoryWhereInput } from "../../../inputs/PostHistoryWhereInput";
import { PostHistoryWhereUniqueInput } from "../../../inputs/PostHistoryWhereUniqueInput";
export declare class FindFirstPostHistoryOrThrowArgs {
    where?: PostHistoryWhereInput | undefined;
    orderBy?: PostHistoryOrderByWithRelationInput[] | undefined;
    cursor?: PostHistoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "content" | "postId" | "createdAt" | "updatedAt"> | undefined;
}
