"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePostHistoryOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniquePostHistoryOrThrowArgs_1 = require("./args/FindUniquePostHistoryOrThrowArgs");
const PostHistory_1 = require("../../../models/PostHistory");
const helpers_1 = require("../../../helpers");
let FindUniquePostHistoryOrThrowResolver = class FindUniquePostHistoryOrThrowResolver {
    async getPostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniquePostHistoryOrThrowResolver = FindUniquePostHistoryOrThrowResolver;
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
], FindUniquePostHistoryOrThrowResolver.prototype, "getPostHistory", null);
exports.FindUniquePostHistoryOrThrowResolver = FindUniquePostHistoryOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PostHistory_1.PostHistory)
], FindUniquePostHistoryOrThrowResolver);
