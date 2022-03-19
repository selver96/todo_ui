import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { IoIosRemoveCircle } from "react-icons/io";
import AddTask from './AddTask';

import '../../../application/css/listcard.css';
import { ITask } from '../../../application/models/ITask';
import { useDispatch } from 'react-redux';
import { TaskActionCreators } from '../../../application/redux/reducers/task/action-creators';
import ListItem from './ListItem';

interface Props {
    id: number;
    title: string;
    task: ITask[];
}

const ListCard = (props: Props) => {
    const { id, title, task } = props;
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [show, setShow] = useState<boolean>(false);

    const addTask = () => {
        setShow(!show)
    }

    const openMenu = () => {
        setOpen(!open);
    }

    const removeGroup = (e: any) => {
        dispatch(TaskActionCreators.removeTaskGroup(id));
        dispatch(TaskActionCreators.setIsLoading(true));
        setOpen(!open);
    }

    return (
        <div className='list-card' style={task ? { height: "auto" } : { height: "100px" }}>
            <div className="list-card-top">
                <p className="top-title">{title}</p>
                <BsThreeDots onClick={openMenu}/>
                <div className="item__menu" style={open ? { display: 'block' } : { display: 'none' }}>
                    <div><a onClick={removeGroup}><IoIosRemoveCircle /><p>remove</p></a></div>
                </div>
            </div>
            <div className="list-card-body">
                <ul className="list-card-items">
                    {
                        task.map((item, index) => {
                            return <ListItem key={index} id={item.id} for_completed title={item.title}/>
                        })
                    }
                </ul>
            </div>
            <div className="list-card-add-btn"><a onClick={addTask}><BiAddToQueue /><p>Add a card</p></a></div>

            <AddTask
                id={id}
                handleClose={addTask}
                handleShow={addTask}
                show={show}
            />
        </div>
    );
};

export default ListCard;