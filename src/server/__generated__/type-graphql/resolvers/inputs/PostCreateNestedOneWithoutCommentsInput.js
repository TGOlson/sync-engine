"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedOneWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutCommentsInput_1 = require("../inputs/PostCreateOrConnectWithoutCommentsInput");
const PostCreateWithoutCommentsInput_1 = require("../inputs/PostCreateWithoutCommentsInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedOneWithoutCommentsInput = class PostCreateNestedOneWithoutCommentsInput {
    create;
    connectOrCreate;
    connect;
};
exports.PostCreateNestedOneWithoutCommentsInput = PostCreateNestedOneWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput_1.PostCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutCommentsInput_1.PostCreateWithoutCommentsInput)
], PostCreateNestedOneWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutCommentsInput_1.PostCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutCommentsInput_1.PostCreateOrConnectWithoutCommentsInput)
], PostCreateNestedOneWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateNestedOneWithoutCommentsInput.prototype, "connect", void 0);
exports.PostCreateNestedOneWithoutCommentsInput = PostCreateNestedOneWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedOneWithoutCommentsInput", {})
], PostCreateNestedOneWithoutCommentsInput);
