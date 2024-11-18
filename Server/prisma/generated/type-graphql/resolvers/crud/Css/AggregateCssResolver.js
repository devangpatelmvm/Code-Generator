"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCssResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCssArgs_1 = require("./args/AggregateCssArgs");
const Css_1 = require("../../../models/Css");
const AggregateCss_1 = require("../../outputs/AggregateCss");
const helpers_1 = require("../../../helpers");
let AggregateCssResolver = class AggregateCssResolver {
    async aggregateCss(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).css.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCss_1.AggregateCss, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCssArgs_1.AggregateCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCssResolver.prototype, "aggregateCss", null);
AggregateCssResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Css_1.Css)
], AggregateCssResolver);
exports.AggregateCssResolver = AggregateCssResolver;
