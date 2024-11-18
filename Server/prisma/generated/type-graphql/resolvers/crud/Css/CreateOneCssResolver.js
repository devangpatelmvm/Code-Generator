"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCssResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneCssArgs_1 = require("./args/CreateOneCssArgs");
const Css_1 = require("../../../models/Css");
const helpers_1 = require("../../../helpers");
let CreateOneCssResolver = class CreateOneCssResolver {
    async createOneCss(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateOneCssResolver.prototype, "createOneCss", null);
CreateOneCssResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Css_1.Css)
], CreateOneCssResolver);
exports.CreateOneCssResolver = CreateOneCssResolver;
