"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesUpdateWithWhereUniqueWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesUpdateWithoutProjectInput_1 = require("../inputs/TablesUpdateWithoutProjectInput");
const TablesWhereUniqueInput_1 = require("../inputs/TablesWhereUniqueInput");
let TablesUpdateWithWhereUniqueWithoutProjectInput = class TablesUpdateWithWhereUniqueWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], TablesUpdateWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateWithoutProjectInput_1.TablesUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesUpdateWithoutProjectInput_1.TablesUpdateWithoutProjectInput)
], TablesUpdateWithWhereUniqueWithoutProjectInput.prototype, "data", void 0);
TablesUpdateWithWhereUniqueWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesUpdateWithWhereUniqueWithoutProjectInput", {
        isAbstract: true
    })
], TablesUpdateWithWhereUniqueWithoutProjectInput);
exports.TablesUpdateWithWhereUniqueWithoutProjectInput = TablesUpdateWithWhereUniqueWithoutProjectInput;
