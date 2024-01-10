"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPostHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyPostHistoryArgs_1 = require("./args/UpdateManyPostHistoryArgs");
const PostHistory_1 = require("../../../models/PostHistory");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyPostHistoryResolver = class UpdateManyPostHistoryResolver {
    async updateManyPostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyPostHistoryResolver = UpdateManyPostHistoryResolver;
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
], UpdateManyPostHistoryResolver.prototype, "updateManyPostHistory", null);
exports.UpdateManyPostHistoryResolver = UpdateManyPostHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PostHistory_1.PostHistory)
], UpdateManyPostHistoryResolver);
