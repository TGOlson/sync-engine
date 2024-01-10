"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CommentListRelationFilter_1 = require("../inputs/CommentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PostHistoryListRelationFilter_1 = require("../inputs/PostHistoryListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let PostWhereInput = class PostWhereInput {
    AND;
    OR;
    NOT;
    id;
    published;
    authorId;
    likes;
    createdAt;
    updatedAt;
    postHistory;
    author;
    comments;
};
exports.PostWhereInput = PostWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], PostWhereInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PostWhereInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryListRelationFilter_1.PostHistoryListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryListRelationFilter_1.PostHistoryListRelationFilter)
], PostWhereInput.prototype, "postHistory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], PostWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentListRelationFilter_1.CommentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentListRelationFilter_1.CommentListRelationFilter)
], PostWhereInput.prototype, "comments", void 0);
exports.PostWhereInput = PostWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostWhereInput", {})
], PostWhereInput);
