import React, { useState } from 'react';
import { BiMove } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosRemoveCircle } from 'react-icons/io';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { TaskActionCreators } from '../../../application/redux/reducers/task/action-creators';
import MoveTask from './MoveTask';

interface Props {
    id: number;
    title: string;
    for_completed: boolean;
}

const ListItem = (props: Props) => {
    const { id, title, for_completed } = props;
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState<boolean>(false);


    const openMenu = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setShow(!show);
        setOpen(false);
    }

    const removeTask = (e: any) => {
        dispatch(TaskActionCreators.removeTask(id));
        dispatch(TaskActionCreators.setIsLoading(true));
        setOpen(!open);
    }

    const completedTask = (e: any) => {
        dispatch(TaskActionCreators.completedTask(id));
        dispatch(TaskActionCreators.setIsLoading(true));
        setOpen(!open);
    }

    return (
        <>
            <li key={id} className="list-card-item" ><div><p>{title}</p><BsThreeDots onClick={openMenu} />
                <div onMouseLeave={openMenu}  className="sub__item__menu" style={open ? { display: 'block' } : { display: 'none' }}>
                    <div ><a onClick={handleClose} ><BiMove /><p>Move</p></a></div>
                    <div><a onClick={removeTask}><IoIosRemoveCircle /><p>Remove</p></a></div>
                    {
                        for_completed
                        ?
                        <></>
                        :
                        <div><a onClick={completedTask}><AiOutlineCheckCircle /><p>Completed</p></a></div>
                    }
                    
                </div>
            </div></li>
            <MoveTask id={id} show={show} handleClose={handleClose} openMenu={openMenu}/>
       </>
    );
};

export default ListItem;