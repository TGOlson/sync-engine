"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePostResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOnePostArgs_1 = require("./args/DeleteOnePostArgs");
const Post_1 = require("../../../models/Post");
const helpers_1 = require("../../../helpers");
let DeleteOnePostResolver = class DeleteOnePostResolver {
    async deleteOnePost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).post.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOnePostResolver = DeleteOnePostResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePostArgs_1.DeleteOnePostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOnePostResolver.prototype, "deleteOnePost", null);
exports.DeleteOnePostResolver = DeleteOnePostResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], DeleteOnePostResolver);
