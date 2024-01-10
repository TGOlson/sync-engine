"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPostHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByPostHistoryArgs_1 = require("./args/GroupByPostHistoryArgs");
const PostHistory_1 = require("../../../models/PostHistory");
const PostHistoryGroupBy_1 = require("../../outputs/PostHistoryGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPostHistoryResolver = class GroupByPostHistoryResolver {
    async groupByPostHistory(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByPostHistoryResolver = GroupByPostHistoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PostHistoryGroupBy_1.PostHistoryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPostHistoryArgs_1.GroupByPostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPostHistoryResolver.prototype, "groupByPostHistory", null);
exports.GroupByPostHistoryResolver = GroupByPostHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PostHistory_1.PostHistory)
], GroupByPostHistoryResolver);
