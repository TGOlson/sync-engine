import type { GraphQLResolveInfo } from "graphql";
import { AggregateTodoItemArgs } from "./args/AggregateTodoItemArgs";
import { AggregateTodoItem } from "../../outputs/AggregateTodoItem";
export declare class AggregateTodoItemResolver {
    aggregateTodoItem(ctx: any, info: GraphQLResolveInfo, args: AggregateTodoItemArgs): Promise<AggregateTodoItem>;
}
