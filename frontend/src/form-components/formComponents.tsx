import {ExternalFormComponent} from "@flowable/work-scripts";
import {HelloWorld} from "./HelloWorld/HelloWorld";
import {FlowableMap} from "./FlowableMap/FlowableMap";
import {FlowableTimePicker} from "./TimePickerComponent/FlowableTimePicker";

export const formComponents: ExternalFormComponent[] = [
    ["trainingHelloworld", HelloWorld],
    ["trainingFlowableMap", FlowableMap],
    ["trainingTimepicker", FlowableTimePicker]
]