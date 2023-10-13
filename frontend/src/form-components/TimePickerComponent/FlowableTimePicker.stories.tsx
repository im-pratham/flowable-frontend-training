import * as React from "react";
import {StorybookForm} from "../../util/storybookForm";

export const TimePickerSimple = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[]]
        `}
    />

export const TimePickerSimpleDisabled = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=false size=12 [[]]
        `}
    />

export const TimePickerSimpleIgnore = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true ignore=true size=12 [[]]
        `}
    />

export const TimePickerDigital = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[pickerType=digital]]
        `}
    />

export const TimePickerAnalog = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true defaultValue= size=12 [[pickerType=analog]]
        `}
    />

export const TimePickerDefaultValue = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true defaultValue=2023-10-13T05:00:00.000Z size=12 [[pickerType=analog]]
        `}
    />

export const TimePickerDisabledDefaultValue = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=false defaultValue=2023-10-13T05:00:00.000Z size=12 [[pickerType=analog]]
        `}
    />

export const TimePickerIgnoreDefaultValue = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true ignore=true defaultValue=2023-10-13T05:00:00.000Z size=12 [[pickerType=analog]]
        `}
    />

export const TimePicker12Hour = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[pickerType=analog ampm=true]]
        `}
    />

export const TimePicker24Hour = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[pickerType=analog ampm=false]]
        `}
    />

export const TimePicker15MinInterval = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[interval=15]]
        `}
    />


export const TimePickerFormatHHMMSS24Hr = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[format=hh:mm:ss]]
        `}
    />

export const TimePickerFormatHHMMSS12Hr = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[format=hh:mm:ss ampm=true]]
        `}
    />

export const TimePickerFormatHHMM24Hr = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[format=hh:mm]]
        `}
    />

export const TimePickerFormatHHMM12Hr = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[format=hh:mm ampm=true]]
        `}
    />

export const TimePickerFormatHH24Hr = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[format=hh]]
        `}
    />

export const TimePickerFormatHH12 = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingTimepicker: value={{timePickerDemo}} visible=true enabled=true size=12 [[format=hh ampm=true]]
        `}
    />


export default {
    title: 'Time Picker Component'
}

