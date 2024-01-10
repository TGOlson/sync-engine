"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateWithoutPostInput_1 = require("../inputs/CommentUpdateWithoutPostInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateWithWhereUniqueWithoutPostInput = class CommentUpdateWithWhereUniqueWithoutPostInput {
    where;
    data;
};
exports.CommentUpdateWithWhereUniqueWithoutPostInput = CommentUpdateWithWhereUniqueWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpdateWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutPostInput_1.CommentUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutPostInput_1.CommentUpdateWithoutPostInput)
], CommentUpdateWithWhereUniqueWithoutPostInput.prototype, "data", void 0);
exports.CommentUpdateWithWhereUniqueWithoutPostInput = CommentUpdateWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutPostInput", {})
], CommentUpdateWithWhereUniqueWithoutPostInput);
