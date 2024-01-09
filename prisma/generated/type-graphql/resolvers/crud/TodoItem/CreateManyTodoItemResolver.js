"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTodoItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyTodoItemArgs_1 = require("./args/CreateManyTodoItemArgs");
const TodoItem_1 = require("../../../models/TodoItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTodoItemResolver = class CreateManyTodoItemResolver {
    async createManyTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyTodoItemResolver = CreateManyTodoItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTodoItemArgs_1.CreateManyTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTodoItemResolver.prototype, "createManyTodoItem", null);
exports.CreateManyTodoItemResolver = CreateManyTodoItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TodoItem_1.TodoItem)
], CreateManyTodoItemResolver);
