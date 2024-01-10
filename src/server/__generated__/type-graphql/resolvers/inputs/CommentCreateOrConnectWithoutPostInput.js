"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateOrConnectWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutPostInput_1 = require("../inputs/CommentCreateWithoutPostInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateOrConnectWithoutPostInput = class CommentCreateOrConnectWithoutPostInput {
    where;
    create;
};
exports.CommentCreateOrConnectWithoutPostInput = CommentCreateOrConnectWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateOrConnectWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutPostInput_1.CommentCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutPostInput_1.CommentCreateWithoutPostInput)
], CommentCreateOrConnectWithoutPostInput.prototype, "create", void 0);
exports.CommentCreateOrConnectWithoutPostInput = CommentCreateOrConnectWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateOrConnectWithoutPostInput", {})
], CommentCreateOrConnectWithoutPostInput);
