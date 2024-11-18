import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectsUpdateManyWithoutUserNestedInput } from "../inputs/ProjectsUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { User_rolesUpdateOneWithoutUsersNestedInput } from "../inputs/User_rolesUpdateOneWithoutUsersNestedInput";
export declare class UsersUpdateInput {
    first_name?: StringFieldUpdateOperationsInput | undefined;
    last_name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user_roles?: User_rolesUpdateOneWithoutUsersNestedInput | undefined;
    project?: ProjectsUpdateManyWithoutUserNestedInput | undefined;
}
