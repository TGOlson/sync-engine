"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTodoItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemWhereUniqueInput_1 = require("../../../inputs/TodoItemWhereUniqueInput");
let DeleteOneTodoItemArgs = class DeleteOneTodoItemArgs {
    where;
};
exports.DeleteOneTodoItemArgs = DeleteOneTodoItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput)
], DeleteOneTodoItemArgs.prototype, "where", void 0);
exports.DeleteOneTodoItemArgs = DeleteOneTodoItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTodoItemArgs);
