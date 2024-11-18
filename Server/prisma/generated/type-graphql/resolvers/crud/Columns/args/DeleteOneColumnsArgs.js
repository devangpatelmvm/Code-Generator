"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneColumnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsWhereUniqueInput_1 = require("../../../inputs/ColumnsWhereUniqueInput");
let DeleteOneColumnsArgs = class DeleteOneColumnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput)
], DeleteOneColumnsArgs.prototype, "where", void 0);
DeleteOneColumnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneColumnsArgs);
exports.DeleteOneColumnsArgs = DeleteOneColumnsArgs;
