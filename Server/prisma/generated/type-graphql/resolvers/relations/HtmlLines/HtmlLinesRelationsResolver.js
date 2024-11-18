"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Components_1 = require("../../../models/Components");
const HtmlLines_1 = require("../../../models/HtmlLines");
const helpers_1 = require("../../../helpers");
let HtmlLinesRelationsResolver = class HtmlLinesRelationsResolver {
    async component(htmlLines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.findUnique({
            where: {
                id: htmlLines.id,
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
    tslib_1.__metadata("design:paramtypes", [HtmlLines_1.HtmlLines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesRelationsResolver.prototype, "component", null);
HtmlLinesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => HtmlLines_1.HtmlLines)
], HtmlLinesRelationsResolver);
exports.HtmlLinesRelationsResolver = HtmlLinesRelationsResolver;
