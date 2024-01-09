"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTodoItemOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTodoItemOrThrowArgs_1 = require("./args/FindUniqueTodoItemOrThrowArgs");
const TodoItem_1 = require("../../../models/TodoItem");
const helpers_1 = require("../../../helpers");
let FindUniqueTodoItemOrThrowResolver = class FindUniqueTodoItemOrThrowResolver {
    async getTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueTodoItemOrThrowResolver = FindUniqueTodoItemOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TodoItem_1.TodoItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTodoItemOrThrowArgs_1.FindUniqueTodoItemOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTodoItemOrThrowResolver.prototype, "getTodoItem", null);
exports.FindUniqueTodoItemOrThrowResolver = FindUniqueTodoItemOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TodoItem_1.TodoItem)
], FindUniqueTodoItemOrThrowResolver);
