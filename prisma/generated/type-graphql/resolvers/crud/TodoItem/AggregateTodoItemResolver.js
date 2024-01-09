"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTodoItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTodoItemArgs_1 = require("./args/AggregateTodoItemArgs");
const TodoItem_1 = require("../../../models/TodoItem");
const AggregateTodoItem_1 = require("../../outputs/AggregateTodoItem");
const helpers_1 = require("../../../helpers");
let AggregateTodoItemResolver = class AggregateTodoItemResolver {
    async aggregateTodoItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateTodoItemResolver = AggregateTodoItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTodoItem_1.AggregateTodoItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTodoItemArgs_1.AggregateTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTodoItemResolver.prototype, "aggregateTodoItem", null);
exports.AggregateTodoItemResolver = AggregateTodoItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TodoItem_1.TodoItem)
], AggregateTodoItemResolver);
