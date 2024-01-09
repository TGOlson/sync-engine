"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTodoItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemCreateManyInput_1 = require("../../../inputs/TodoItemCreateManyInput");
let CreateManyTodoItemArgs = class CreateManyTodoItemArgs {
    data;
    skipDuplicates;
};
exports.CreateManyTodoItemArgs = CreateManyTodoItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemCreateManyInput_1.TodoItemCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTodoItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTodoItemArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyTodoItemArgs = CreateManyTodoItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTodoItemArgs);
