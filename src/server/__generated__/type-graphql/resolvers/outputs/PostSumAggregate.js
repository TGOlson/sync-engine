"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostSumAggregate = class PostSumAggregate {
    likes;
};
exports.PostSumAggregate = PostSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PostSumAggregate.prototype, "likes", void 0);
exports.PostSumAggregate = PostSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostSumAggregate", {})
], PostSumAggregate);
