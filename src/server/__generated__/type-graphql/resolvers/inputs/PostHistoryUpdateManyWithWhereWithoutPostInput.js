"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryUpdateManyWithWhereWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryScalarWhereInput_1 = require("../inputs/PostHistoryScalarWhereInput");
const PostHistoryUpdateManyMutationInput_1 = require("../inputs/PostHistoryUpdateManyMutationInput");
let PostHistoryUpdateManyWithWhereWithoutPostInput = class PostHistoryUpdateManyWithWhereWithoutPostInput {
    where;
    data;
};
exports.PostHistoryUpdateManyWithWhereWithoutPostInput = PostHistoryUpdateManyWithWhereWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryScalarWhereInput_1.PostHistoryScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryScalarWhereInput_1.PostHistoryScalarWhereInput)
], PostHistoryUpdateManyWithWhereWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryUpdateManyMutationInput_1.PostHistoryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostHistoryUpdateManyMutationInput_1.PostHistoryUpdateManyMutationInput)
], PostHistoryUpdateManyWithWhereWithoutPostInput.prototype, "data", void 0);
exports.PostHistoryUpdateManyWithWhereWithoutPostInput = PostHistoryUpdateManyWithWhereWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryUpdateManyWithWhereWithoutPostInput", {})
], PostHistoryUpdateManyWithWhereWithoutPostInput);
