"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePostHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryWhereUniqueInput_1 = require("../../../inputs/PostHistoryWhereUniqueInput");
let DeleteOnePostHistoryArgs = class DeleteOnePostHistoryArgs {
    where;
};
exports.DeleteOnePostHistoryArgs = DeleteOnePostHistoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput)
], DeleteOnePostHistoryArgs.prototype, "where", void 0);
exports.DeleteOnePostHistoryArgs = DeleteOnePostHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOnePostHistoryArgs);
