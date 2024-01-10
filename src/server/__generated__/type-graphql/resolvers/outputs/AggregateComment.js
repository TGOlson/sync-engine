"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateComment = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentAvgAggregate_1 = require("../outputs/CommentAvgAggregate");
const CommentCountAggregate_1 = require("../outputs/CommentCountAggregate");
const CommentMaxAggregate_1 = require("../outputs/CommentMaxAggregate");
const CommentMinAggregate_1 = require("../outputs/CommentMinAggregate");
const CommentSumAggregate_1 = require("../outputs/CommentSumAggregate");
let AggregateComment = class AggregateComment {
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
exports.AggregateComment = AggregateComment;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCountAggregate_1.CommentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCountAggregate_1.CommentCountAggregate)
], AggregateComment.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentAvgAggregate_1.CommentAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentAvgAggregate_1.CommentAvgAggregate)
], AggregateComment.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSumAggregate_1.CommentSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSumAggregate_1.CommentSumAggregate)
], AggregateComment.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentMinAggregate_1.CommentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentMinAggregate_1.CommentMinAggregate)
], AggregateComment.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentMaxAggregate_1.CommentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentMaxAggregate_1.CommentMaxAggregate)
], AggregateComment.prototype, "_max", void 0);
exports.AggregateComment = AggregateComment = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateComment", {})
], AggregateComment);
