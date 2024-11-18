"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Components_1 = require("../../../models/Components");
const TsLines_1 = require("../../../models/TsLines");
const helpers_1 = require("../../../helpers");
let TsLinesRelationsResolver = class TsLinesRelationsResolver {
    async component(tsLines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.findUnique({
            where: {
                id: tsLines.id,
            },
        }).component({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Components_1.Components, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TsLines_1.TsLines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesRelationsResolver.prototype, "component", null);
TsLinesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TsLines_1.TsLines)
], TsLinesRelationsResolver);
exports.TsLinesRelationsResolver = TsLinesRelationsResolver;
