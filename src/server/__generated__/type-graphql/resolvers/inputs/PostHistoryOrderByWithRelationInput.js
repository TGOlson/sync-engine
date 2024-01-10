"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostOrderByWithRelationInput_1 = require("../inputs/PostOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PostHistoryOrderByWithRelationInput = class PostHistoryOrderByWithRelationInput {
    id;
    title;
    content;
    postId;
    createdAt;
    updatedAt;
    post;
};
exports.PostHistoryOrderByWithRelationInput = PostHistoryOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithRelationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithRelationInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostOrderByWithRelationInput_1.PostOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostOrderByWithRelationInput_1.PostOrderByWithRelationInput)
], PostHistoryOrderByWithRelationInput.prototype, "post", void 0);
exports.PostHistoryOrderByWithRelationInput = PostHistoryOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryOrderByWithRelationInput", {})
], PostHistoryOrderByWithRelationInput);
