"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCountCommentsArgs_1 = require("./args/PostCountCommentsArgs");
const PostCountPostHistoryArgs_1 = require("./args/PostCountPostHistoryArgs");
let PostCount = class PostCount {
    postHistory;
    comments;
    getPostHistory(root, args) {
        return root.postHistory;
    }
    getComments(root, args) {
        return root.comments;
    }
};
exports.PostCount = PostCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "postHistory",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PostCount, PostCountPostHistoryArgs_1.PostCountPostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Number)
], PostCount.prototype, "getPostHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "comments",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PostCount, PostCountCommentsArgs_1.PostCountCommentsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], PostCount.prototype, "getComments", null);
exports.PostCount = PostCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostCount", {})
], PostCount);
