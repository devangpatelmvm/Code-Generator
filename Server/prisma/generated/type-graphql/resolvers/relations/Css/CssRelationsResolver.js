"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Components_1 = require("../../../models/Components");
const Css_1 = require("../../../models/Css");
const helpers_1 = require("../../../helpers");
let CssRelationsResolver = class CssRelationsResolver {
    async component(css, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).css.findUnique({
            where: {
                id: css.id,
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
    tslib_1.__metadata("design:paramtypes", [Css_1.Css, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CssRelationsResolver.prototype, "component", null);
CssRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Css_1.Css)
], CssRelationsResolver);
exports.CssRelationsResolver = CssRelationsResolver;
