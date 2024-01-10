"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithoutAuthorNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateOrConnectWithoutAuthorInput_1 = require("../inputs/CommentCreateOrConnectWithoutAuthorInput");
const CommentCreateWithoutAuthorInput_1 = require("../inputs/CommentCreateWithoutAuthorInput");
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/CommentUpdateManyWithWhereWithoutAuthorInput");
const CommentUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/CommentUpdateWithWhereUniqueWithoutAuthorInput");
const CommentUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/CommentUpsertWithWhereUniqueWithoutAuthorInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateManyWithoutAuthorNestedInput = class CommentUpdateManyWithoutAuthorNestedInput {
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
exports.CommentUpdateManyWithoutAuthorNestedInput = CommentUpdateManyWithoutAuthorNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutAuthorInput_1.CommentCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutAuthorNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutAuthorInput_1.CommentCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutAuthorNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutAuthorInput_1.CommentUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutAuthorNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutAuthorNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutAuthorNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutAuthorNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutAuthorNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutAuthorInput_1.CommentUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutAuthorNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutAuthorInput_1.CommentUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutAuthorNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput_1.CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutAuthorNestedInput.prototype, "deleteMany", void 0);
exports.CommentUpdateManyWithoutAuthorNestedInput = CommentUpdateManyWithoutAuthorNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithoutAuthorNestedInput", {})
], CommentUpdateManyWithoutAuthorNestedInput);
