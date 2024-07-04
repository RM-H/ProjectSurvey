import {Questionitem, EmployeeQuestion, Spinner} from '../components'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material'

import {submitSurvey} from '../services/service.js'


const Questions = () => {
    const nav = useNavigate()

    const [totalPages, setTotoalPages] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const users = JSON.parse(localStorage.getItem('data'))

    useEffect(() => {


        setTotoalPages(users.users.length + 1)

    }, []);

    let content
    if (currentPage === 1) {
        content = <Questionitem info={users}/>
    } else {
        content = <EmployeeQuestion questions={users.survey} info={users.users[currentPage - 2]}/>
    }


    const handleSubmit = async () => {
        const userResponses = JSON.parse(localStorage.getItem('user_responses'))
        const info = JSON.parse(localStorage.getItem('data'))

        const formdata = new FormData()
        formdata.append('token', info.survey.token)
        formdata.append('q1_answer', userResponses.ofogh.q1_answer)
        formdata.append('q2_answer', userResponses.ofogh.q2_answer)
        formdata.append('q3_answer', userResponses.ofogh.q3_answer)
        formdata.append('q4_answer', userResponses.ofogh.q4_answer)
        formdata.append('q5_answer', userResponses.ofogh.q5_answer)
        formdata.append('surveyusers', JSON.stringify(userResponses.emloyees))


        setLoading(true)


        const response = await submitSurvey(formdata)
        if (response.data.code == 1) {
            setLoading(false)
            localStorage.clear()
            nav('/survey/thanks')

            history.pushState(null, null, window.location.href);

        } else {
            setLoading(false)
            alert(response.data.error)
            nav('/survey/'+info.survey.token)
        }


    }


    return (
        <>
            <div className='columns is-multiline paddingx dvh pt-3'>


                {
                    loading ?
                        <div className='column is-12 mt-6 is-flex is-align-items-center is-justify-content-center '
                             style={{minHeight: '60dvh'}}>
                            <Spinner/>
                        </div>
                        :


                        content

                }


                <div className='column is-12 is-flex is-justify-content-center is-align-items-center'>


                    {
                        loading === false && currentPage !== 1 && (
                            <button className='button clrfour is-color-black mb-4 mx-3 ' onClick={() => {
                                if (currentPage > 1) {
                                    setCurrentPage((prev) => prev - 1)
                                }
                            }}

                            >


                                <ArrowForwardIos/>
                                قبلی
                            </button>

                        )

                    }


                    {

                        loading === false && currentPage < totalPages && (
                            <button className='button clrfour is-color-black mb-4 mx-3  ' onClick={() => {
                                if (currentPage < totalPages) {
                                    setCurrentPage((prev) => prev + 1)
                                }

                            }}
                            >
                                بعدی
                                <ArrowBackIos/>
                            </button>

                        )
                    }

                    {
                        loading === false && currentPage === totalPages && (


                            <button className='button clrfour is-color-black mb-4 w100' onClick={handleSubmit}>
                                ثبت و ادامه
                            </button>


                        )

                    }


                </div>


            </div>


        </>
    )
}
export default Questions;