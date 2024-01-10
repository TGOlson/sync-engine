"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CommentScalarWhereInput = class CommentScalarWhereInput {
    AND;
    OR;
    NOT;
    id;
    text;
    authorId;
    postId;
    likes;
    createdAt;
    updatedAt;
};
exports.CommentScalarWhereInput = CommentScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentScalarWhereInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentScalarWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentScalarWhereInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CommentScalarWhereInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CommentScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CommentScalarWhereInput.prototype, "updatedAt", void 0);
exports.CommentScalarWhereInput = CommentScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentScalarWhereInput", {})
], CommentScalarWhereInput);
