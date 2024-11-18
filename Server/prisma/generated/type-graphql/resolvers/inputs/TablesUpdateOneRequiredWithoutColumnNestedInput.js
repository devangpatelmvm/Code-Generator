"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesUpdateOneRequiredWithoutColumnNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateOrConnectWithoutColumnInput_1 = require("../inputs/TablesCreateOrConnectWithoutColumnInput");
const TablesCreateWithoutColumnInput_1 = require("../inputs/TablesCreateWithoutColumnInput");
const TablesUpdateWithoutColumnInput_1 = require("../inputs/TablesUpdateWithoutColumnInput");
const TablesUpsertWithoutColumnInput_1 = require("../inputs/TablesUpsertWithoutColumnInput");
const TablesWhereUniqueInput_1 = require("../inputs/TablesWhereUniqueInput");
let TablesUpdateOneRequiredWithoutColumnNestedInput = class TablesUpdateOneRequiredWithoutColumnNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateWithoutColumnInput_1.TablesCreateWithoutColumnInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCreateWithoutColumnInput_1.TablesCreateWithoutColumnInput)
], TablesUpdateOneRequiredWithoutColumnNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateOrConnectWithoutColumnInput_1.TablesCreateOrConnectWithoutColumnInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCreateOrConnectWithoutColumnInput_1.TablesCreateOrConnectWithoutColumnInput)
], TablesUpdateOneRequiredWithoutColumnNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpsertWithoutColumnInput_1.TablesUpsertWithoutColumnInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesUpsertWithoutColumnInput_1.TablesUpsertWithoutColumnInput)
], TablesUpdateOneRequiredWithoutColumnNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], TablesUpdateOneRequiredWithoutColumnNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateWithoutColumnInput_1.TablesUpdateWithoutColumnInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesUpdateWithoutColumnInput_1.TablesUpdateWithoutColumnInput)
], TablesUpdateOneRequiredWithoutColumnNestedInput.prototype, "update", void 0);
TablesUpdateOneRequiredWithoutColumnNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesUpdateOneRequiredWithoutColumnNestedInput", {
        isAbstract: true
    })
], TablesUpdateOneRequiredWithoutColumnNestedInput);
exports.TablesUpdateOneRequiredWithoutColumnNestedInput = TablesUpdateOneRequiredWithoutColumnNestedInput;
