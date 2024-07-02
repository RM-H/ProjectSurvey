import {Questionitem, EmployeeQuestion} from '../components'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material'


const Questions = () => {
    const nav = useNavigate()

    const [totalPages, setTotoalPages] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)


    let testdata = ['برنامه نویس 1', 'برنامه نویس 2', 'برنامه نویس 3', 'برنامه نویس 4', 'برنامه نویس 5']
    useEffect(() => {

        setTotoalPages(testdata.length + 1)

    }, []);

    let content
    if (currentPage === 1) {
        content = <Questionitem/>
    } else {
        content = <EmployeeQuestion info={testdata[currentPage - 2]}/>
    }


    return (
        <>
            <div className='columns is-multiline paddingx' style={{minHeight: '90dvh'}}>


                {
                    content

                }


                <div className='column is-12 is-flex is-justify-content-center is-align-items-center'>


                    {
                        currentPage !== 1 && (
                            <button className='button clrtwo clrseventext mb-4 mx-3 ' onClick={() => {
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
                            <button className='button clrtwo clrseventext mb-4 mx-3  ' onClick={() => {
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


                </div>

                {
                    currentPage === totalPages && (

                        <div className='column is-12 has-text-centered '>
                            <button className='button clrtwo clrseventext w100' onClick={() => nav('/thanks')}>
                                ثبت و ادامه
                            </button>

                        </div>
                    )

                }


            </div>


        </>
    )
}
export default Questions;