import {_, Model} from '@flowable/forms';
import React from 'react';
import {Map, Marker} from "pigeon-maps";

export function FlowableMap(props: Model.Props) {
    const Components = props.Components;
    const {config} = props;
    const {extraSettings, value} = config;

    // Used to generate style class names. See: https://getbem.com/introduction/
    const bem = _.bem("flowableMap");
    const center = _.get(extraSettings, "center", []);

    return (
        <div className={bem('container')}>
            <Components.label {...props}/>
            <Map height={300}
                 width={300}
                 center={center}>
                {value &&<Marker anchor={value}/> }
            </Map>
        </div>
    );
}
