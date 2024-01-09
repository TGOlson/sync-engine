"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTodoItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTodoItemArgs_1 = require("./args/UpdateManyTodoItemArgs");
const TodoItem_1 = require("../../../models/TodoItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTodoItemResolver = class UpdateManyTodoItemResolver {
    async updateManyTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyTodoItemResolver = UpdateManyTodoItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTodoItemArgs_1.UpdateManyTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTodoItemResolver.prototype, "updateManyTodoItem", null);
exports.UpdateManyTodoItemResolver = UpdateManyTodoItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TodoItem_1.TodoItem)
], UpdateManyTodoItemResolver);
