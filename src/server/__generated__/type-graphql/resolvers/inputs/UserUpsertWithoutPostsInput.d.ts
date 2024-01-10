import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserUpdateWithoutPostsInput } from "../inputs/UserUpdateWithoutPostsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutPostsInput {
    update: UserUpdateWithoutPostsInput;
    create: UserCreateWithoutPostsInput;
    where?: UserWhereInput | undefined;
}
