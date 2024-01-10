"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryUpsertWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryCreateWithoutPostInput_1 = require("../inputs/PostHistoryCreateWithoutPostInput");
const PostHistoryUpdateWithoutPostInput_1 = require("../inputs/PostHistoryUpdateWithoutPostInput");
const PostHistoryWhereUniqueInput_1 = require("../inputs/PostHistoryWhereUniqueInput");
let PostHistoryUpsertWithWhereUniqueWithoutPostInput = class PostHistoryUpsertWithWhereUniqueWithoutPostInput {
    where;
    update;
    create;
};
exports.PostHistoryUpsertWithWhereUniqueWithoutPostInput = PostHistoryUpsertWithWhereUniqueWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput)
], PostHistoryUpsertWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryUpdateWithoutPostInput_1.PostHistoryUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryUpdateWithoutPostInput_1.PostHistoryUpdateWithoutPostInput)
], PostHistoryUpsertWithWhereUniqueWithoutPostInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryCreateWithoutPostInput_1.PostHistoryCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryCreateWithoutPostInput_1.PostHistoryCreateWithoutPostInput)
], PostHistoryUpsertWithWhereUniqueWithoutPostInput.prototype, "create", void 0);
exports.PostHistoryUpsertWithWhereUniqueWithoutPostInput = PostHistoryUpsertWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryUpsertWithWhereUniqueWithoutPostInput", {})
], PostHistoryUpsertWithWhereUniqueWithoutPostInput);
