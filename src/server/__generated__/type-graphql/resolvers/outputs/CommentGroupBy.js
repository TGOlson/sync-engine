"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentAvgAggregate_1 = require("../outputs/CommentAvgAggregate");
const CommentCountAggregate_1 = require("../outputs/CommentCountAggregate");
const CommentMaxAggregate_1 = require("../outputs/CommentMaxAggregate");
const CommentMinAggregate_1 = require("../outputs/CommentMinAggregate");
const CommentSumAggregate_1 = require("../outputs/CommentSumAggregate");
let CommentGroupBy = class CommentGroupBy {
    id;
    text;
    authorId;
    postId;
    likes;
    createdAt;
    updatedAt;
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
exports.CommentGroupBy = CommentGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentGroupBy.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentGroupBy.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentGroupBy.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CommentGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CommentGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCountAggregate_1.CommentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCountAggregate_1.CommentCountAggregate)
], CommentGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentAvgAggregate_1.CommentAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentAvgAggregate_1.CommentAvgAggregate)
], CommentGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSumAggregate_1.CommentSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSumAggregate_1.CommentSumAggregate)
], CommentGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentMinAggregate_1.CommentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentMinAggregate_1.CommentMinAggregate)
], CommentGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentMaxAggregate_1.CommentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentMaxAggregate_1.CommentMaxAggregate)
], CommentGroupBy.prototype, "_max", void 0);
exports.CommentGroupBy = CommentGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentGroupBy", {})
], CommentGroupBy);
