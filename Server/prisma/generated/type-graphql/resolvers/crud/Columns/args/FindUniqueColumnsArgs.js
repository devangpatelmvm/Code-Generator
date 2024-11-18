"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueColumnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsWhereUniqueInput_1 = require("../../../inputs/ColumnsWhereUniqueInput");
let FindUniqueColumnsArgs = class FindUniqueColumnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput)
], FindUniqueColumnsArgs.prototype, "where", void 0);
FindUniqueColumnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueColumnsArgs);
exports.FindUniqueColumnsArgs = FindUniqueColumnsArgs;
