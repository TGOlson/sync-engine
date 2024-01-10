"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryCountOrderByAggregateInput_1 = require("../inputs/PostHistoryCountOrderByAggregateInput");
const PostHistoryMaxOrderByAggregateInput_1 = require("../inputs/PostHistoryMaxOrderByAggregateInput");
const PostHistoryMinOrderByAggregateInput_1 = require("../inputs/PostHistoryMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PostHistoryOrderByWithAggregationInput = class PostHistoryOrderByWithAggregationInput {
    id;
    title;
    content;
    postId;
    createdAt;
    updatedAt;
    _count;
    _max;
    _min;
};
exports.PostHistoryOrderByWithAggregationInput = PostHistoryOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithAggregationInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryCountOrderByAggregateInput_1.PostHistoryCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryCountOrderByAggregateInput_1.PostHistoryCountOrderByAggregateInput)
], PostHistoryOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryMaxOrderByAggregateInput_1.PostHistoryMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryMaxOrderByAggregateInput_1.PostHistoryMaxOrderByAggregateInput)
], PostHistoryOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryMinOrderByAggregateInput_1.PostHistoryMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryMinOrderByAggregateInput_1.PostHistoryMinOrderByAggregateInput)
], PostHistoryOrderByWithAggregationInput.prototype, "_min", void 0);
exports.PostHistoryOrderByWithAggregationInput = PostHistoryOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryOrderByWithAggregationInput", {})
], PostHistoryOrderByWithAggregationInput);
