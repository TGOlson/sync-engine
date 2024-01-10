"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateWithoutAuthorInput_1 = require("../inputs/CommentUpdateWithoutAuthorInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateWithWhereUniqueWithoutAuthorInput = class CommentUpdateWithWhereUniqueWithoutAuthorInput {
    where;
    data;
};
exports.CommentUpdateWithWhereUniqueWithoutAuthorInput = CommentUpdateWithWhereUniqueWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutAuthorInput_1.CommentUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutAuthorInput_1.CommentUpdateWithoutAuthorInput)
], CommentUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
exports.CommentUpdateWithWhereUniqueWithoutAuthorInput = CommentUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutAuthorInput", {})
], CommentUpdateWithWhereUniqueWithoutAuthorInput);
