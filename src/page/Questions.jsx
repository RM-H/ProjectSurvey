import {Questionitem, EmployeeQuestion} from '../components'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material'


const Questions = () => {
    const nav = useNavigate()

    const [totalPages, setTotoalPages] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const users = JSON.parse(localStorage.getItem('data'))

    useEffect(() => {


        setTotoalPages(users.surveyusers.length + 1)

    }, []);

    let content
    if (currentPage === 1) {
        content = <Questionitem info={users}/>
    } else {
        content = <EmployeeQuestion questions={users.survey}  info={users.surveyusers[currentPage - 2]}/>
    }


    return (
        <>
            <div className='columns is-multiline paddingx dvh pt-3'>


                {
                    content

                }


                <div className='column is-12 is-flex is-justify-content-center is-align-items-center'>


                    {
                        currentPage !== 1 && (
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

                        currentPage < totalPages && (
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
                        currentPage === totalPages && (


                            <button className='button clrfour is-color-black mb-4 w100' onClick={() => nav('/thanks')}>
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