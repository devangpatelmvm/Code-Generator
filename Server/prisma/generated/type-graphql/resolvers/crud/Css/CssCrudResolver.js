"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCssArgs_1 = require("./args/AggregateCssArgs");
const CreateOneCssArgs_1 = require("./args/CreateOneCssArgs");
const DeleteManyCssArgs_1 = require("./args/DeleteManyCssArgs");
const DeleteOneCssArgs_1 = require("./args/DeleteOneCssArgs");
const FindFirstCssArgs_1 = require("./args/FindFirstCssArgs");
const FindManyCssArgs_1 = require("./args/FindManyCssArgs");
const FindUniqueCssArgs_1 = require("./args/FindUniqueCssArgs");
const GroupByCssArgs_1 = require("./args/GroupByCssArgs");
const UpdateManyCssArgs_1 = require("./args/UpdateManyCssArgs");
const UpdateOneCssArgs_1 = require("./args/UpdateOneCssArgs");
const UpsertOneCssArgs_1 = require("./args/UpsertOneCssArgs");
const helpers_1 = require("../../../helpers");
const Css_1 = require("../../../models/Css");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCss_1 = require("../../outputs/AggregateCss");
const CssGroupBy_1 = require("../../outputs/CssGroupBy");
let CssCrudResolver = class CssCrudResolver {
    async aggregateCss(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).css.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneCss(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCss(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCss(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCss(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async csses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async css(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCss(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCss(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCss(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCss(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], CssCrudResolver.prototype, "aggregateCss", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Css_1.Css, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCssArgs_1.CreateOneCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CssCrudResolver.prototype, "createOneCss", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCssArgs_1.DeleteManyCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CssCrudResolver.prototype, "deleteManyCss", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Css_1.Css, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCssArgs_1.DeleteOneCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CssCrudResolver.prototype, "deleteOneCss", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Css_1.Css, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCssArgs_1.FindFirstCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CssCrudResolver.prototype, "findFirstCss", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Css_1.Css], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCssArgs_1.FindManyCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CssCrudResolver.prototype, "csses", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Css_1.Css, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCssArgs_1.FindUniqueCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CssCrudResolver.prototype, "css", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CssGroupBy_1.CssGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCssArgs_1.GroupByCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CssCrudResolver.prototype, "groupByCss", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCssArgs_1.UpdateManyCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CssCrudResolver.prototype, "updateManyCss", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Css_1.Css, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCssArgs_1.UpdateOneCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CssCrudResolver.prototype, "updateOneCss", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Css_1.Css, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCssArgs_1.UpsertOneCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CssCrudResolver.prototype, "upsertOneCss", null);
CssCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Css_1.Css)
], CssCrudResolver);
exports.CssCrudResolver = CssCrudResolver;
