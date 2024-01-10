"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryUpdateWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryUpdateWithoutPostInput_1 = require("../inputs/PostHistoryUpdateWithoutPostInput");
const PostHistoryWhereUniqueInput_1 = require("../inputs/PostHistoryWhereUniqueInput");
let PostHistoryUpdateWithWhereUniqueWithoutPostInput = class PostHistoryUpdateWithWhereUniqueWithoutPostInput {
    where;
    data;
};
exports.PostHistoryUpdateWithWhereUniqueWithoutPostInput = PostHistoryUpdateWithWhereUniqueWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput)
], PostHistoryUpdateWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryUpdateWithoutPostInput_1.PostHistoryUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryUpdateWithoutPostInput_1.PostHistoryUpdateWithoutPostInput)
], PostHistoryUpdateWithWhereUniqueWithoutPostInput.prototype, "data", void 0);
exports.PostHistoryUpdateWithWhereUniqueWithoutPostInput = PostHistoryUpdateWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryUpdateWithWhereUniqueWithoutPostInput", {})
], PostHistoryUpdateWithWhereUniqueWithoutPostInput);
