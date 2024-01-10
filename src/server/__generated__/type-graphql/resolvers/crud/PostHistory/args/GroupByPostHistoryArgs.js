"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPostHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryOrderByWithAggregationInput_1 = require("../../../inputs/PostHistoryOrderByWithAggregationInput");
const PostHistoryScalarWhereWithAggregatesInput_1 = require("../../../inputs/PostHistoryScalarWhereWithAggregatesInput");
const PostHistoryWhereInput_1 = require("../../../inputs/PostHistoryWhereInput");
const PostHistoryScalarFieldEnum_1 = require("../../../../enums/PostHistoryScalarFieldEnum");
let GroupByPostHistoryArgs = class GroupByPostHistoryArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupByPostHistoryArgs = GroupByPostHistoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereInput_1.PostHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereInput_1.PostHistoryWhereInput)
], GroupByPostHistoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryOrderByWithAggregationInput_1.PostHistoryOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPostHistoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryScalarFieldEnum_1.PostHistoryScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPostHistoryArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryScalarWhereWithAggregatesInput_1.PostHistoryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryScalarWhereWithAggregatesInput_1.PostHistoryScalarWhereWithAggregatesInput)
], GroupByPostHistoryArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPostHistoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPostHistoryArgs.prototype, "skip", void 0);
exports.GroupByPostHistoryArgs = GroupByPostHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPostHistoryArgs);
