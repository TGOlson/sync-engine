"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePostHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryOrderByWithRelationInput_1 = require("../../../inputs/PostHistoryOrderByWithRelationInput");
const PostHistoryWhereInput_1 = require("../../../inputs/PostHistoryWhereInput");
const PostHistoryWhereUniqueInput_1 = require("../../../inputs/PostHistoryWhereUniqueInput");
let AggregatePostHistoryArgs = class AggregatePostHistoryArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
};
exports.AggregatePostHistoryArgs = AggregatePostHistoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereInput_1.PostHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereInput_1.PostHistoryWhereInput)
], AggregatePostHistoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryOrderByWithRelationInput_1.PostHistoryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePostHistoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput)
], AggregatePostHistoryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePostHistoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePostHistoryArgs.prototype, "skip", void 0);
exports.AggregatePostHistoryArgs = AggregatePostHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePostHistoryArgs);
