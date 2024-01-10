"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTodoItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemOrderByWithRelationInput_1 = require("../../../inputs/TodoItemOrderByWithRelationInput");
const TodoItemWhereInput_1 = require("../../../inputs/TodoItemWhereInput");
const TodoItemWhereUniqueInput_1 = require("../../../inputs/TodoItemWhereUniqueInput");
const TodoItemScalarFieldEnum_1 = require("../../../../enums/TodoItemScalarFieldEnum");
let FindManyTodoItemArgs = class FindManyTodoItemArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindManyTodoItemArgs = FindManyTodoItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereInput_1.TodoItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemWhereInput_1.TodoItemWhereInput)
], FindManyTodoItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemOrderByWithRelationInput_1.TodoItemOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTodoItemArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput)
], FindManyTodoItemArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTodoItemArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTodoItemArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemScalarFieldEnum_1.TodoItemScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTodoItemArgs.prototype, "distinct", void 0);
exports.FindManyTodoItemArgs = FindManyTodoItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTodoItemArgs);
