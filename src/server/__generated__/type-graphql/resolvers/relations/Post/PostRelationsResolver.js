"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Post_1 = require("../../../models/Post");
const PostHistory_1 = require("../../../models/PostHistory");
const User_1 = require("../../../models/User");
const PostCommentsArgs_1 = require("./args/PostCommentsArgs");
const PostPostHistoryArgs_1 = require("./args/PostPostHistoryArgs");
const helpers_1 = require("../../../helpers");
let PostRelationsResolver = class PostRelationsResolver {
    async postHistory(post, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUniqueOrThrow({
            where: {
                id: post.id,
            },
        }).postHistory({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async author(post, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUniqueOrThrow({
            where: {
                id: post.id,
            },
        }).author({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async comments(post, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUniqueOrThrow({
            where: {
                id: post.id,
            },
        }).comments({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.PostRelationsResolver = PostRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [PostHistory_1.PostHistory], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object, Object, PostPostHistoryArgs_1.PostPostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "postHistory", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Comment_1.Comment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object, Object, PostCommentsArgs_1.PostCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "comments", null);
exports.PostRelationsResolver = PostRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostRelationsResolver);
