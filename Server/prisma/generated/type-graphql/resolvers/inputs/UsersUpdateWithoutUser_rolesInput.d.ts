import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectsUpdateManyWithoutUserNestedInput } from "../inputs/ProjectsUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UsersUpdateWithoutUser_rolesInput {
    first_name?: StringFieldUpdateOperationsInput | undefined;
    last_name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    project?: ProjectsUpdateManyWithoutUserNestedInput | undefined;
}
