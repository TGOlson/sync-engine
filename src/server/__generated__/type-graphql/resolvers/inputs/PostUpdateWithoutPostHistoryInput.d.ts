import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutPostNestedInput } from "../inputs/CommentUpdateManyWithoutPostNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPostsNestedInput";
export declare class PostUpdateWithoutPostHistoryInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    published?: BoolFieldUpdateOperationsInput | undefined;
    likes?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput | undefined;
    comments?: CommentUpdateManyWithoutPostNestedInput | undefined;
}
