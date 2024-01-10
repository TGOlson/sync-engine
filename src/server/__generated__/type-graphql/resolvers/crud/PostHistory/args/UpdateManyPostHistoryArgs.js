"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPostHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryUpdateManyMutationInput_1 = require("../../../inputs/PostHistoryUpdateManyMutationInput");
const PostHistoryWhereInput_1 = require("../../../inputs/PostHistoryWhereInput");
let UpdateManyPostHistoryArgs = class UpdateManyPostHistoryArgs {
    data;
    where;
};
exports.UpdateManyPostHistoryArgs = UpdateManyPostHistoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryUpdateManyMutationInput_1.PostHistoryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryUpdateManyMutationInput_1.PostHistoryUpdateManyMutationInput)
], UpdateManyPostHistoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereInput_1.PostHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereInput_1.PostHistoryWhereInput)
], UpdateManyPostHistoryArgs.prototype, "where", void 0);
exports.UpdateManyPostHistoryArgs = UpdateManyPostHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPostHistoryArgs);
