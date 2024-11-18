"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneColumnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsCreateInput_1 = require("../../../inputs/ColumnsCreateInput");
let CreateOneColumnsArgs = class CreateOneColumnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsCreateInput_1.ColumnsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColumnsCreateInput_1.ColumnsCreateInput)
], CreateOneColumnsArgs.prototype, "data", void 0);
CreateOneColumnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneColumnsArgs);
exports.CreateOneColumnsArgs = CreateOneColumnsArgs;
