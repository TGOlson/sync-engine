"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPostHistoryOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryOrderByWithRelationInput_1 = require("../../../inputs/PostHistoryOrderByWithRelationInput");
const PostHistoryWhereInput_1 = require("../../../inputs/PostHistoryWhereInput");
const PostHistoryWhereUniqueInput_1 = require("../../../inputs/PostHistoryWhereUniqueInput");
const PostHistoryScalarFieldEnum_1 = require("../../../../enums/PostHistoryScalarFieldEnum");
let FindFirstPostHistoryOrThrowArgs = class FindFirstPostHistoryOrThrowArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstPostHistoryOrThrowArgs = FindFirstPostHistoryOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereInput_1.PostHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereInput_1.PostHistoryWhereInput)
], FindFirstPostHistoryOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryOrderByWithRelationInput_1.PostHistoryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPostHistoryOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput)
], FindFirstPostHistoryOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPostHistoryOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPostHistoryOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryScalarFieldEnum_1.PostHistoryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPostHistoryOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstPostHistoryOrThrowArgs = FindFirstPostHistoryOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPostHistoryOrThrowArgs);
