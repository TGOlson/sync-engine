"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TodoItemCountOrderByAggregateInput = class TodoItemCountOrderByAggregateInput {
    id;
    text;
    complete;
    hidden;
    createdAt;
    updatedAt;
};
exports.TodoItemCountOrderByAggregateInput = TodoItemCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemCountOrderByAggregateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemCountOrderByAggregateInput.prototype, "complete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemCountOrderByAggregateInput.prototype, "hidden", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemCountOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.TodoItemCountOrderByAggregateInput = TodoItemCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TodoItemCountOrderByAggregateInput", {})
], TodoItemCountOrderByAggregateInput);
