"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPostHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryWhereInput_1 = require("../../../inputs/PostHistoryWhereInput");
let DeleteManyPostHistoryArgs = class DeleteManyPostHistoryArgs {
    where;
};
exports.DeleteManyPostHistoryArgs = DeleteManyPostHistoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereInput_1.PostHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereInput_1.PostHistoryWhereInput)
], DeleteManyPostHistoryArgs.prototype, "where", void 0);
exports.DeleteManyPostHistoryArgs = DeleteManyPostHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPostHistoryArgs);
