"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutPostInput_1 = require("../inputs/CommentCreateNestedManyWithoutPostInput");
const PostHistoryCreateNestedManyWithoutPostInput_1 = require("../inputs/PostHistoryCreateNestedManyWithoutPostInput");
let PostCreateWithoutAuthorInput = class PostCreateWithoutAuthorInput {
    id;
    published;
    likes;
    createdAt;
    updatedAt;
    postHistory;
    comments;
};
exports.PostCreateWithoutAuthorInput = PostCreateWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateWithoutAuthorInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateWithoutAuthorInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryCreateNestedManyWithoutPostInput_1.PostHistoryCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryCreateNestedManyWithoutPostInput_1.PostHistoryCreateNestedManyWithoutPostInput)
], PostCreateWithoutAuthorInput.prototype, "postHistory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput)
], PostCreateWithoutAuthorInput.prototype, "comments", void 0);
exports.PostCreateWithoutAuthorInput = PostCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateWithoutAuthorInput", {})
], PostCreateWithoutAuthorInput);
