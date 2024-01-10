"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateOneRequiredWithoutPostHistoryNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutPostHistoryInput_1 = require("../inputs/PostCreateOrConnectWithoutPostHistoryInput");
const PostCreateWithoutPostHistoryInput_1 = require("../inputs/PostCreateWithoutPostHistoryInput");
const PostUpdateToOneWithWhereWithoutPostHistoryInput_1 = require("../inputs/PostUpdateToOneWithWhereWithoutPostHistoryInput");
const PostUpsertWithoutPostHistoryInput_1 = require("../inputs/PostUpsertWithoutPostHistoryInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateOneRequiredWithoutPostHistoryNestedInput = class PostUpdateOneRequiredWithoutPostHistoryNestedInput {
    create;
    connectOrCreate;
    upsert;
    connect;
    update;
};
exports.PostUpdateOneRequiredWithoutPostHistoryNestedInput = PostUpdateOneRequiredWithoutPostHistoryNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutPostHistoryInput_1.PostCreateWithoutPostHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutPostHistoryInput_1.PostCreateWithoutPostHistoryInput)
], PostUpdateOneRequiredWithoutPostHistoryNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPostHistoryInput_1.PostCreateOrConnectWithoutPostHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutPostHistoryInput_1.PostCreateOrConnectWithoutPostHistoryInput)
], PostUpdateOneRequiredWithoutPostHistoryNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpsertWithoutPostHistoryInput_1.PostUpsertWithoutPostHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpsertWithoutPostHistoryInput_1.PostUpsertWithoutPostHistoryInput)
], PostUpdateOneRequiredWithoutPostHistoryNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateOneRequiredWithoutPostHistoryNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutPostHistoryInput_1.PostUpdateToOneWithWhereWithoutPostHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateToOneWithWhereWithoutPostHistoryInput_1.PostUpdateToOneWithWhereWithoutPostHistoryInput)
], PostUpdateOneRequiredWithoutPostHistoryNestedInput.prototype, "update", void 0);
exports.PostUpdateOneRequiredWithoutPostHistoryNestedInput = PostUpdateOneRequiredWithoutPostHistoryNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateOneRequiredWithoutPostHistoryNestedInput", {})
], PostUpdateOneRequiredWithoutPostHistoryNestedInput);
