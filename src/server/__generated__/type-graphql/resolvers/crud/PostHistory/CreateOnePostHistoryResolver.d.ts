import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePostHistoryArgs } from "./args/CreateOnePostHistoryArgs";
import { PostHistory } from "../../../models/PostHistory";
export declare class CreateOnePostHistoryResolver {
    createOnePostHistory(ctx: any, info: GraphQLResolveInfo, args: CreateOnePostHistoryArgs): Promise<PostHistory>;
}
