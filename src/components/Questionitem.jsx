import {Divider, Slider} from "@mui/material";
import {useEffect, useState} from "react";
import {Spinner} from '../components/index.js'


const Questionitem = ({info}) => {


    const [response, setResponse] = useState(false)

    useEffect(() => {
        const response = JSON.parse(localStorage.getItem('user_responses'))
        setResponse(response)
    }, []);


    const handleChange = (q, a) => {

        let basedata = response
        basedata.ofogh[q] = a

        localStorage.setItem('user_responses', JSON.stringify(basedata))

    }


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
            {
                response !== false ?
                    <div
                        className='column animate__animated animate__fadeInDown is-12 mt-6 borderrad1 shadowone px-6 clrten'
                        style={{border: '2px solid #E1C886'}}>
                        <div
                            className='is-flex is-align-items-center is-justify-content-space-around  clrfour borderrad1 shadowone py-2'
                            style={{transform: 'translateY(-3rem)'}}>
                            <img src="/asset/images/logo.png" className='bordercircle'
                                 alt="" style={{maxHeight: '3rem'}}/>
                            <p className=' has-text-weight-bold'>
                                مجموعه افق ایرانیان
                                <br/>
                                <i className='is-size-7'>
                                    آژانس تبلیغاتی
                                </i>
                            </p>
                        </div>


                        {/*questions*/}
                        <div>

                            <p>

                                {info.survey.q1_text}

                            </p>


                            <Slider
                                aria-label="Restricted values"
                                min={0}
                                max={5}
                                defaultValue={response.ofogh.q1_answer}

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
                                onChange={(e) => handleChange('q1_answer', e.target.value)}

                            />


                            <Divider sx={{mb: 2}}/>

                        </div>
                        <div>

                            <p>

                                {info.survey.q2_text}

                            </p>


                            <Slider
                                aria-label="Restricted values"
                                min={0}
                                max={5}
                                defaultValue={response.ofogh.q2_answer}

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
                                onChange={(e) => handleChange('q2_answer', e.target.value)}

                            />


                            <Divider sx={{mb: 2}}/>

                        </div>
                        <div>

                            <p>

                                {info.survey.q3_text}

                            </p>


                            <Slider
                                aria-label="Restricted values"
                                min={0}
                                max={5}
                                defaultValue={response.ofogh.q3_answer}

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
                                onChange={(e) => handleChange('q3_answer', e.target.value)}

                            />


                            <Divider sx={{mb: 2}}/>

                        </div>
                        <div>

                            <p>

                                {info.survey.q4_text}

                            </p>


                            <Slider
                                aria-label="Restricted values"
                                min={0}
                                max={5}
                                defaultValue={response.ofogh.q4_answer}

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
                                onChange={(e) => handleChange('q4_answer', e.target.value)}

                            />


                            <Divider sx={{mb: 2}}/>

                        </div>
                        <div>

                            <p>

                                {info.survey.q5_text}

                            </p>


                            <Slider
                                aria-label="Restricted values"
                                min={0}
                                max={5}
                                defaultValue={response.ofogh.q5_answer}

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
                                onChange={(e) => handleChange('q5_answer', e.target.value)}

                            />


                            <Divider sx={{mb: 2}}/>

                        </div>


                    </div>
                    :
                    <div className='column is-12 mt-6 is-flex is-align-items-center is-justify-content-center '
                         style={{minHeight: '60dvh'}}>
                        <Spinner/>
                    </div>


            }


        </>

    )
}
export default Questionitem;