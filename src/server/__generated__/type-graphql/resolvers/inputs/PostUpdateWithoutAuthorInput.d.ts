import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutPostNestedInput } from "../inputs/CommentUpdateManyWithoutPostNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostHistoryUpdateManyWithoutPostNestedInput } from "../inputs/PostHistoryUpdateManyWithoutPostNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PostUpdateWithoutAuthorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    published?: BoolFieldUpdateOperationsInput | undefined;
    likes?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    postHistory?: PostHistoryUpdateManyWithoutPostNestedInput | undefined;
    comments?: CommentUpdateManyWithoutPostNestedInput | undefined;
}
