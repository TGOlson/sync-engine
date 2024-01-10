"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyMutationInput_1 = require("../inputs/CommentUpdateManyMutationInput");
let CommentUpdateManyWithWhereWithoutAuthorInput = class CommentUpdateManyWithWhereWithoutAuthorInput {
    where;
    data;
};
exports.CommentUpdateManyWithWhereWithoutAuthorInput = CommentUpdateManyWithWhereWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentScalarWhereInput_1.CommentScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentScalarWhereInput_1.CommentScalarWhereInput)
], CommentUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyMutationInput_1.CommentUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyMutationInput_1.CommentUpdateManyMutationInput)
], CommentUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
exports.CommentUpdateManyWithWhereWithoutAuthorInput = CommentUpdateManyWithWhereWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithWhereWithoutAuthorInput", {})
], CommentUpdateManyWithWhereWithoutAuthorInput);
