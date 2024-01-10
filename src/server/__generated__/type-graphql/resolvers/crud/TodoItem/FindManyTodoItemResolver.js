"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTodoItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyTodoItemArgs_1 = require("./args/FindManyTodoItemArgs");
const TodoItem_1 = require("../../../models/TodoItem");
const helpers_1 = require("../../../helpers");
let FindManyTodoItemResolver = class FindManyTodoItemResolver {
    async todoItems(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyTodoItemResolver = FindManyTodoItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TodoItem_1.TodoItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTodoItemArgs_1.FindManyTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTodoItemResolver.prototype, "todoItems", null);
exports.FindManyTodoItemResolver = FindManyTodoItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TodoItem_1.TodoItem)
], FindManyTodoItemResolver);
