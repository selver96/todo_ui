import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MdTitle } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import useInput from '../../../application/hooks/useInput';
import { useTypedSelector } from '../../../application/hooks/useTypedSelector';
import { TaskActionCreators } from '../../../application/redux/reducers/task/action-creators';
import Input from './FormItem/Input/Input';

interface Props {
    id: number;
    show: boolean;
    handleClose(): void;
    handleShow(): void;
}

const AddTask: FC<Props> = (props) => {
    const { id, show, handleClose, handleShow } = props;
    const { user } = useTypedSelector(state => state.auth);
    const dispatch = useDispatch();
    const { taskGroup, error, isLoading} = useTypedSelector(state => state.task);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');


    const addTask = () => {
        const data = {
            title: title,
            end_at: date,
            user_id: user.id,
            group_id: id,
        }
        dispatch(TaskActionCreators.addTask(data));
        dispatch(TaskActionCreators.setIsLoading(true));
        if(!isLoading){
            handleClose();
            setTitle('');
            setDate('');
        }
    }

    const addTitle = (e: any) => {
        setTitle(e.target.value);
        
    }

    const addDate = (e: any) => {
        setDate(e.target.value);
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="add__task__item">
                        <Input
                            icon={<MdTitle />}
                            fields={
                                {
                                    type: 'text',
                                    placeholder: 'Title',
                                    value: title,
                                    onChange: addTitle
                                }
                            }
                        />
                    </div>
                    <div className="add__task__due__date">
                        <p>Due Date:</p>
                        <input 
                            type="datetime-local"
                            placeholder='Due Date'
                            value={date}
                            onChange={addDate}
                        />
                    </div>
                    {/* <div className="reg__form__item">
                        <DropDown />
                    </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addTask}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddTask;