"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutPostInput_1 = require("../inputs/CommentCreateNestedManyWithoutPostInput");
const PostHistoryCreateNestedManyWithoutPostInput_1 = require("../inputs/PostHistoryCreateNestedManyWithoutPostInput");
const UserCreateNestedOneWithoutPostsInput_1 = require("../inputs/UserCreateNestedOneWithoutPostsInput");
let PostCreateInput = class PostCreateInput {
    id;
    published;
    likes;
    createdAt;
    updatedAt;
    postHistory;
    author;
    comments;
};
exports.PostCreateInput = PostCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryCreateNestedManyWithoutPostInput_1.PostHistoryCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryCreateNestedManyWithoutPostInput_1.PostHistoryCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "postHistory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput)
], PostCreateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "comments", void 0);
exports.PostCreateInput = PostCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateInput", {})
], PostCreateInput);
