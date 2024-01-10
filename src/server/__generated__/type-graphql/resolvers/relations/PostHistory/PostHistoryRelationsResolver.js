"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Post_1 = require("../../../models/Post");
const PostHistory_1 = require("../../../models/PostHistory");
const helpers_1 = require("../../../helpers");
let PostHistoryRelationsResolver = class PostHistoryRelationsResolver {
    async post(postHistory, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.findUniqueOrThrow({
            where: {
                id: postHistory.id,
            },
        }).post({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.PostHistoryRelationsResolver = PostHistoryRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Post_1.Post, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PostHistory_1.PostHistory, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostHistoryRelationsResolver.prototype, "post", null);
exports.PostHistoryRelationsResolver = PostHistoryRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PostHistory_1.PostHistory)
], PostHistoryRelationsResolver);
