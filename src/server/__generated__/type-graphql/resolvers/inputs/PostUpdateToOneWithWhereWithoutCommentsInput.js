"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateToOneWithWhereWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutCommentsInput_1 = require("../inputs/PostUpdateWithoutCommentsInput");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostUpdateToOneWithWhereWithoutCommentsInput = class PostUpdateToOneWithWhereWithoutCommentsInput {
    where;
    data;
};
exports.PostUpdateToOneWithWhereWithoutCommentsInput = PostUpdateToOneWithWhereWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostUpdateToOneWithWhereWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutCommentsInput_1.PostUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutCommentsInput_1.PostUpdateWithoutCommentsInput)
], PostUpdateToOneWithWhereWithoutCommentsInput.prototype, "data", void 0);
exports.PostUpdateToOneWithWhereWithoutCommentsInput = PostUpdateToOneWithWhereWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutCommentsInput", {})
], PostUpdateToOneWithWhereWithoutCommentsInput);
