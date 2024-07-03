import {Divider, Slider} from "@mui/material";
import {base_url} from '../services/service.js'
import {useEffect, useState} from "react";


const Employeeitem = ({info, questions}) => {

    const [show, setShow] = useState(false)
    const [response, setResponse] = useState(false)
    const [userindex, setIndex] = useState(false)


    useEffect(() => {
        setIndex(false)
        const localresponse = JSON.parse(localStorage.getItem('user_responses'))
        setResponse(localresponse)



    }, []);


    const handleChange = (q, a) => {


        let basedata = response
        let userid = info.user_id

        const index = response.emloyees.findIndex((item) =>
            (item.user_id == userid)
        )
    

        basedata.emloyees[index][q] = a
        localStorage.setItem('user_responses', JSON.stringify(response))


    }


    useEffect(() => {

        setShow(false)

        setTimeout(() => {
            setShow(true)

        }, 50)





    }, [info]);

    const marks = [
        {
            value: 0,
            label: 'ناراضی ',
        },
        {
            value: 1,
            label: '20%',
        },
        {
            value: 2,
            label: '40%',
        },
        {
            value: 3,
            label: '60%',
        },
        {
            value: 4,
            label: '80%',
        },
        {
            value: 5,
            label: 'رضایت کامل',
        },
    ];
    return (
        <>



            {show && response &&
                <div
                    className='column animate__animated animate__fadeInLeft is-12 mt-6 borderrad1 shadowone px-6 clrten'
                    style={{border: '3px solid #1B95A2'}}>
                    <div
                        className='is-flex is-align-items-center is-justify-content-space-around mb-3 clrthree borderrad1 shadowone py-2'
                        style={{transform: 'translateY(-3rem)'}}>
                        <img src={`${base_url}/${info.avatar}`} className='bordercircle' alt=""
                             style={{maxHeight: '5rem'}}/>
                        <p className='clrseventext has-text-weight-bold'>
                            {info.name}
                            {' '}
                            {info.family}

                        </p>
                    </div>


                    {/*questions*/}
                    <div>

                        <p>

                            {questions.question1}

                        </p>


                        <Slider
                            aria-label="Restricted values"
                            min={0}
                            max={5}
                            defaultValue={3}

                            step={null}

                            marks={marks}
                            sx={{

                                '& .MuiSlider-markLabel': {
                                    fontFamily: 'yekan-reg'
                                },
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#4FE8E3'
                                },
                                '&.MuiSlider-colorPrimary': {
                                    color: '#1B95A2'
                                }
                            }}
                            onChange={(e) => handleChange('question1_answer', e.target.value)}

                        />


                        <Divider sx={{mb: 2}}/>

                    </div>
                    <div>

                        <p>

                            {questions.question2}

                        </p>


                        <Slider
                            aria-label="Restricted values"
                            min={0}
                            max={5}
                            defaultValue={3}

                            step={null}

                            marks={marks}
                            sx={{

                                '& .MuiSlider-markLabel': {
                                    fontFamily: 'yekan-reg'
                                },
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#4FE8E3'
                                },
                                '&.MuiSlider-colorPrimary': {
                                    color: '#1B95A2'
                                }
                            }}
                            onChange={(e) => handleChange('question2_answer', e.target.value)}

                        />


                        <Divider sx={{mb: 2}}/>

                    </div>
                    <div>

                        <p>

                            {questions.question3}

                        </p>


                        <Slider
                            aria-label="Restricted values"
                            min={0}
                            max={5}
                            defaultValue={3}

                            step={null}

                            marks={marks}
                            sx={{

                                '& .MuiSlider-markLabel': {
                                    fontFamily: 'yekan-reg'
                                },
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#4FE8E3'
                                },
                                '&.MuiSlider-colorPrimary': {
                                    color: '#1B95A2'
                                }
                            }}
                            onChange={(e) => handleChange('question3_answer', e.target.value)}

                        />


                        <Divider sx={{mb: 2}}/>

                    </div>
                    <div>

                        <p>

                            {questions.question4}

                        </p>


                        <Slider
                            aria-label="Restricted values"
                            min={0}
                            max={5}
                            defaultValue={3}

                            step={null}

                            marks={marks}
                            sx={{

                                '& .MuiSlider-markLabel': {
                                    fontFamily: 'yekan-reg'
                                },
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#4FE8E3'
                                },
                                '&.MuiSlider-colorPrimary': {
                                    color: '#1B95A2'
                                }
                            }}
                            onChange={(e) => handleChange('question4_answer', e.target.value)}

                        />


                        <Divider sx={{mb: 2}}/>

                    </div>


                </div>
            }


        </>

    )
}
export default Employeeitem;
