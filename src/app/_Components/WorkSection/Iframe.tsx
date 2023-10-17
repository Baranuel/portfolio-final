'use client'

import {useCallback, useEffect, useState} from 'react'

export const Iframe = ({src}: {src:string}) => {
    const iframe = document.getElementById('iframe') as HTMLIFrameElement;
    const historyLengthBeforeActivity = window.history.length;

    


    return <iframe  loading="eager" id='iframe' src={src} className="w-full h-[calc(100%-40px)]"/>
}