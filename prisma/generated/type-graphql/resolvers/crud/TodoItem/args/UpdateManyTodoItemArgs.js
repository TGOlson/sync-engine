"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTodoItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemUpdateManyMutationInput_1 = require("../../../inputs/TodoItemUpdateManyMutationInput");
const TodoItemWhereInput_1 = require("../../../inputs/TodoItemWhereInput");
let UpdateManyTodoItemArgs = class UpdateManyTodoItemArgs {
    data;
    where;
};
exports.UpdateManyTodoItemArgs = UpdateManyTodoItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemUpdateManyMutationInput_1.TodoItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoItemUpdateManyMutationInput_1.TodoItemUpdateManyMutationInput)
], UpdateManyTodoItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereInput_1.TodoItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoItemWhereInput_1.TodoItemWhereInput)
], UpdateManyTodoItemArgs.prototype, "where", void 0);
exports.UpdateManyTodoItemArgs = UpdateManyTodoItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTodoItemArgs);
