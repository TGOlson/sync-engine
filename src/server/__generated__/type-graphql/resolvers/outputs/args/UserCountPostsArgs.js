"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountPostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostWhereInput_1 = require("../../inputs/PostWhereInput");
let UserCountPostsArgs = class UserCountPostsArgs {
    where;
};
exports.UserCountPostsArgs = UserCountPostsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], UserCountPostsArgs.prototype, "where", void 0);
exports.UserCountPostsArgs = UserCountPostsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountPostsArgs);
