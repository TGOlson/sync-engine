import { UserCreateOrConnectWithoutPostsInput } from "../inputs/UserCreateOrConnectWithoutPostsInput";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserUpdateToOneWithWhereWithoutPostsInput } from "../inputs/UserUpdateToOneWithWhereWithoutPostsInput";
import { UserUpsertWithoutPostsInput } from "../inputs/UserUpsertWithoutPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutPostsNestedInput {
    create?: UserCreateWithoutPostsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput | undefined;
    upsert?: UserUpsertWithoutPostsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutPostsInput | undefined;
}
