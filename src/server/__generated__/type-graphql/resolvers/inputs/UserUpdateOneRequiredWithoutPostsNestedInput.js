"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutPostsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPostsInput_1 = require("../inputs/UserCreateOrConnectWithoutPostsInput");
const UserCreateWithoutPostsInput_1 = require("../inputs/UserCreateWithoutPostsInput");
const UserUpdateToOneWithWhereWithoutPostsInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutPostsInput");
const UserUpsertWithoutPostsInput_1 = require("../inputs/UserUpsertWithoutPostsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutPostsNestedInput = class UserUpdateOneRequiredWithoutPostsNestedInput {
    create;
    connectOrCreate;
    upsert;
    connect;
    update;
};
exports.UserUpdateOneRequiredWithoutPostsNestedInput = UserUpdateOneRequiredWithoutPostsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput)
], UserUpdateOneRequiredWithoutPostsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostsInput_1.UserCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPostsInput_1.UserCreateOrConnectWithoutPostsInput)
], UserUpdateOneRequiredWithoutPostsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutPostsInput_1.UserUpsertWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutPostsInput_1.UserUpsertWithoutPostsInput)
], UserUpdateOneRequiredWithoutPostsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutPostsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutPostsInput_1.UserUpdateToOneWithWhereWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutPostsInput_1.UserUpdateToOneWithWhereWithoutPostsInput)
], UserUpdateOneRequiredWithoutPostsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutPostsNestedInput = UserUpdateOneRequiredWithoutPostsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPostsNestedInput", {})
], UserUpdateOneRequiredWithoutPostsNestedInput);
