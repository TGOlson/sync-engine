import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput";
export declare class CommentUpdateWithoutPostInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    likes?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput | undefined;
}
