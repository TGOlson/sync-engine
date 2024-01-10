"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePostHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniquePostHistoryArgs_1 = require("./args/FindUniquePostHistoryArgs");
const PostHistory_1 = require("../../../models/PostHistory");
const helpers_1 = require("../../../helpers");
let FindUniquePostHistoryResolver = class FindUniquePostHistoryResolver {
    async postHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniquePostHistoryResolver = FindUniquePostHistoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => PostHistory_1.PostHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePostHistoryArgs_1.FindUniquePostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePostHistoryResolver.prototype, "postHistory", null);
exports.FindUniquePostHistoryResolver = FindUniquePostHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PostHistory_1.PostHistory)
], FindUniquePostHistoryResolver);
