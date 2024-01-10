"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTodoItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemUpdateInput_1 = require("../../../inputs/TodoItemUpdateInput");
const TodoItemWhereUniqueInput_1 = require("../../../inputs/TodoItemWhereUniqueInput");
let UpdateOneTodoItemArgs = class UpdateOneTodoItemArgs {
    data;
    where;
};
exports.UpdateOneTodoItemArgs = UpdateOneTodoItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemUpdateInput_1.TodoItemUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoItemUpdateInput_1.TodoItemUpdateInput)
], UpdateOneTodoItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput)
], UpdateOneTodoItemArgs.prototype, "where", void 0);
exports.UpdateOneTodoItemArgs = UpdateOneTodoItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTodoItemArgs);
