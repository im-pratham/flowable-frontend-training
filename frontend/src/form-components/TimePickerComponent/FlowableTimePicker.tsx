import React from 'react';
import {_, Model} from "@flowable/forms";
import {DesktopTimePicker, LocalizationProvider, MobileTimePicker, TimeView} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {parseISO} from "date-fns";

type TimePickerOptionalAttributes = {
    defaultValue?: Date
    views?: TimeView[]
    format?: string
}

export function FlowableTimePicker(props: Model.Props) {
    function insertViewProperties(format: string, amPmEnabled: boolean, timePickerAttributes: TimePickerOptionalAttributes) {
        if (amPmEnabled) {
            timePickerAttributes.format = format + " aa";
        }

        switch (format) {
            case "hh":
                timePickerAttributes.views = ["hours"]
                break;
            case "hh:mm":
                timePickerAttributes.views = ["hours", "minutes"]
                break;
            case "hh:mm:ss":
                timePickerAttributes.views = ["hours", "minutes", "seconds"]
                break;
        }
    }

    const Components = props.Components;
    const {config} = props;
    const {extraSettings, enabled, ignore, visible, defaultValue} = config;


    const timePickerAttributes: TimePickerOptionalAttributes = {}
    const pickerType = _.get(extraSettings, "pickerType", "digital");
    const ampmEnabled: boolean = _.get(extraSettings, "ampm", false);
    const interval: number = _.get(extraSettings, "interval", 5);

    const format: string = _.get(extraSettings, "format", "hh:mm");
    insertViewProperties(format, ampmEnabled, timePickerAttributes)

    // Used to generate style class names. See: https://getbem.com/introduction/

    const bem = _.bem("flowableTimePicker");

    const TimePickerComponent = pickerType === "digital" ? DesktopTimePicker : MobileTimePicker;

    if (defaultValue) {
        timePickerAttributes.defaultValue = parseISO(defaultValue)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            {!ignore &&
                <TimePickerComponent label="Basic time picker"
                                     onChange={v => props.onChange(v)}
                                     ampm={ampmEnabled}
                                     timeSteps={{minutes: interval}}
                                     disabled={!enabled}
                                     {...timePickerAttributes}
                />
            }
        </LocalizationProvider>
        // <div>test   </div>
    );
}

