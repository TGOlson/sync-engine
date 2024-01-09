"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TodoItemMaxAggregate = class TodoItemMaxAggregate {
    id;
    text;
    complete;
    hidden;
    createdAt;
    updatedAt;
};
exports.TodoItemMaxAggregate = TodoItemMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TodoItemMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemMaxAggregate.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoItemMaxAggregate.prototype, "complete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoItemMaxAggregate.prototype, "hidden", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TodoItemMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TodoItemMaxAggregate.prototype, "updatedAt", void 0);
exports.TodoItemMaxAggregate = TodoItemMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TodoItemMaxAggregate", {})
], TodoItemMaxAggregate);
