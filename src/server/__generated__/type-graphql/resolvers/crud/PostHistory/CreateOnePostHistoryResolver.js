"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePostHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOnePostHistoryArgs_1 = require("./args/CreateOnePostHistoryArgs");
const PostHistory_1 = require("../../../models/PostHistory");
const helpers_1 = require("../../../helpers");
let CreateOnePostHistoryResolver = class CreateOnePostHistoryResolver {
    async createOnePostHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).postHistory.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOnePostHistoryResolver = CreateOnePostHistoryResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PostHistory_1.PostHistory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePostHistoryArgs_1.CreateOnePostHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOnePostHistoryResolver.prototype, "createOnePostHistory", null);
exports.CreateOnePostHistoryResolver = CreateOnePostHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PostHistory_1.PostHistory)
], CreateOnePostHistoryResolver);
