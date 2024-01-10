"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostHistoryWhereInput_1 = require("../inputs/PostHistoryWhereInput");
let PostHistoryListRelationFilter = class PostHistoryListRelationFilter {
    every;
    some;
    none;
};
exports.PostHistoryListRelationFilter = PostHistoryListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereInput_1.PostHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereInput_1.PostHistoryWhereInput)
], PostHistoryListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereInput_1.PostHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereInput_1.PostHistoryWhereInput)
], PostHistoryListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryWhereInput_1.PostHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryWhereInput_1.PostHistoryWhereInput)
], PostHistoryListRelationFilter.prototype, "none", void 0);
exports.PostHistoryListRelationFilter = PostHistoryListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryListRelationFilter", {})
], PostHistoryListRelationFilter);
