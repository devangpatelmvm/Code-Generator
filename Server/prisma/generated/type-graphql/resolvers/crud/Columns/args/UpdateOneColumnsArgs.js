"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneColumnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsUpdateInput_1 = require("../../../inputs/ColumnsUpdateInput");
const ColumnsWhereUniqueInput_1 = require("../../../inputs/ColumnsWhereUniqueInput");
let UpdateOneColumnsArgs = class UpdateOneColumnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsUpdateInput_1.ColumnsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsUpdateInput_1.ColumnsUpdateInput)
], UpdateOneColumnsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput)
], UpdateOneColumnsArgs.prototype, "where", void 0);
UpdateOneColumnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneColumnsArgs);
exports.UpdateOneColumnsArgs = UpdateOneColumnsArgs;
