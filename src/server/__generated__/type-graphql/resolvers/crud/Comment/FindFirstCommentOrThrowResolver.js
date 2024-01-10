"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCommentOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCommentOrThrowArgs_1 = require("./args/FindFirstCommentOrThrowArgs");
const Comment_1 = require("../../../models/Comment");
const helpers_1 = require("../../../helpers");
let FindFirstCommentOrThrowResolver = class FindFirstCommentOrThrowResolver {
    async findFirstCommentOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstCommentOrThrowResolver = FindFirstCommentOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCommentOrThrowArgs_1.FindFirstCommentOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCommentOrThrowResolver.prototype, "findFirstCommentOrThrow", null);
exports.FindFirstCommentOrThrowResolver = FindFirstCommentOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comment_1.Comment)
], FindFirstCommentOrThrowResolver);
