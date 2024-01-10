"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryCreateOrConnectWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryCreateWithoutPostInput_1 = require("../inputs/PostHistoryCreateWithoutPostInput");
const PostHistoryWhereUniqueInput_1 = require("../inputs/PostHistoryWhereUniqueInput");
let PostHistoryCreateOrConnectWithoutPostInput = class PostHistoryCreateOrConnectWithoutPostInput {
    where;
    create;
};
exports.PostHistoryCreateOrConnectWithoutPostInput = PostHistoryCreateOrConnectWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput)
], PostHistoryCreateOrConnectWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryCreateWithoutPostInput_1.PostHistoryCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryCreateWithoutPostInput_1.PostHistoryCreateWithoutPostInput)
], PostHistoryCreateOrConnectWithoutPostInput.prototype, "create", void 0);
exports.PostHistoryCreateOrConnectWithoutPostInput = PostHistoryCreateOrConnectWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryCreateOrConnectWithoutPostInput", {})
], PostHistoryCreateOrConnectWithoutPostInput);
