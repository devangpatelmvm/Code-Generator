"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsCreateNestedManyWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsCreateOrConnectWithoutTableInput_1 = require("../inputs/ColumnsCreateOrConnectWithoutTableInput");
const ColumnsCreateWithoutTableInput_1 = require("../inputs/ColumnsCreateWithoutTableInput");
const ColumnsWhereUniqueInput_1 = require("../inputs/ColumnsWhereUniqueInput");
let ColumnsCreateNestedManyWithoutTableInput = class ColumnsCreateNestedManyWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsCreateWithoutTableInput_1.ColumnsCreateWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsCreateNestedManyWithoutTableInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsCreateOrConnectWithoutTableInput_1.ColumnsCreateOrConnectWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsCreateNestedManyWithoutTableInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColumnsWhereUniqueInput_1.ColumnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColumnsCreateNestedManyWithoutTableInput.prototype, "connect", void 0);
ColumnsCreateNestedManyWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsCreateNestedManyWithoutTableInput", {
        isAbstract: true
    })
], ColumnsCreateNestedManyWithoutTableInput);
exports.ColumnsCreateNestedManyWithoutTableInput = ColumnsCreateNestedManyWithoutTableInput;
