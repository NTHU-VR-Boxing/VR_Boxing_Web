import React, { useState } from 'react';
import VideoEditingTimeline from 'video-editing-timeline-react';

export function Timeline() {
    const initConfig = {
        canvasWidth: 2250,
        canvasHeight: 50,
        minimumScale: 15, // 一个小刻度长度(单位px)
        minimumScaleTime: 0.1 // 一个小刻度代表时间（单位秒）
    };
    const [config, setConfig] = useState(initConfig);

    return(
        <div>
            <VideoEditingTimeline config={config}/>
        </div>
    )
}
