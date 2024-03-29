"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPostsInput_1 = require("../inputs/UserCreateWithoutPostsInput");
const UserUpdateWithoutPostsInput_1 = require("../inputs/UserUpdateWithoutPostsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutPostsInput = class UserUpsertWithoutPostsInput {
    update;
    create;
    where;
};
exports.UserUpsertWithoutPostsInput = UserUpsertWithoutPostsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPostsInput_1.UserUpdateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPostsInput_1.UserUpdateWithoutPostsInput)
], UserUpsertWithoutPostsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput)
], UserUpsertWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutPostsInput.prototype, "where", void 0);
exports.UserUpsertWithoutPostsInput = UserUpsertWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutPostsInput", {})
], UserUpsertWithoutPostsInput);
