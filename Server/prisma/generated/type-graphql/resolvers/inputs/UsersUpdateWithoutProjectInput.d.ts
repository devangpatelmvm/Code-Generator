import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { User_rolesUpdateOneWithoutUsersNestedInput } from "../inputs/User_rolesUpdateOneWithoutUsersNestedInput";
export declare class UsersUpdateWithoutProjectInput {
    first_name?: StringFieldUpdateOperationsInput | undefined;
    last_name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user_roles?: User_rolesUpdateOneWithoutUsersNestedInput | undefined;
}
