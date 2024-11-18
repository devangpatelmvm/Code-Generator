"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCreateOrConnectWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateWithoutProjectInput_1 = require("../inputs/TablesCreateWithoutProjectInput");
const TablesWhereUniqueInput_1 = require("../inputs/TablesWhereUniqueInput");
let TablesCreateOrConnectWithoutProjectInput = class TablesCreateOrConnectWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereUniqueInput_1.TablesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesWhereUniqueInput_1.TablesWhereUniqueInput)
], TablesCreateOrConnectWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCreateWithoutProjectInput_1.TablesCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesCreateWithoutProjectInput_1.TablesCreateWithoutProjectInput)
], TablesCreateOrConnectWithoutProjectInput.prototype, "create", void 0);
TablesCreateOrConnectWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesCreateOrConnectWithoutProjectInput", {
        isAbstract: true
    })
], TablesCreateOrConnectWithoutProjectInput);
exports.TablesCreateOrConnectWithoutProjectInput = TablesCreateOrConnectWithoutProjectInput;
