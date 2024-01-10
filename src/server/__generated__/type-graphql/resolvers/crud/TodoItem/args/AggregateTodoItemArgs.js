"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTodoItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemOrderByWithRelationInput_1 = require("../../../inputs/TodoItemOrderByWithRelationInput");
const TodoItemWhereInput_1 = require("../../../inputs/TodoItemWhereInput");
const TodoItemWhereUniqueInput_1 = require("../../../inputs/TodoItemWhereUniqueInput");
let AggregateTodoItemArgs = class AggregateTodoItemArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
};
exports.AggregateTodoItemArgs = AggregateTodoItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereInput_1.TodoItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemWhereInput_1.TodoItemWhereInput)
], AggregateTodoItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemOrderByWithRelationInput_1.TodoItemOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTodoItemArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput)
], AggregateTodoItemArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTodoItemArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTodoItemArgs.prototype, "skip", void 0);
exports.AggregateTodoItemArgs = AggregateTodoItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTodoItemArgs);
