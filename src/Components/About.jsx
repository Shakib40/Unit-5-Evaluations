import React from 'react'
import { useSelector } from 'react-redux';

export const About = () => {

    const { companyJob } = useSelector((state) => ({
        companyJob: state.companyState.loading,

    }), function (prev, cur) {
        if (prev.loading === cur.loading && prev.error === cur.error) {
            return true;
        }
        else {
            return false;
        }

    });

    // async function getTodo() {
    //     dispatch(getTodoLoading())
    //     fetch("http://localhost:3001/todos")
    //         .then(res =>
    //             res.json()
    //         )
    //         .then((out) =>
    //             dispatch(getTodoSuccess(out))
    //         )
    //         .catch(err =>
    //             dispatch(getTodoError(err))
    //         )
    // }

    return (
        <div>
            <h1>Jobs</h1>

        </div>
    )

}

