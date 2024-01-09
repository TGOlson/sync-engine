"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemAvgAggregate_1 = require("../outputs/TodoItemAvgAggregate");
const TodoItemCountAggregate_1 = require("../outputs/TodoItemCountAggregate");
const TodoItemMaxAggregate_1 = require("../outputs/TodoItemMaxAggregate");
const TodoItemMinAggregate_1 = require("../outputs/TodoItemMinAggregate");
const TodoItemSumAggregate_1 = require("../outputs/TodoItemSumAggregate");
let TodoItemGroupBy = class TodoItemGroupBy {
    id;
    text;
    complete;
    hidden;
    createdAt;
    updatedAt;
    _count;
    _avg;
    _sum;
    _min;
    _max;
};
exports.TodoItemGroupBy = TodoItemGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TodoItemGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemGroupBy.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoItemGroupBy.prototype, "complete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoItemGroupBy.prototype, "hidden", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TodoItemGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TodoItemGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemCountAggregate_1.TodoItemCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemCountAggregate_1.TodoItemCountAggregate)
], TodoItemGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemAvgAggregate_1.TodoItemAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemAvgAggregate_1.TodoItemAvgAggregate)
], TodoItemGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemSumAggregate_1.TodoItemSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemSumAggregate_1.TodoItemSumAggregate)
], TodoItemGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemMinAggregate_1.TodoItemMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemMinAggregate_1.TodoItemMinAggregate)
], TodoItemGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemMaxAggregate_1.TodoItemMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemMaxAggregate_1.TodoItemMaxAggregate)
], TodoItemGroupBy.prototype, "_max", void 0);
exports.TodoItemGroupBy = TodoItemGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TodoItemGroupBy", {})
], TodoItemGroupBy);
