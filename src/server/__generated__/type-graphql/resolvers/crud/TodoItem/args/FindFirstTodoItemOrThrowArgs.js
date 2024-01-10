"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTodoItemOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemOrderByWithRelationInput_1 = require("../../../inputs/TodoItemOrderByWithRelationInput");
const TodoItemWhereInput_1 = require("../../../inputs/TodoItemWhereInput");
const TodoItemWhereUniqueInput_1 = require("../../../inputs/TodoItemWhereUniqueInput");
const TodoItemScalarFieldEnum_1 = require("../../../../enums/TodoItemScalarFieldEnum");
let FindFirstTodoItemOrThrowArgs = class FindFirstTodoItemOrThrowArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstTodoItemOrThrowArgs = FindFirstTodoItemOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereInput_1.TodoItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemWhereInput_1.TodoItemWhereInput)
], FindFirstTodoItemOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemOrderByWithRelationInput_1.TodoItemOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTodoItemOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput)
], FindFirstTodoItemOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTodoItemOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTodoItemOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemScalarFieldEnum_1.TodoItemScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTodoItemOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstTodoItemOrThrowArgs = FindFirstTodoItemOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTodoItemOrThrowArgs);
