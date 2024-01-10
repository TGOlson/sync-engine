"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostPostHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryOrderByWithRelationInput_1 = require("../../../inputs/PostHistoryOrderByWithRelationInput");
const PostHistoryWhereInput_1 = require("../../../inputs/PostHistoryWhereInput");
const PostHistoryWhereUniqueInput_1 = require("../../../inputs/PostHistoryWhereUniqueInput");
const PostHistoryScalarFieldEnum_1 = require("../../../../enums/PostHistoryScalarFieldEnum");
let PostPostHistoryArgs = class PostPostHistoryArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.PostPostHistoryArgs = PostPostHistoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereInput_1.PostHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereInput_1.PostHistoryWhereInput)
], PostPostHistoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryOrderByWithRelationInput_1.PostHistoryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostPostHistoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput)
], PostPostHistoryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PostPostHistoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PostPostHistoryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryScalarFieldEnum_1.PostHistoryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostPostHistoryArgs.prototype, "distinct", void 0);
exports.PostPostHistoryArgs = PostPostHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], PostPostHistoryArgs);
