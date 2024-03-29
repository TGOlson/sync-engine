"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPostResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyPostArgs_1 = require("./args/DeleteManyPostArgs");
const Post_1 = require("../../../models/Post");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyPostResolver = class DeleteManyPostResolver {
    async deleteManyPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).post.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyPostResolver = DeleteManyPostResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPostArgs_1.DeleteManyPostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyPostResolver.prototype, "deleteManyPost", null);
exports.DeleteManyPostResolver = DeleteManyPostResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], DeleteManyPostResolver);
