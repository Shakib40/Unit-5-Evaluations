import React from 'react'
import { useSelector } from 'react-redux';

export const About = () => {

    const { companyJob } = useSelector((state) => ({
        companyJob: state.companyState.companyJob,

    }), function (prev, cur) {
        if (prev.loading === cur.loading && prev.error === cur.error) {
            return true;
        }
        else {
            return false;
        }

    });
    console.log(companyJob);

    // getTodo();

    async function getTodo() {
        // dispatch(getTodoLoading())
        fetch("http://localhost:3001/companyJob")
            .then(res =>
                res.json()
            )
            .then((out) =>
                data = out
            )
            .catch(err =>
                console.log(err)
            )
    }
    console.log(data);

    return (
        <div>
            <h1>Jobs</h1>
            {data.map(job => {
                <div>{job.companyname}</div>
            })}
        </div>
    )

}

