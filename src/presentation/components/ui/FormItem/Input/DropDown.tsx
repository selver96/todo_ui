import React, { FC } from 'react';
import { ITaskGroup } from '../../../../../application/models/ITask';
import '../style.css'

interface Props{
    id?: string;
    name?: string;
    valueArray: ITaskGroup[];
    value?: number;
    onChange?(e: any): void;
}

const DropDown: FC<Props> = (props) => {
    const {id, name, valueArray, value, onChange} = props

    return (

        <div className='dropdown__custom'>
            <select name={name} id={id} onChange={onChange} value={value}>
                <option  value={0}>Select Group</option>
                {
                    
                    valueArray.map((item, index) => {
                        return <option key={index} value={item.id}>{item.title}</option>
                    })
                }
                
            </select>
        </div>

    );
};

export default DropDown;