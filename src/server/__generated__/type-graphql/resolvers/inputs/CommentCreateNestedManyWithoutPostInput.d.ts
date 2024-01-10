import { CommentCreateOrConnectWithoutPostInput } from "../inputs/CommentCreateOrConnectWithoutPostInput";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedManyWithoutPostInput {
    create?: CommentCreateWithoutPostInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput[] | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
}
