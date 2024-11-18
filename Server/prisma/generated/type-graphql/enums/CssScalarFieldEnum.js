"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CssScalarFieldEnum;
(function (CssScalarFieldEnum) {
    CssScalarFieldEnum["id"] = "id";
    CssScalarFieldEnum["content"] = "content";
    CssScalarFieldEnum["componentId"] = "componentId";
})(CssScalarFieldEnum = exports.CssScalarFieldEnum || (exports.CssScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CssScalarFieldEnum, {
    name: "CssScalarFieldEnum",
    description: undefined,
});
