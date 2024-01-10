"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithoutPostNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateOrConnectWithoutPostInput_1 = require("../inputs/CommentCreateOrConnectWithoutPostInput");
const CommentCreateWithoutPostInput_1 = require("../inputs/CommentCreateWithoutPostInput");
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyWithWhereWithoutPostInput_1 = require("../inputs/CommentUpdateManyWithWhereWithoutPostInput");
const CommentUpdateWithWhereUniqueWithoutPostInput_1 = require("../inputs/CommentUpdateWithWhereUniqueWithoutPostInput");
const CommentUpsertWithWhereUniqueWithoutPostInput_1 = require("../inputs/CommentUpsertWithWhereUniqueWithoutPostInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateManyWithoutPostNestedInput = class CommentUpdateManyWithoutPostNestedInput {
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
exports.CommentUpdateManyWithoutPostNestedInput = CommentUpdateManyWithoutPostNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutPostInput_1.CommentCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutPostInput_1.CommentCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutPostInput_1.CommentUpsertWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutPostInput_1.CommentUpdateWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutPostInput_1.CommentUpdateManyWithWhereWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput_1.CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostNestedInput.prototype, "deleteMany", void 0);
exports.CommentUpdateManyWithoutPostNestedInput = CommentUpdateManyWithoutPostNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithoutPostNestedInput", {})
], CommentUpdateManyWithoutPostNestedInput);
