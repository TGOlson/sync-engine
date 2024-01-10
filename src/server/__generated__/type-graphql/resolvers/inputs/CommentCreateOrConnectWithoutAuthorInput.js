"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutAuthorInput_1 = require("../inputs/CommentCreateWithoutAuthorInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateOrConnectWithoutAuthorInput = class CommentCreateOrConnectWithoutAuthorInput {
    where;
    create;
};
exports.CommentCreateOrConnectWithoutAuthorInput = CommentCreateOrConnectWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutAuthorInput_1.CommentCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutAuthorInput_1.CommentCreateWithoutAuthorInput)
], CommentCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
exports.CommentCreateOrConnectWithoutAuthorInput = CommentCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateOrConnectWithoutAuthorInput", {})
], CommentCreateOrConnectWithoutAuthorInput);
