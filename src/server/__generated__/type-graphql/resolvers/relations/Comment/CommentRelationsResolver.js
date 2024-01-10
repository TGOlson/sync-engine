"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Post_1 = require("../../../models/Post");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let CommentRelationsResolver = class CommentRelationsResolver {
    async author(comment, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findUniqueOrThrow({
            where: {
                id: comment.id,
            },
        }).author({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async post(comment, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findUniqueOrThrow({
            where: {
                id: comment.id,
            },
        }).post({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CommentRelationsResolver = CommentRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Comment_1.Comment, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Post_1.Post, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Comment_1.Comment, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentRelationsResolver.prototype, "post", null);
exports.CommentRelationsResolver = CommentRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comment_1.Comment)
], CommentRelationsResolver);
