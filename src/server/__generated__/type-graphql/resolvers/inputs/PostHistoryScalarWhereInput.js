"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let PostHistoryScalarWhereInput = class PostHistoryScalarWhereInput {
    AND;
    OR;
    NOT;
    id;
    title;
    content;
    postId;
    createdAt;
    updatedAt;
};
exports.PostHistoryScalarWhereInput = PostHistoryScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryScalarWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryScalarWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostHistoryScalarWhereInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostHistoryScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostHistoryScalarWhereInput.prototype, "updatedAt", void 0);
exports.PostHistoryScalarWhereInput = PostHistoryScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryScalarWhereInput", {})
], PostHistoryScalarWhereInput);
