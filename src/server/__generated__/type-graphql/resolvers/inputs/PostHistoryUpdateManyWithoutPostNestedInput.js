"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryUpdateManyWithoutPostNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryCreateOrConnectWithoutPostInput_1 = require("../inputs/PostHistoryCreateOrConnectWithoutPostInput");
const PostHistoryCreateWithoutPostInput_1 = require("../inputs/PostHistoryCreateWithoutPostInput");
const PostHistoryScalarWhereInput_1 = require("../inputs/PostHistoryScalarWhereInput");
const PostHistoryUpdateManyWithWhereWithoutPostInput_1 = require("../inputs/PostHistoryUpdateManyWithWhereWithoutPostInput");
const PostHistoryUpdateWithWhereUniqueWithoutPostInput_1 = require("../inputs/PostHistoryUpdateWithWhereUniqueWithoutPostInput");
const PostHistoryUpsertWithWhereUniqueWithoutPostInput_1 = require("../inputs/PostHistoryUpsertWithWhereUniqueWithoutPostInput");
const PostHistoryWhereUniqueInput_1 = require("../inputs/PostHistoryWhereUniqueInput");
let PostHistoryUpdateManyWithoutPostNestedInput = class PostHistoryUpdateManyWithoutPostNestedInput {
    create;
    connectOrCreate;
    upsert;
    set;
    disconnect;
    delete;
    connect;
    update;
    updateMany;
    deleteMany;
};
exports.PostHistoryUpdateManyWithoutPostNestedInput = PostHistoryUpdateManyWithoutPostNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryCreateWithoutPostInput_1.PostHistoryCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryUpdateManyWithoutPostNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryCreateOrConnectWithoutPostInput_1.PostHistoryCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryUpdateManyWithoutPostNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryUpsertWithWhereUniqueWithoutPostInput_1.PostHistoryUpsertWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryUpdateManyWithoutPostNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryUpdateManyWithoutPostNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryUpdateManyWithoutPostNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryUpdateManyWithoutPostNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryWhereUniqueInput_1.PostHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryUpdateManyWithoutPostNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryUpdateWithWhereUniqueWithoutPostInput_1.PostHistoryUpdateWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryUpdateManyWithoutPostNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryUpdateManyWithWhereWithoutPostInput_1.PostHistoryUpdateManyWithWhereWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryUpdateManyWithoutPostNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostHistoryScalarWhereInput_1.PostHistoryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostHistoryUpdateManyWithoutPostNestedInput.prototype, "deleteMany", void 0);
exports.PostHistoryUpdateManyWithoutPostNestedInput = PostHistoryUpdateManyWithoutPostNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryUpdateManyWithoutPostNestedInput", {})
], PostHistoryUpdateManyWithoutPostNestedInput);
