"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyColumnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsWhereInput_1 = require("../../../inputs/ColumnsWhereInput");
let DeleteManyColumnsArgs = class DeleteManyColumnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereInput_1.ColumnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsWhereInput_1.ColumnsWhereInput)
], DeleteManyColumnsArgs.prototype, "where", void 0);
DeleteManyColumnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyColumnsArgs);
exports.DeleteManyColumnsArgs = DeleteManyColumnsArgs;
