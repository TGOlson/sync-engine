"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentSumOrderByAggregateInput = class CommentSumOrderByAggregateInput {
    likes;
};
exports.CommentSumOrderByAggregateInput = CommentSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSumOrderByAggregateInput.prototype, "likes", void 0);
exports.CommentSumOrderByAggregateInput = CommentSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSumOrderByAggregateInput", {})
], CommentSumOrderByAggregateInput);
