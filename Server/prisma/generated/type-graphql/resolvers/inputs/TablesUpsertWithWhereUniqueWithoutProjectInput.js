"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesUpsertWithWhereUniqueWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateWithoutProjectInput_1 = require("../inputs/TablesCreateWithoutProjectInput");
const TablesUpdateWithoutProjectInput_1 = require("../inputs/TablesUpdateWithoutProjectInput");
const TablesWhereUniqueInput_1 = require("../inputs/TablesWhereUniqueInput");
let TablesUpsertWithWhereUniqueWithoutProjectInput = class TablesUpsertWithWhereUniqueWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], TablesUpsertWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateWithoutProjectInput_1.TablesUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesUpdateWithoutProjectInput_1.TablesUpdateWithoutProjectInput)
], TablesUpsertWithWhereUniqueWithoutProjectInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateWithoutProjectInput_1.TablesCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesCreateWithoutProjectInput_1.TablesCreateWithoutProjectInput)
], TablesUpsertWithWhereUniqueWithoutProjectInput.prototype, "create", void 0);
TablesUpsertWithWhereUniqueWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesUpsertWithWhereUniqueWithoutProjectInput", {
        isAbstract: true
    })
], TablesUpsertWithWhereUniqueWithoutProjectInput);
exports.TablesUpsertWithWhereUniqueWithoutProjectInput = TablesUpsertWithWhereUniqueWithoutProjectInput;
