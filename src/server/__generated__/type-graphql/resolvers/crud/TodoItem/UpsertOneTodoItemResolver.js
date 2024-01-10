"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTodoItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneTodoItemArgs_1 = require("./args/UpsertOneTodoItemArgs");
const TodoItem_1 = require("../../../models/TodoItem");
const helpers_1 = require("../../../helpers");
let UpsertOneTodoItemResolver = class UpsertOneTodoItemResolver {
    async upsertOneTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneTodoItemResolver = UpsertOneTodoItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TodoItem_1.TodoItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTodoItemArgs_1.UpsertOneTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTodoItemResolver.prototype, "upsertOneTodoItem", null);
exports.UpsertOneTodoItemResolver = UpsertOneTodoItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TodoItem_1.TodoItem)
], UpsertOneTodoItemResolver);
