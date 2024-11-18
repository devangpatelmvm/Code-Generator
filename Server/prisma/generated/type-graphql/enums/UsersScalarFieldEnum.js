"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UsersScalarFieldEnum;
(function (UsersScalarFieldEnum) {
    UsersScalarFieldEnum["id"] = "id";
    UsersScalarFieldEnum["first_name"] = "first_name";
    UsersScalarFieldEnum["last_name"] = "last_name";
    UsersScalarFieldEnum["email"] = "email";
    UsersScalarFieldEnum["password"] = "password";
    UsersScalarFieldEnum["createdAt"] = "createdAt";
    UsersScalarFieldEnum["user_rolesId"] = "user_rolesId";
})(UsersScalarFieldEnum = exports.UsersScalarFieldEnum || (exports.UsersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
    name: "UsersScalarFieldEnum",
    description: undefined,
});
