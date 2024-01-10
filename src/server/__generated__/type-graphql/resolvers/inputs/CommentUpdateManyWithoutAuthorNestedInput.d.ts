import { CommentCreateOrConnectWithoutAuthorInput } from "../inputs/CommentCreateOrConnectWithoutAuthorInput";
import { CommentCreateWithoutAuthorInput } from "../inputs/CommentCreateWithoutAuthorInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutAuthorInput } from "../inputs/CommentUpdateManyWithWhereWithoutAuthorInput";
import { CommentUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutAuthorInput";
import { CommentUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutAuthorInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentUpdateManyWithoutAuthorNestedInput {
    create?: CommentCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    set?: CommentWhereUniqueInput[] | undefined;
    disconnect?: CommentWhereUniqueInput[] | undefined;
    delete?: CommentWhereUniqueInput[] | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: CommentScalarWhereInput[] | undefined;
}
