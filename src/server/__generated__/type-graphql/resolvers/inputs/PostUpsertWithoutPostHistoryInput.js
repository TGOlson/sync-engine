"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithoutPostHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutPostHistoryInput_1 = require("../inputs/PostCreateWithoutPostHistoryInput");
const PostUpdateWithoutPostHistoryInput_1 = require("../inputs/PostUpdateWithoutPostHistoryInput");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostUpsertWithoutPostHistoryInput = class PostUpsertWithoutPostHistoryInput {
    update;
    create;
    where;
};
exports.PostUpsertWithoutPostHistoryInput = PostUpsertWithoutPostHistoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutPostHistoryInput_1.PostUpdateWithoutPostHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutPostHistoryInput_1.PostUpdateWithoutPostHistoryInput)
], PostUpsertWithoutPostHistoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutPostHistoryInput_1.PostCreateWithoutPostHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutPostHistoryInput_1.PostCreateWithoutPostHistoryInput)
], PostUpsertWithoutPostHistoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostUpsertWithoutPostHistoryInput.prototype, "where", void 0);
exports.PostUpsertWithoutPostHistoryInput = PostUpsertWithoutPostHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithoutPostHistoryInput", {})
], PostUpsertWithoutPostHistoryInput);
