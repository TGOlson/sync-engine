import type { GraphQLResolveInfo } from "graphql";
import { GroupByPostHistoryArgs } from "./args/GroupByPostHistoryArgs";
import { PostHistoryGroupBy } from "../../outputs/PostHistoryGroupBy";
export declare class GroupByPostHistoryResolver {
    groupByPostHistory(ctx: any, info: GraphQLResolveInfo, args: GroupByPostHistoryArgs): Promise<PostHistoryGroupBy[]>;
}
