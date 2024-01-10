import { PostHistoryCountAggregate } from "../outputs/PostHistoryCountAggregate";
import { PostHistoryMaxAggregate } from "../outputs/PostHistoryMaxAggregate";
import { PostHistoryMinAggregate } from "../outputs/PostHistoryMinAggregate";
export declare class AggregatePostHistory {
    _count: PostHistoryCountAggregate | null;
    _min: PostHistoryMinAggregate | null;
    _max: PostHistoryMaxAggregate | null;
}
