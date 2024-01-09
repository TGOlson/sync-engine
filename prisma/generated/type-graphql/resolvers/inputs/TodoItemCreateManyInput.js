"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TodoItemCreateManyInput = class TodoItemCreateManyInput {
    id;
    text;
    complete;
    hidden;
    createdAt;
    updatedAt;
};
exports.TodoItemCreateManyInput = TodoItemCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TodoItemCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemCreateManyInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoItemCreateManyInput.prototype, "complete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoItemCreateManyInput.prototype, "hidden", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TodoItemCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TodoItemCreateManyInput.prototype, "updatedAt", void 0);
exports.TodoItemCreateManyInput = TodoItemCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TodoItemCreateManyInput", {})
], TodoItemCreateManyInput);
