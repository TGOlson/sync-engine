"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTodoItemArgs_1 = require("./args/AggregateTodoItemArgs");
const CreateManyTodoItemArgs_1 = require("./args/CreateManyTodoItemArgs");
const CreateOneTodoItemArgs_1 = require("./args/CreateOneTodoItemArgs");
const DeleteManyTodoItemArgs_1 = require("./args/DeleteManyTodoItemArgs");
const DeleteOneTodoItemArgs_1 = require("./args/DeleteOneTodoItemArgs");
const FindFirstTodoItemArgs_1 = require("./args/FindFirstTodoItemArgs");
const FindFirstTodoItemOrThrowArgs_1 = require("./args/FindFirstTodoItemOrThrowArgs");
const FindManyTodoItemArgs_1 = require("./args/FindManyTodoItemArgs");
const FindUniqueTodoItemArgs_1 = require("./args/FindUniqueTodoItemArgs");
const FindUniqueTodoItemOrThrowArgs_1 = require("./args/FindUniqueTodoItemOrThrowArgs");
const GroupByTodoItemArgs_1 = require("./args/GroupByTodoItemArgs");
const UpdateManyTodoItemArgs_1 = require("./args/UpdateManyTodoItemArgs");
const UpdateOneTodoItemArgs_1 = require("./args/UpdateOneTodoItemArgs");
const UpsertOneTodoItemArgs_1 = require("./args/UpsertOneTodoItemArgs");
const helpers_1 = require("../../../helpers");
const TodoItem_1 = require("../../../models/TodoItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTodoItem_1 = require("../../outputs/AggregateTodoItem");
const TodoItemGroupBy_1 = require("../../outputs/TodoItemGroupBy");
let TodoItemCrudResolver = class TodoItemCrudResolver {
    async aggregateTodoItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTodoItemOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async todoItems(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async todoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTodoItem(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTodoItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TodoItemCrudResolver = TodoItemCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTodoItem_1.AggregateTodoItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTodoItemArgs_1.AggregateTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoItemCrudResolver.prototype, "aggregateTodoItem", null);
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
], TodoItemCrudResolver.prototype, "createManyTodoItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TodoItem_1.TodoItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTodoItemArgs_1.CreateOneTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoItemCrudResolver.prototype, "createOneTodoItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTodoItemArgs_1.DeleteManyTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoItemCrudResolver.prototype, "deleteManyTodoItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TodoItem_1.TodoItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTodoItemArgs_1.DeleteOneTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoItemCrudResolver.prototype, "deleteOneTodoItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TodoItem_1.TodoItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTodoItemArgs_1.FindFirstTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoItemCrudResolver.prototype, "findFirstTodoItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TodoItem_1.TodoItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTodoItemOrThrowArgs_1.FindFirstTodoItemOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoItemCrudResolver.prototype, "findFirstTodoItemOrThrow", null);
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
], TodoItemCrudResolver.prototype, "todoItems", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TodoItem_1.TodoItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTodoItemArgs_1.FindUniqueTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoItemCrudResolver.prototype, "todoItem", null);
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
], TodoItemCrudResolver.prototype, "getTodoItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TodoItemGroupBy_1.TodoItemGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTodoItemArgs_1.GroupByTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoItemCrudResolver.prototype, "groupByTodoItem", null);
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
], TodoItemCrudResolver.prototype, "updateManyTodoItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TodoItem_1.TodoItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTodoItemArgs_1.UpdateOneTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoItemCrudResolver.prototype, "updateOneTodoItem", null);
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
], TodoItemCrudResolver.prototype, "upsertOneTodoItem", null);
exports.TodoItemCrudResolver = TodoItemCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TodoItem_1.TodoItem)
], TodoItemCrudResolver);
