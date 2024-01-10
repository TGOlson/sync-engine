import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePostHistoryArgs } from "./args/UpdateOnePostHistoryArgs";
import { PostHistory } from "../../../models/PostHistory";
export declare class UpdateOnePostHistoryResolver {
    updateOnePostHistory(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePostHistoryArgs): Promise<PostHistory | null>;
}
