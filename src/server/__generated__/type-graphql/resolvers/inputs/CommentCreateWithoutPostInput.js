"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutCommentsInput_1 = require("../inputs/UserCreateNestedOneWithoutCommentsInput");
let CommentCreateWithoutPostInput = class CommentCreateWithoutPostInput {
    id;
    text;
    likes;
    createdAt;
    updatedAt;
    author;
};
exports.CommentCreateWithoutPostInput = CommentCreateWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutPostInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutPostInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentCreateWithoutPostInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutPostInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutPostInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutPostInput.prototype, "author", void 0);
exports.CommentCreateWithoutPostInput = CommentCreateWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateWithoutPostInput", {})
], CommentCreateWithoutPostInput);
