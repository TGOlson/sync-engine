"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedOneWithoutPostHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutPostHistoryInput_1 = require("../inputs/PostCreateOrConnectWithoutPostHistoryInput");
const PostCreateWithoutPostHistoryInput_1 = require("../inputs/PostCreateWithoutPostHistoryInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedOneWithoutPostHistoryInput = class PostCreateNestedOneWithoutPostHistoryInput {
    create;
    connectOrCreate;
    connect;
};
exports.PostCreateNestedOneWithoutPostHistoryInput = PostCreateNestedOneWithoutPostHistoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutPostHistoryInput_1.PostCreateWithoutPostHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutPostHistoryInput_1.PostCreateWithoutPostHistoryInput)
], PostCreateNestedOneWithoutPostHistoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPostHistoryInput_1.PostCreateOrConnectWithoutPostHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutPostHistoryInput_1.PostCreateOrConnectWithoutPostHistoryInput)
], PostCreateNestedOneWithoutPostHistoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateNestedOneWithoutPostHistoryInput.prototype, "connect", void 0);
exports.PostCreateNestedOneWithoutPostHistoryInput = PostCreateNestedOneWithoutPostHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedOneWithoutPostHistoryInput", {})
], PostCreateNestedOneWithoutPostHistoryInput);
