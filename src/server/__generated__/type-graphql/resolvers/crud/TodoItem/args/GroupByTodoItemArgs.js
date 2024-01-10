"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTodoItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemOrderByWithAggregationInput_1 = require("../../../inputs/TodoItemOrderByWithAggregationInput");
const TodoItemScalarWhereWithAggregatesInput_1 = require("../../../inputs/TodoItemScalarWhereWithAggregatesInput");
const TodoItemWhereInput_1 = require("../../../inputs/TodoItemWhereInput");
const TodoItemScalarFieldEnum_1 = require("../../../../enums/TodoItemScalarFieldEnum");
let GroupByTodoItemArgs = class GroupByTodoItemArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupByTodoItemArgs = GroupByTodoItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereInput_1.TodoItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemWhereInput_1.TodoItemWhereInput)
], GroupByTodoItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemOrderByWithAggregationInput_1.TodoItemOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTodoItemArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemScalarFieldEnum_1.TodoItemScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTodoItemArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemScalarWhereWithAggregatesInput_1.TodoItemScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemScalarWhereWithAggregatesInput_1.TodoItemScalarWhereWithAggregatesInput)
], GroupByTodoItemArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTodoItemArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTodoItemArgs.prototype, "skip", void 0);
exports.GroupByTodoItemArgs = GroupByTodoItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTodoItemArgs);
