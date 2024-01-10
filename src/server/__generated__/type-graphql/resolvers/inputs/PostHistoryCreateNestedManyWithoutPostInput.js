"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryCreateNestedManyWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryCreateOrConnectWithoutPostInput_1 = require("../inputs/PostHistoryCreateOrConnectWithoutPostInput");
const PostHistoryCreateWithoutPostInput_1 = require("../inputs/PostHistoryCreateWithoutPostInput");
const PostHistoryWhereUniqueInput_1 = require("../inputs/PostHistoryWhereUniqueInput");
let PostHistoryCreateNestedManyWithoutPostInput = class PostHistoryCreateNestedManyWithoutPostInput {
    create;
    connectOrCreate;
    connect;
};
exports.PostHistoryCreateNestedManyWithoutPostInput = PostHistoryCreateNestedManyWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryCreateWithoutPostInput_1.PostHistoryCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryCreateNestedManyWithoutPostInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryCreateOrConnectWithoutPostInput_1.PostHistoryCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryCreateNestedManyWithoutPostInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryCreateNestedManyWithoutPostInput.prototype, "connect", void 0);
exports.PostHistoryCreateNestedManyWithoutPostInput = PostHistoryCreateNestedManyWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryCreateNestedManyWithoutPostInput", {})
], PostHistoryCreateNestedManyWithoutPostInput);
