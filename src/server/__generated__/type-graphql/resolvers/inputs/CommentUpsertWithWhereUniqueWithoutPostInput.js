"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpsertWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutPostInput_1 = require("../inputs/CommentCreateWithoutPostInput");
const CommentUpdateWithoutPostInput_1 = require("../inputs/CommentUpdateWithoutPostInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpsertWithWhereUniqueWithoutPostInput = class CommentUpsertWithWhereUniqueWithoutPostInput {
    where;
    update;
    create;
};
exports.CommentUpsertWithWhereUniqueWithoutPostInput = CommentUpsertWithWhereUniqueWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpsertWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutPostInput_1.CommentUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutPostInput_1.CommentUpdateWithoutPostInput)
], CommentUpsertWithWhereUniqueWithoutPostInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutPostInput_1.CommentCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutPostInput_1.CommentCreateWithoutPostInput)
], CommentUpsertWithWhereUniqueWithoutPostInput.prototype, "create", void 0);
exports.CommentUpsertWithWhereUniqueWithoutPostInput = CommentUpsertWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutPostInput", {})
], CommentUpsertWithWhereUniqueWithoutPostInput);
