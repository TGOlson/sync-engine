"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemCountOrderByAggregateInput_1 = require("../inputs/TodoItemCountOrderByAggregateInput");
const TodoItemMaxOrderByAggregateInput_1 = require("../inputs/TodoItemMaxOrderByAggregateInput");
const TodoItemMinOrderByAggregateInput_1 = require("../inputs/TodoItemMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TodoItemOrderByWithAggregationInput = class TodoItemOrderByWithAggregationInput {
    id;
    text;
    complete;
    hidden;
    createdAt;
    updatedAt;
    _count;
    _max;
    _min;
};
exports.TodoItemOrderByWithAggregationInput = TodoItemOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemOrderByWithAggregationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemOrderByWithAggregationInput.prototype, "complete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemOrderByWithAggregationInput.prototype, "hidden", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemCountOrderByAggregateInput_1.TodoItemCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemCountOrderByAggregateInput_1.TodoItemCountOrderByAggregateInput)
], TodoItemOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemMaxOrderByAggregateInput_1.TodoItemMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemMaxOrderByAggregateInput_1.TodoItemMaxOrderByAggregateInput)
], TodoItemOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemMinOrderByAggregateInput_1.TodoItemMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemMinOrderByAggregateInput_1.TodoItemMinOrderByAggregateInput)
], TodoItemOrderByWithAggregationInput.prototype, "_min", void 0);
exports.TodoItemOrderByWithAggregationInput = TodoItemOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TodoItemOrderByWithAggregationInput", {})
], TodoItemOrderByWithAggregationInput);
