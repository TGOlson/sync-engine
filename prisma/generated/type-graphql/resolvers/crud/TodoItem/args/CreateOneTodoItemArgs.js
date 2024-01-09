"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTodoItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemCreateInput_1 = require("../../../inputs/TodoItemCreateInput");
let CreateOneTodoItemArgs = class CreateOneTodoItemArgs {
    data;
};
exports.CreateOneTodoItemArgs = CreateOneTodoItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemCreateInput_1.TodoItemCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoItemCreateInput_1.TodoItemCreateInput)
], CreateOneTodoItemArgs.prototype, "data", void 0);
exports.CreateOneTodoItemArgs = CreateOneTodoItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTodoItemArgs);
