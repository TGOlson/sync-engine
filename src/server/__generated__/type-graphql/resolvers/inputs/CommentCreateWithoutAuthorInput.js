"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutCommentsInput_1 = require("../inputs/PostCreateNestedOneWithoutCommentsInput");
let CommentCreateWithoutAuthorInput = class CommentCreateWithoutAuthorInput {
    id;
    text;
    likes;
    createdAt;
    updatedAt;
    post;
};
exports.CommentCreateWithoutAuthorInput = CommentCreateWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutAuthorInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentCreateWithoutAuthorInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentsInput_1.PostCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutCommentsInput_1.PostCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutAuthorInput.prototype, "post", void 0);
exports.CommentCreateWithoutAuthorInput = CommentCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateWithoutAuthorInput", {})
], CommentCreateWithoutAuthorInput);
