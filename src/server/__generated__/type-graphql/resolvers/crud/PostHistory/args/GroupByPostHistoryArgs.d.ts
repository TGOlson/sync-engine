import { PostHistoryOrderByWithAggregationInput } from "../../../inputs/PostHistoryOrderByWithAggregationInput";
import { PostHistoryScalarWhereWithAggregatesInput } from "../../../inputs/PostHistoryScalarWhereWithAggregatesInput";
import { PostHistoryWhereInput } from "../../../inputs/PostHistoryWhereInput";
export declare class GroupByPostHistoryArgs {
    where?: PostHistoryWhereInput | undefined;
    orderBy?: PostHistoryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "content" | "postId" | "createdAt" | "updatedAt">;
    having?: PostHistoryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
