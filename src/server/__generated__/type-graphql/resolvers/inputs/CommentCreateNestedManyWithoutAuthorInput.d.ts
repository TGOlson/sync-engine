import { CommentCreateOrConnectWithoutAuthorInput } from "../inputs/CommentCreateOrConnectWithoutAuthorInput";
import { CommentCreateWithoutAuthorInput } from "../inputs/CommentCreateWithoutAuthorInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedManyWithoutAuthorInput {
    create?: CommentCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput[] | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
}
