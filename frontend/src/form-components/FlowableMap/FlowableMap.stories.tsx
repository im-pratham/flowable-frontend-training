import * as React from "react";
import {StorybookForm} from "../../util/storybookForm";

export const SimpleMap = () =>
    <StorybookForm
        payload={{location: [47.37, 8.54]}}
        sfs={`
            trainingFlowableMap: value={{location}} size=12 [[center={{location}}]]        
        `}
    />

export const MapWithoutMarker = () =>
    <StorybookForm
        payload={{location: [47.37, 8.54]}}
        sfs={`
            trainingFlowableMap: size=12 [[center={{location}}]]        
        `}
    />

export default {
    title: 'Flowable Map'
}

