import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsersUpdateManyWithoutUser_rolesNestedInput } from "../inputs/UsersUpdateManyWithoutUser_rolesNestedInput";
export declare class User_rolesUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    permissions?: StringFieldUpdateOperationsInput | undefined;
    users?: UsersUpdateManyWithoutUser_rolesNestedInput | undefined;
}
