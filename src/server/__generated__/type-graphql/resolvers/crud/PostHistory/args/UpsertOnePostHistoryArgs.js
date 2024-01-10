"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePostHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryCreateInput_1 = require("../../../inputs/PostHistoryCreateInput");
const PostHistoryUpdateInput_1 = require("../../../inputs/PostHistoryUpdateInput");
const PostHistoryWhereUniqueInput_1 = require("../../../inputs/PostHistoryWhereUniqueInput");
let UpsertOnePostHistoryArgs = class UpsertOnePostHistoryArgs {
    where;
    create;
    update;
};
exports.UpsertOnePostHistoryArgs = UpsertOnePostHistoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput)
], UpsertOnePostHistoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryCreateInput_1.PostHistoryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryCreateInput_1.PostHistoryCreateInput)
], UpsertOnePostHistoryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryUpdateInput_1.PostHistoryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryUpdateInput_1.PostHistoryUpdateInput)
], UpsertOnePostHistoryArgs.prototype, "update", void 0);
exports.UpsertOnePostHistoryArgs = UpsertOnePostHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePostHistoryArgs);
