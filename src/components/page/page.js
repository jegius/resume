import React from "react";
import './page.css';

export default function Page({children}) {
    return <div className='page'>
        <div className="page__job-position">
            Java Developer
        </div>
        {children}
    </div>
}
