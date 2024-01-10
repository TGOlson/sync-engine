import { PostHistoryCountAggregate } from "../outputs/PostHistoryCountAggregate";
import { PostHistoryMaxAggregate } from "../outputs/PostHistoryMaxAggregate";
import { PostHistoryMinAggregate } from "../outputs/PostHistoryMinAggregate";
export declare class PostHistoryGroupBy {
    id: string;
    title: string;
    content: string;
    postId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PostHistoryCountAggregate | null;
    _min: PostHistoryMinAggregate | null;
    _max: PostHistoryMaxAggregate | null;
}
