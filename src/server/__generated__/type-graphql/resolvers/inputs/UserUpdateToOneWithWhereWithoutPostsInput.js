"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutPostsInput_1 = require("../inputs/UserUpdateWithoutPostsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutPostsInput = class UserUpdateToOneWithWhereWithoutPostsInput {
    where;
    data;
};
exports.UserUpdateToOneWithWhereWithoutPostsInput = UserUpdateToOneWithWhereWithoutPostsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutPostsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPostsInput_1.UserUpdateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPostsInput_1.UserUpdateWithoutPostsInput)
], UserUpdateToOneWithWhereWithoutPostsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutPostsInput = UserUpdateToOneWithWhereWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutPostsInput", {})
], UserUpdateToOneWithWhereWithoutPostsInput);
