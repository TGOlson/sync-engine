"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutCommentsInput_1 = require("../inputs/PostCreateWithoutCommentsInput");
const PostUpdateWithoutCommentsInput_1 = require("../inputs/PostUpdateWithoutCommentsInput");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostUpsertWithoutCommentsInput = class PostUpsertWithoutCommentsInput {
    update;
    create;
    where;
};
exports.PostUpsertWithoutCommentsInput = PostUpsertWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutCommentsInput_1.PostUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutCommentsInput_1.PostUpdateWithoutCommentsInput)
], PostUpsertWithoutCommentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput_1.PostCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutCommentsInput_1.PostCreateWithoutCommentsInput)
], PostUpsertWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostUpsertWithoutCommentsInput.prototype, "where", void 0);
exports.PostUpsertWithoutCommentsInput = PostUpsertWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithoutCommentsInput", {})
], PostUpsertWithoutCommentsInput);
