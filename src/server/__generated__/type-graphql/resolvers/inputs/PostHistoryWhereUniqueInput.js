"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const PostHistoryWhereInput_1 = require("../inputs/PostHistoryWhereInput");
const PostRelationFilter_1 = require("../inputs/PostRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let PostHistoryWhereUniqueInput = class PostHistoryWhereUniqueInput {
    id;
    AND;
    OR;
    NOT;
    title;
    content;
    postId;
    createdAt;
    updatedAt;
    post;
};
exports.PostHistoryWhereUniqueInput = PostHistoryWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereInput_1.PostHistoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereInput_1.PostHistoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereInput_1.PostHistoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryWhereUniqueInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryWhereUniqueInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryWhereUniqueInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostHistoryWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostHistoryWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostRelationFilter_1.PostRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostRelationFilter_1.PostRelationFilter)
], PostHistoryWhereUniqueInput.prototype, "post", void 0);
exports.PostHistoryWhereUniqueInput = PostHistoryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryWhereUniqueInput", {})
], PostHistoryWhereUniqueInput);
