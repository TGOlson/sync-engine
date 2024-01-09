"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTodoItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoItemCreateInput_1 = require("../../../inputs/TodoItemCreateInput");
const TodoItemUpdateInput_1 = require("../../../inputs/TodoItemUpdateInput");
const TodoItemWhereUniqueInput_1 = require("../../../inputs/TodoItemWhereUniqueInput");
let UpsertOneTodoItemArgs = class UpsertOneTodoItemArgs {
    where;
    create;
    update;
};
exports.UpsertOneTodoItemArgs = UpsertOneTodoItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoItemWhereUniqueInput_1.TodoItemWhereUniqueInput)
], UpsertOneTodoItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemCreateInput_1.TodoItemCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoItemCreateInput_1.TodoItemCreateInput)
], UpsertOneTodoItemArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoItemUpdateInput_1.TodoItemUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoItemUpdateInput_1.TodoItemUpdateInput)
], UpsertOneTodoItemArgs.prototype, "update", void 0);
exports.UpsertOneTodoItemArgs = UpsertOneTodoItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTodoItemArgs);
