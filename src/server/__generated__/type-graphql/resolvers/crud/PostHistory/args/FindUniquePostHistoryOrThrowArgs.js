"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePostHistoryOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryWhereUniqueInput_1 = require("../../../inputs/PostHistoryWhereUniqueInput");
let FindUniquePostHistoryOrThrowArgs = class FindUniquePostHistoryOrThrowArgs {
    where;
};
exports.FindUniquePostHistoryOrThrowArgs = FindUniquePostHistoryOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput)
], FindUniquePostHistoryOrThrowArgs.prototype, "where", void 0);
exports.FindUniquePostHistoryOrThrowArgs = FindUniquePostHistoryOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePostHistoryOrThrowArgs);
