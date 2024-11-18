"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTsLinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneTsLinesArgs_1 = require("./args/CreateOneTsLinesArgs");
const TsLines_1 = require("../../../models/TsLines");
const helpers_1 = require("../../../helpers");
let CreateOneTsLinesResolver = class CreateOneTsLinesResolver {
    async createOneTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TsLines_1.TsLines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTsLinesArgs_1.CreateOneTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTsLinesResolver.prototype, "createOneTsLines", null);
CreateOneTsLinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TsLines_1.TsLines)
], CreateOneTsLinesResolver);
exports.CreateOneTsLinesResolver = CreateOneTsLinesResolver;
