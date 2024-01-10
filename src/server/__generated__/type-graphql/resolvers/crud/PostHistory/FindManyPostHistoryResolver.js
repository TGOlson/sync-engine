"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPostHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyPostHistoryArgs_1 = require("./args/FindManyPostHistoryArgs");
const PostHistory_1 = require("../../../models/PostHistory");
const helpers_1 = require("../../../helpers");
let FindManyPostHistoryResolver = class FindManyPostHistoryResolver {
    async postHistories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyPostHistoryResolver = FindManyPostHistoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PostHistory_1.PostHistory], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPostHistoryArgs_1.FindManyPostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyPostHistoryResolver.prototype, "postHistories", null);
exports.FindManyPostHistoryResolver = FindManyPostHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PostHistory_1.PostHistory)
], FindManyPostHistoryResolver);
