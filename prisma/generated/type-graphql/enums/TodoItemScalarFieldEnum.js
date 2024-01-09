"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TodoItemScalarFieldEnum;
(function (TodoItemScalarFieldEnum) {
    TodoItemScalarFieldEnum["id"] = "id";
    TodoItemScalarFieldEnum["text"] = "text";
    TodoItemScalarFieldEnum["complete"] = "complete";
    TodoItemScalarFieldEnum["hidden"] = "hidden";
    TodoItemScalarFieldEnum["createdAt"] = "createdAt";
    TodoItemScalarFieldEnum["updatedAt"] = "updatedAt";
})(TodoItemScalarFieldEnum || (exports.TodoItemScalarFieldEnum = TodoItemScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TodoItemScalarFieldEnum, {
    name: "TodoItemScalarFieldEnum",
    description: undefined,
});
