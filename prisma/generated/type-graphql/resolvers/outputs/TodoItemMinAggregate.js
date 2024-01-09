"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TodoItemMinAggregate = class TodoItemMinAggregate {
    id;
    text;
    complete;
    hidden;
    createdAt;
    updatedAt;
};
exports.TodoItemMinAggregate = TodoItemMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TodoItemMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoItemMinAggregate.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoItemMinAggregate.prototype, "complete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoItemMinAggregate.prototype, "hidden", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TodoItemMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TodoItemMinAggregate.prototype, "updatedAt", void 0);
exports.TodoItemMinAggregate = TodoItemMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TodoItemMinAggregate", {})
], TodoItemMinAggregate);
