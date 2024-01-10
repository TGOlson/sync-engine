import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostHistoryArgs } from "./args/AggregatePostHistoryArgs";
import { AggregatePostHistory } from "../../outputs/AggregatePostHistory";
export declare class AggregatePostHistoryResolver {
    aggregatePostHistory(ctx: any, info: GraphQLResolveInfo, args: AggregatePostHistoryArgs): Promise<AggregatePostHistory>;
}
