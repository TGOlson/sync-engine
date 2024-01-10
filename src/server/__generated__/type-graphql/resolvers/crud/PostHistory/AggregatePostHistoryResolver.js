"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePostHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePostHistoryArgs_1 = require("./args/AggregatePostHistoryArgs");
const PostHistory_1 = require("../../../models/PostHistory");
const AggregatePostHistory_1 = require("../../outputs/AggregatePostHistory");
const helpers_1 = require("../../../helpers");
let AggregatePostHistoryResolver = class AggregatePostHistoryResolver {
    async aggregatePostHistory(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregatePostHistoryResolver = AggregatePostHistoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePostHistory_1.AggregatePostHistory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePostHistoryArgs_1.AggregatePostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePostHistoryResolver.prototype, "aggregatePostHistory", null);
exports.AggregatePostHistoryResolver = AggregatePostHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PostHistory_1.PostHistory)
], AggregatePostHistoryResolver);
