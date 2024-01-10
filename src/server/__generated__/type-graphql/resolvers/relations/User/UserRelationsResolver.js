"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Post_1 = require("../../../models/Post");
const User_1 = require("../../../models/User");
const UserCommentsArgs_1 = require("./args/UserCommentsArgs");
const UserPostsArgs_1 = require("./args/UserPostsArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async posts(user, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow({
            where: {
                id: user.id,
            },
        }).posts({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async comments(user, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow({
            where: {
                id: user.id,
            },
        }).comments({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UserRelationsResolver = UserRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, Object, UserPostsArgs_1.UserPostsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "posts", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Comment_1.Comment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, Object, UserCommentsArgs_1.UserCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "comments", null);
exports.UserRelationsResolver = UserRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
