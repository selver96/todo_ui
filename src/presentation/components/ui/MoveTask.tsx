import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useClickOutside } from '../../../application/hooks/useClickOutside';
import { useTypedSelector } from '../../../application/hooks/useTypedSelector';
import { TaskActionCreators } from '../../../application/redux/reducers/task/action-creators';
import DropDown from './FormItem/Input/DropDown';

interface Props {
    id: number;
    show: boolean;
    openMenu(): void;
    handleClose(): void;
}

const MoveTask = (props: Props) => {
    const { id, show, handleClose, openMenu} = props;
    const dispatch = useDispatch();
    const { taskGroup, error, isLoading} = useTypedSelector(state => state.task);
    const [groupId, setGroupId] = useState<number>(0);


    const moveTask = () => {
        const data = {
            group_id: groupId,
        }

        console.log(data)
        dispatch(TaskActionCreators.moveTask(id, data));
        dispatch(TaskActionCreators.setIsLoading(true));
        if(!isLoading){
            handleClose();
            openMenu();
        }
    }

    const addGroupId = (e: any) => {
        setGroupId(e.target.value);
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="move__task__item">
                        <DropDown
                            valueArray={taskGroup}
                            value={groupId}
                            onChange={addGroupId}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={moveTask}>
                        Move
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MoveTask;