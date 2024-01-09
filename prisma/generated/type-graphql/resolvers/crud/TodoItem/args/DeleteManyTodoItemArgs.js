"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTodoItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemWhereInput_1 = require("../../../inputs/TodoItemWhereInput");
let DeleteManyTodoItemArgs = class DeleteManyTodoItemArgs {
    where;
};
exports.DeleteManyTodoItemArgs = DeleteManyTodoItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereInput_1.TodoItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemWhereInput_1.TodoItemWhereInput)
], DeleteManyTodoItemArgs.prototype, "where", void 0);
exports.DeleteManyTodoItemArgs = DeleteManyTodoItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTodoItemArgs);
