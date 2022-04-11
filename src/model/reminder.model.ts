import {Id} from "./id.type";
import {BaseModel} from "./base.model";

type Frequency = number;

type WateringObject = {
  plantId: Id;
  groupId: Id;
};

export class WateringReminder extends BaseModel<WateringReminder>{
  start?: Date;
  frequency?: Frequency;
  wateringObject?: WateringObject;
}
