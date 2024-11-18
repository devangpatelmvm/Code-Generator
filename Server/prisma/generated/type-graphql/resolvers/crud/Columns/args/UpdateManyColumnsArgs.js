"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyColumnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsUpdateManyMutationInput_1 = require("../../../inputs/ColumnsUpdateManyMutationInput");
const ColumnsWhereInput_1 = require("../../../inputs/ColumnsWhereInput");
let UpdateManyColumnsArgs = class UpdateManyColumnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsUpdateManyMutationInput_1.ColumnsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsUpdateManyMutationInput_1.ColumnsUpdateManyMutationInput)
], UpdateManyColumnsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereInput_1.ColumnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsWhereInput_1.ColumnsWhereInput)
], UpdateManyColumnsArgs.prototype, "where", void 0);
UpdateManyColumnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyColumnsArgs);
exports.UpdateManyColumnsArgs = UpdateManyColumnsArgs;
