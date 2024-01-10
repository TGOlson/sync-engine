"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePostHistory = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryCountAggregate_1 = require("../outputs/PostHistoryCountAggregate");
const PostHistoryMaxAggregate_1 = require("../outputs/PostHistoryMaxAggregate");
const PostHistoryMinAggregate_1 = require("../outputs/PostHistoryMinAggregate");
let AggregatePostHistory = class AggregatePostHistory {
    _count;
    _min;
    _max;
};
exports.AggregatePostHistory = AggregatePostHistory;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryCountAggregate_1.PostHistoryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryCountAggregate_1.PostHistoryCountAggregate)
], AggregatePostHistory.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryMinAggregate_1.PostHistoryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryMinAggregate_1.PostHistoryMinAggregate)
], AggregatePostHistory.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryMaxAggregate_1.PostHistoryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryMaxAggregate_1.PostHistoryMaxAggregate)
], AggregatePostHistory.prototype, "_max", void 0);
exports.AggregatePostHistory = AggregatePostHistory = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePostHistory", {})
], AggregatePostHistory);
