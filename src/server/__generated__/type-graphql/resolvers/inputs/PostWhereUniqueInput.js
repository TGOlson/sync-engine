"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CommentListRelationFilter_1 = require("../inputs/CommentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PostHistoryListRelationFilter_1 = require("../inputs/PostHistoryListRelationFilter");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let PostWhereUniqueInput = class PostWhereUniqueInput {
    id;
    AND;
    OR;
    NOT;
    published;
    authorId;
    likes;
    createdAt;
    updatedAt;
    postHistory;
    author;
    comments;
};
exports.PostWhereUniqueInput = PostWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1.PostWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1.PostWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1.PostWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], PostWhereUniqueInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostWhereUniqueInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PostWhereUniqueInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryListRelationFilter_1.PostHistoryListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryListRelationFilter_1.PostHistoryListRelationFilter)
], PostWhereUniqueInput.prototype, "postHistory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], PostWhereUniqueInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentListRelationFilter_1.CommentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentListRelationFilter_1.CommentListRelationFilter)
], PostWhereUniqueInput.prototype, "comments", void 0);
exports.PostWhereUniqueInput = PostWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostWhereUniqueInput", {})
], PostWhereUniqueInput);
