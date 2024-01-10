"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTodoItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTodoItemArgs_1 = require("./args/GroupByTodoItemArgs");
const TodoItem_1 = require("../../../models/TodoItem");
const TodoItemGroupBy_1 = require("../../outputs/TodoItemGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTodoItemResolver = class GroupByTodoItemResolver {
    async groupByTodoItem(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).todoItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByTodoItemResolver = GroupByTodoItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TodoItemGroupBy_1.TodoItemGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTodoItemArgs_1.GroupByTodoItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTodoItemResolver.prototype, "groupByTodoItem", null);
exports.GroupByTodoItemResolver = GroupByTodoItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TodoItem_1.TodoItem)
], GroupByTodoItemResolver);
