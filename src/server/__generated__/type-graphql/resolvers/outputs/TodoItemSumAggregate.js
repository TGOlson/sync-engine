"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TodoItemSumAggregate = class TodoItemSumAggregate {
    id;
};
exports.TodoItemSumAggregate = TodoItemSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TodoItemSumAggregate.prototype, "id", void 0);
exports.TodoItemSumAggregate = TodoItemSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TodoItemSumAggregate", {})
], TodoItemSumAggregate);
