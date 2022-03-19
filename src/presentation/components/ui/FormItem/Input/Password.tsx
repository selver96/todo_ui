import React, { FC, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';

import '../style.css'

interface Props {
    id?: string;
    className?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?(e: any): void;
}



const Password: FC<Props> = (props) => {

    const [openEye, setOpenEye] = useState(false);


    const eyeHandler = () => {
        if (openEye) {
            setOpenEye(false)
        } else {
            setOpenEye(true)
        }
    }

    return (
        <div className='password__custom'>
            <RiLockPasswordLine />
            {
                openEye
                    ?
                    <input
                        type="text"
                        {...props}
                    />
                    :
                    <input
                        type="password"
                        {...props}
                    />
            }
            <div className="pass__eyes" onClick={eyeHandler}>
                    {
                        openEye
                            ?
                            <FaEyeSlash />
                            :
                            <IoEyeSharp />
                    }


                </div>
        </div>
    );
};

export default Password;