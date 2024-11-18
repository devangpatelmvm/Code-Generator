"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneComponentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneComponentsArgs_1 = require("./args/CreateOneComponentsArgs");
const Components_1 = require("../../../models/Components");
const helpers_1 = require("../../../helpers");
let CreateOneComponentsResolver = class CreateOneComponentsResolver {
    async createOneComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Components_1.Components, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneComponentsArgs_1.CreateOneComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneComponentsResolver.prototype, "createOneComponents", null);
CreateOneComponentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Components_1.Components)
], CreateOneComponentsResolver);
exports.CreateOneComponentsResolver = CreateOneComponentsResolver;
