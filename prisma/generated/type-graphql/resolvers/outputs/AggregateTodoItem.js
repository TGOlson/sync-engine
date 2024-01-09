"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTodoItem = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemAvgAggregate_1 = require("../outputs/TodoItemAvgAggregate");
const TodoItemCountAggregate_1 = require("../outputs/TodoItemCountAggregate");
const TodoItemMaxAggregate_1 = require("../outputs/TodoItemMaxAggregate");
const TodoItemMinAggregate_1 = require("../outputs/TodoItemMinAggregate");
const TodoItemSumAggregate_1 = require("../outputs/TodoItemSumAggregate");
let AggregateTodoItem = class AggregateTodoItem {
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
exports.AggregateTodoItem = AggregateTodoItem;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemCountAggregate_1.TodoItemCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemCountAggregate_1.TodoItemCountAggregate)
], AggregateTodoItem.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemAvgAggregate_1.TodoItemAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemAvgAggregate_1.TodoItemAvgAggregate)
], AggregateTodoItem.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemSumAggregate_1.TodoItemSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemSumAggregate_1.TodoItemSumAggregate)
], AggregateTodoItem.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemMinAggregate_1.TodoItemMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemMinAggregate_1.TodoItemMinAggregate)
], AggregateTodoItem.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemMaxAggregate_1.TodoItemMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemMaxAggregate_1.TodoItemMaxAggregate)
], AggregateTodoItem.prototype, "_max", void 0);
exports.AggregateTodoItem = AggregateTodoItem = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTodoItem", {})
], AggregateTodoItem);
