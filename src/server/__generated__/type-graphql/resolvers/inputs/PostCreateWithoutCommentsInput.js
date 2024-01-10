"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryCreateNestedManyWithoutPostInput_1 = require("../inputs/PostHistoryCreateNestedManyWithoutPostInput");
const UserCreateNestedOneWithoutPostsInput_1 = require("../inputs/UserCreateNestedOneWithoutPostsInput");
let PostCreateWithoutCommentsInput = class PostCreateWithoutCommentsInput {
    id;
    published;
    likes;
    createdAt;
    updatedAt;
    postHistory;
    author;
};
exports.PostCreateWithoutCommentsInput = PostCreateWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateWithoutCommentsInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateWithoutCommentsInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutCommentsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryCreateNestedManyWithoutPostInput_1.PostHistoryCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryCreateNestedManyWithoutPostInput_1.PostHistoryCreateNestedManyWithoutPostInput)
], PostCreateWithoutCommentsInput.prototype, "postHistory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput)
], PostCreateWithoutCommentsInput.prototype, "author", void 0);
exports.PostCreateWithoutCommentsInput = PostCreateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateWithoutCommentsInput", {})
], PostCreateWithoutCommentsInput);
