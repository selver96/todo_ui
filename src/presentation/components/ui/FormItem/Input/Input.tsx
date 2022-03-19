import React, { FC, useEffect } from 'react';
import '../style.css'
interface Props {
    icon?: React.ReactNode;
    fields: {
        id?: string;
        className?: string;
        name?: string;
        type: string;
        placeholder?: string;
        value?: string;
        onChange?(e: any): void;
    }

}

const Input: FC<Props> = (props: Props) => {
    const { icon, fields } = props;

    return (
        <div className='input__custom'>
            {icon}
            <input
                {...fields}
            />
        </div>
    );
};

export default Input;