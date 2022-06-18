import React, {useState} from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const HEIGHT = 20;

interface Props {
    theme?: 'light' | 'dark'
    label?: string
    onToggleClick?: (value: boolean)=> void
}

function MyToggle({theme = 'light', label, onToggleClick}: Props){
    const [on, setOn] = useState(false);

    const onClick = ()=>{
        if(onToggleClick) onToggleClick(!on);
        setOn(!on);
    }

    const style = css`
        display: flex;
        align-items: center;
        * {
            box-sizing: border-box;
        }
        .label {
            margin-left: 10px;
            font-weight: bold;
        }
    `;

    const wrapper = css`
        position: relative;
        width: 40px;
        height: ${HEIGHT}px;
        border-radius: 20px;
        transition: .2s;
        cursor: pointer;
        ${theme === 'light' ? `
            background-color: ${on ? 'orange' : '#d8d8d8'};
        ` : `
            background-color: ${on ? '#4d8cff' : '#b6b6b6'};
        `}
        .arc {
            position: absolute;
            ${on ? `
                left: 100%;
                transform: translateX(-100%);
            ` : `
                left: 0;
            `}
            width: 20px;
            height: ${HEIGHT}px;
            border-radius: 50%;
            background-color: white;
            transition: .2s;
            border: 1px solid #d7d7d7;
        }
    `;

    return(
        <div css={style} onClick={onClick}>
            <div css={wrapper}>
                <div className='arc'></div>
            </div>
            {label && <span className='label'>{label}</span>}
        </div>
    );
}

export default MyToggle;