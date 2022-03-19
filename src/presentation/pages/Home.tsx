import { useEffect, useState } from 'react';
import ListCard from '../components/ui/ListCard';

import '../../application/css/home.css'
import { BiAddToQueue } from 'react-icons/bi';
import AddTaskGroup from '../components/ui/AddTaskGroup';
import { useTypedSelector } from '../../application/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { TaskActionCreators } from '../../application/redux/reducers/task/action-creators';

const Home = () => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const { taskGroup, error, isLoading } = useTypedSelector(state => state.task);


    useEffect(() => {
        dispatch(TaskActionCreators.getTask());
    }, [isLoading])


    const addGroup = () => {
        setShow(!show);
    }

    return (
        <section className='home'>
            <div className="home__content">

                    {
                        taskGroup.map((item, index) => {
                            return <div className="content__item"> <ListCard
                                id={item.id}
                                title={item.title}
                                task={item.tasks}
                                key={index}
                            /></div>
                        })
                    }

                    <div className="home__add__card__btn" onClick={addGroup}>
                        <a><BiAddToQueue /><p>Add a card</p></a>
                    </div>
                

            </div>

            <AddTaskGroup
                handleClose={addGroup}
                handleShow={addGroup}
                show={show}
            />
        </section>
    );
};

export default Home;