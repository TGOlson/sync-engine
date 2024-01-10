"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPostHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyPostHistoryArgs_1 = require("./args/DeleteManyPostHistoryArgs");
const PostHistory_1 = require("../../../models/PostHistory");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyPostHistoryResolver = class DeleteManyPostHistoryResolver {
    async deleteManyPostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyPostHistoryResolver = DeleteManyPostHistoryResolver;
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
], DeleteManyPostHistoryResolver.prototype, "deleteManyPostHistory", null);
exports.DeleteManyPostHistoryResolver = DeleteManyPostHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PostHistory_1.PostHistory)
], DeleteManyPostHistoryResolver);
