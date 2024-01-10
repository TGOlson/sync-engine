"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentOrderByRelationAggregateInput_1 = require("../inputs/CommentOrderByRelationAggregateInput");
const PostHistoryOrderByRelationAggregateInput_1 = require("../inputs/PostHistoryOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PostOrderByWithRelationInput = class PostOrderByWithRelationInput {
    id;
    published;
    authorId;
    likes;
    createdAt;
    updatedAt;
    postHistory;
    author;
    comments;
};
exports.PostOrderByWithRelationInput = PostOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryOrderByRelationAggregateInput_1.PostHistoryOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryOrderByRelationAggregateInput_1.PostHistoryOrderByRelationAggregateInput)
], PostOrderByWithRelationInput.prototype, "postHistory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], PostOrderByWithRelationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput_1.CommentOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentOrderByRelationAggregateInput_1.CommentOrderByRelationAggregateInput)
], PostOrderByWithRelationInput.prototype, "comments", void 0);
exports.PostOrderByWithRelationInput = PostOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostOrderByWithRelationInput", {})
], PostOrderByWithRelationInput);
