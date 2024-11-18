"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsCreateOrConnectWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsCreateWithoutTableInput_1 = require("../inputs/ColumnsCreateWithoutTableInput");
const ColumnsWhereUniqueInput_1 = require("../inputs/ColumnsWhereUniqueInput");
let ColumnsCreateOrConnectWithoutTableInput = class ColumnsCreateOrConnectWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput)
], ColumnsCreateOrConnectWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsCreateWithoutTableInput_1.ColumnsCreateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsCreateWithoutTableInput_1.ColumnsCreateWithoutTableInput)
], ColumnsCreateOrConnectWithoutTableInput.prototype, "create", void 0);
ColumnsCreateOrConnectWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsCreateOrConnectWithoutTableInput", {
        isAbstract: true
    })
], ColumnsCreateOrConnectWithoutTableInput);
exports.ColumnsCreateOrConnectWithoutTableInput = ColumnsCreateOrConnectWithoutTableInput;
