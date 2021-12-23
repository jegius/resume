import React from "react";
import './section.css';

export default function Section({children, withMargin, title, grey}) {
    return (
        <div className={withMargin ? 'section section__with-margin' + `${grey ? ' grey' : ''}` : 'section'}>
            {title && (
                <div className="section-title">
                    {title}
                </div>
            )}
            {children}
        </div>
    )

}