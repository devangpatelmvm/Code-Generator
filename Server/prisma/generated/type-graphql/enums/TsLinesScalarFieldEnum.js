"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TsLinesScalarFieldEnum;
(function (TsLinesScalarFieldEnum) {
    TsLinesScalarFieldEnum["id"] = "id";
    TsLinesScalarFieldEnum["line"] = "line";
    TsLinesScalarFieldEnum["componentId"] = "componentId";
})(TsLinesScalarFieldEnum = exports.TsLinesScalarFieldEnum || (exports.TsLinesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TsLinesScalarFieldEnum, {
    name: "TsLinesScalarFieldEnum",
    description: undefined,
});
