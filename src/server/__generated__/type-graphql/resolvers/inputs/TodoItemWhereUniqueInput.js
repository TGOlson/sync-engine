"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TodoItemWhereInput_1 = require("../inputs/TodoItemWhereInput");
let TodoItemWhereUniqueInput = class TodoItemWhereUniqueInput {
    id;
    AND;
    OR;
    NOT;
    text;
    complete;
    hidden;
    createdAt;
    updatedAt;
};
exports.TodoItemWhereUniqueInput = TodoItemWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemWhereInput_1.TodoItemWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TodoItemWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemWhereInput_1.TodoItemWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TodoItemWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoItemWhereInput_1.TodoItemWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TodoItemWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TodoItemWhereUniqueInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], TodoItemWhereUniqueInput.prototype, "complete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], TodoItemWhereUniqueInput.prototype, "hidden", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TodoItemWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TodoItemWhereUniqueInput.prototype, "updatedAt", void 0);
exports.TodoItemWhereUniqueInput = TodoItemWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TodoItemWhereUniqueInput", {})
], TodoItemWhereUniqueInput);
