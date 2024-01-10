import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePostHistoryArgs } from "./args/DeleteOnePostHistoryArgs";
import { PostHistory } from "../../../models/PostHistory";
export declare class DeleteOnePostHistoryResolver {
    deleteOnePostHistory(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePostHistoryArgs): Promise<PostHistory | null>;
}
