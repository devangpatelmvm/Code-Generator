"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Columns_1 = require("../../../models/Columns");
const Tables_1 = require("../../../models/Tables");
const helpers_1 = require("../../../helpers");
let ColumnsRelationsResolver = class ColumnsRelationsResolver {
    async table(columns, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.findUnique({
            where: {
                id: columns.id,
            },
        }).table({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tables_1.Tables, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Columns_1.Columns, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsRelationsResolver.prototype, "table", null);
ColumnsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Columns_1.Columns)
], ColumnsRelationsResolver);
exports.ColumnsRelationsResolver = ColumnsRelationsResolver;
