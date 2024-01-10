"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePostHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryUpdateInput_1 = require("../../../inputs/PostHistoryUpdateInput");
const PostHistoryWhereUniqueInput_1 = require("../../../inputs/PostHistoryWhereUniqueInput");
let UpdateOnePostHistoryArgs = class UpdateOnePostHistoryArgs {
    data;
    where;
};
exports.UpdateOnePostHistoryArgs = UpdateOnePostHistoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryUpdateInput_1.PostHistoryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryUpdateInput_1.PostHistoryUpdateInput)
], UpdateOnePostHistoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput)
], UpdateOnePostHistoryArgs.prototype, "where", void 0);
exports.UpdateOnePostHistoryArgs = UpdateOnePostHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePostHistoryArgs);
