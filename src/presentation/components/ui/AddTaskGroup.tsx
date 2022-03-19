import React, { FC, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MdTitle } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import useInput from '../../../application/hooks/useInput';
import { useTypedSelector } from '../../../application/hooks/useTypedSelector';
import { TaskActionCreators } from '../../../application/redux/reducers/task/action-creators';
import Input from './FormItem/Input/Input';

interface Props {
    show: boolean;
    handleClose(): void;
    handleShow(): void;
}

const AddTaskGroup: FC<Props> = (props) => {
    const { show, handleClose } = props;
    const title = useInput('');

    const [isCompleted, setIsCompleted] = useState(false);

    const dispatch = useDispatch();
    const { isLoading} = useTypedSelector(state => state.task);

    
    const addTask = () => {
        const body = {
            title: title.value,
            for_completed: isCompleted
        }
        dispatch(TaskActionCreators.addTaskGroup(body));
        dispatch(TaskActionCreators.setIsLoading(true));
        if(!isLoading){
            handleClose()
        }
        
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="reg__form__item">
                        <Input
                            icon={<MdTitle />}
                            fields={
                                {
                                    type: 'text',
                                    placeholder: 'Title',
                                    ...title
                                }
                            }
                        />
                    </div>
                    <div className="checkbox__form__item">
                        <input readOnly type="checkbox" name="for_completed" checked={isCompleted} onClick={()=>setIsCompleted(!isCompleted)} id="for_completed"/><label htmlFor="for_completed">For Completed</label>
                    </div>
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

export default AddTaskGroup;