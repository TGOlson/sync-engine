"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePostHistoryArgs_1 = require("./args/AggregatePostHistoryArgs");
const CreateOnePostHistoryArgs_1 = require("./args/CreateOnePostHistoryArgs");
const DeleteManyPostHistoryArgs_1 = require("./args/DeleteManyPostHistoryArgs");
const DeleteOnePostHistoryArgs_1 = require("./args/DeleteOnePostHistoryArgs");
const FindFirstPostHistoryArgs_1 = require("./args/FindFirstPostHistoryArgs");
const FindFirstPostHistoryOrThrowArgs_1 = require("./args/FindFirstPostHistoryOrThrowArgs");
const FindManyPostHistoryArgs_1 = require("./args/FindManyPostHistoryArgs");
const FindUniquePostHistoryArgs_1 = require("./args/FindUniquePostHistoryArgs");
const FindUniquePostHistoryOrThrowArgs_1 = require("./args/FindUniquePostHistoryOrThrowArgs");
const GroupByPostHistoryArgs_1 = require("./args/GroupByPostHistoryArgs");
const UpdateManyPostHistoryArgs_1 = require("./args/UpdateManyPostHistoryArgs");
const UpdateOnePostHistoryArgs_1 = require("./args/UpdateOnePostHistoryArgs");
const UpsertOnePostHistoryArgs_1 = require("./args/UpsertOnePostHistoryArgs");
const helpers_1 = require("../../../helpers");
const PostHistory_1 = require("../../../models/PostHistory");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePostHistory_1 = require("../../outputs/AggregatePostHistory");
const PostHistoryGroupBy_1 = require("../../outputs/PostHistoryGroupBy");
let PostHistoryCrudResolver = class PostHistoryCrudResolver {
    async aggregatePostHistory(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createOnePostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOnePostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPostHistoryOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async postHistories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async postHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getPostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByPostHistory(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyPostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOnePostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOnePostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.PostHistoryCrudResolver = PostHistoryCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePostHistory_1.AggregatePostHistory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePostHistoryArgs_1.AggregatePostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "aggregatePostHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PostHistory_1.PostHistory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePostHistoryArgs_1.CreateOnePostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "createOnePostHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPostHistoryArgs_1.DeleteManyPostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "deleteManyPostHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PostHistory_1.PostHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePostHistoryArgs_1.DeleteOnePostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "deleteOnePostHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => PostHistory_1.PostHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPostHistoryArgs_1.FindFirstPostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "findFirstPostHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => PostHistory_1.PostHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPostHistoryOrThrowArgs_1.FindFirstPostHistoryOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "findFirstPostHistoryOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PostHistory_1.PostHistory], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPostHistoryArgs_1.FindManyPostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "postHistories", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => PostHistory_1.PostHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePostHistoryArgs_1.FindUniquePostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "postHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => PostHistory_1.PostHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePostHistoryOrThrowArgs_1.FindUniquePostHistoryOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "getPostHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PostHistoryGroupBy_1.PostHistoryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPostHistoryArgs_1.GroupByPostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "groupByPostHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPostHistoryArgs_1.UpdateManyPostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "updateManyPostHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PostHistory_1.PostHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePostHistoryArgs_1.UpdateOnePostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "updateOnePostHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PostHistory_1.PostHistory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePostHistoryArgs_1.UpsertOnePostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryCrudResolver.prototype, "upsertOnePostHistory", null);
exports.PostHistoryCrudResolver = PostHistoryCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PostHistory_1.PostHistory)
], PostHistoryCrudResolver);
