"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCountCommentsArgs_1 = require("./args/UserCountCommentsArgs");
const UserCountPostsArgs_1 = require("./args/UserCountPostsArgs");
let UserCount = class UserCount {
    posts;
    comments;
    getPosts(root, args) {
        return root.posts;
    }
    getComments(root, args) {
        return root.comments;
    }
};
exports.UserCount = UserCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "posts",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountPostsArgs_1.UserCountPostsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getPosts", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "comments",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountCommentsArgs_1.UserCountCommentsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getComments", null);
exports.UserCount = UserCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserCount", {})
], UserCount);
