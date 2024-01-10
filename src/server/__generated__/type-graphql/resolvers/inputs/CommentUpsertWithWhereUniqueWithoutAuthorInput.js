"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutAuthorInput_1 = require("../inputs/CommentCreateWithoutAuthorInput");
const CommentUpdateWithoutAuthorInput_1 = require("../inputs/CommentUpdateWithoutAuthorInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpsertWithWhereUniqueWithoutAuthorInput = class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    where;
    update;
    create;
};
exports.CommentUpsertWithWhereUniqueWithoutAuthorInput = CommentUpsertWithWhereUniqueWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutAuthorInput_1.CommentUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutAuthorInput_1.CommentUpdateWithoutAuthorInput)
], CommentUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutAuthorInput_1.CommentCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutAuthorInput_1.CommentCreateWithoutAuthorInput)
], CommentUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
exports.CommentUpsertWithWhereUniqueWithoutAuthorInput = CommentUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutAuthorInput", {})
], CommentUpsertWithWhereUniqueWithoutAuthorInput);
