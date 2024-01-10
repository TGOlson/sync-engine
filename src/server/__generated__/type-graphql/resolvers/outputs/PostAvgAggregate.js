"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostAvgAggregate = class PostAvgAggregate {
    likes;
};
exports.PostAvgAggregate = PostAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PostAvgAggregate.prototype, "likes", void 0);
exports.PostAvgAggregate = PostAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostAvgAggregate", {})
], PostAvgAggregate);
