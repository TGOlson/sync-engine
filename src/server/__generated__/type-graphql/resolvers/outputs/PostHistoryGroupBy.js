"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryCountAggregate_1 = require("../outputs/PostHistoryCountAggregate");
const PostHistoryMaxAggregate_1 = require("../outputs/PostHistoryMaxAggregate");
const PostHistoryMinAggregate_1 = require("../outputs/PostHistoryMinAggregate");
let PostHistoryGroupBy = class PostHistoryGroupBy {
    id;
    title;
    content;
    postId;
    createdAt;
    updatedAt;
    _count;
    _min;
    _max;
};
exports.PostHistoryGroupBy = PostHistoryGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryGroupBy.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PostHistoryGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PostHistoryGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryCountAggregate_1.PostHistoryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryCountAggregate_1.PostHistoryCountAggregate)
], PostHistoryGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryMinAggregate_1.PostHistoryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryMinAggregate_1.PostHistoryMinAggregate)
], PostHistoryGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryMaxAggregate_1.PostHistoryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryMaxAggregate_1.PostHistoryMaxAggregate)
], PostHistoryGroupBy.prototype, "_max", void 0);
exports.PostHistoryGroupBy = PostHistoryGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostHistoryGroupBy", {})
], PostHistoryGroupBy);
