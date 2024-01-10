"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const PostRelationFilter_1 = require("../inputs/PostRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let PostHistoryWhereInput = class PostHistoryWhereInput {
    AND;
    OR;
    NOT;
    id;
    title;
    content;
    postId;
    createdAt;
    updatedAt;
    post;
};
exports.PostHistoryWhereInput = PostHistoryWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryWhereInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostHistoryWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostHistoryWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostRelationFilter_1.PostRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostRelationFilter_1.PostRelationFilter)
], PostHistoryWhereInput.prototype, "post", void 0);
exports.PostHistoryWhereInput = PostHistoryWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryWhereInput", {})
], PostHistoryWhereInput);
