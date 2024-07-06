import {useNavigate, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {getInfo, base_url} from "../services/service.js";
import {Spinner} from "../components/index.js";
import {ArrowBackIos} from '@mui/icons-material'
import {Link} from 'react-router-dom'


const Results_admin = () => {
    const {token} = useParams()
    const [data, setData] = useState(false)

    const nav = useNavigate()

    const getdata = async () => {
        const formdata = new FormData()
        formdata.append('token', token)
        const response = await getInfo(formdata)
        if (response.data.code == 1) {
            setData(response.data)
        } else {


            alert(response.data.error)
            nav('/survey/notfound/1')
        }

    }

    useEffect(() => {

        getdata()
    }, []);


    let content

    if (data) {
        content =
            <div className="column borderrad1 shadowone p-5 is-12 clrten">
                <div className="">
                    <p className="is-size-5 has-text-weight-bold mb-5 ">

                        مشخصات نظرسنجی


                        <Link to={'https://mis.ofoghiranianteam.ir/admin/survey'}>
                            <button className='button is-float-left clrtwo clrseventext'>

                                بازگشت
                                <ArrowBackIos/>
                            </button>
                        </Link>


                    </p>
                    <table className="table  is-hoverable is-striped is-fullwidth is-bordered  theme-light">
                        <tbody className="">
                        <tr className="">
                            <th className="has-text-right">نام پروژه</th>
                            <td>{data.survey.project_name}</td>
                        </tr>
                        <tr className="">
                            <th className="has-text-right">تاریخ</th>
                            <td>{new Date(data.survey.date * 1000).toLocaleString('fa-IR')}</td>
                        </tr>
                        <tr className="">
                            <th className="has-text-right">میانگین رضایت</th>
                            <td className={data.survey.average < 2 ? 'is-color-danger' : data.survey.average < 4 ? 'is-color-warning' : 'is-color-success'}>%{data.survey.average * 20}</td>
                        </tr>
                        <tr className="">
                            <th className="has-text-right">نام مشتری</th>
                            <td>{data.customer.name}</td>
                        </tr>
                        <tr className="">
                            <th className="has-text-right">شماره مشتری</th>
                            <td>{data.customer.phone}</td>
                        </tr>
                        <tr className="">
                            <th className="has-text-right">وضعیت</th>
                            <td>{data.survey.done == 1 ? 'انجام شده' : 'در انتظار تکمیل'}</td>
                        </tr>

                        </tbody>
                    </table>


                    {
                        data.survey.done == 1 &&
                        <>

                            <p className="is-size-5 has-text-weight-bold mb-1">نظرسنجی مجموعه</p>
                            <table className="table is-hoverable is-striped is-fullwidth theme-light has-text-centered">
                                <thead>
                                <tr className="">
                                    <th className="has-text-centered">سوال</th>
                                    <th className="has-text-centered">جواب</th>
                                </tr>
                                </thead>
                                <tbody className="">

                                <tr className="">
                                    <td className="">{data.survey.q1_text}</td>
                                    <td className="">%{data.survey.q1_answer * 20}</td>
                                </tr>
                                <tr className="">
                                    <td className="">{data.survey.q2_text}</td>
                                    <td className="">%{data.survey.q2_answer * 20}</td>
                                </tr>
                                <tr className="">
                                    <td className="">{data.survey.q3_text}</td>
                                    <td className="">%{data.survey.q3_answer * 20}</td>
                                </tr>
                                <tr className="">
                                    <td className="">{data.survey.q4_text}</td>
                                    <td className="">%{data.survey.q4_answer * 20}</td>
                                </tr>
                                <tr className="">
                                    <td className="">{data.survey.q5_text}</td>
                                    <td className="">%{data.survey.q5_answer * 20}</td>
                                </tr>
                                <tr className="clrtwo ">
                                    <td className="clrseventext">میانگین</td>
                                    <td className="clrseventext">%{data.survey.average * 20}</td>
                                </tr>
                                </tbody>
                            </table>


                            <p className="is-size-5 has-text-weight-bold mb-1">نظرسنجی کارمندان</p>
                            {
                                data.surveyusers.map((item) => (
                                    <div key={item.user_id} className='borderrad1 my-3 shadowone pt-2'>

                                        <div
                                            className='is-flex is-justify-content-space-around is-align-items-center mb-3'>
                                            <p className='has-text-weight-bold   '>{item.name} {'   '} {item.family}</p>
                                            <img className='bordercircle' src={`${base_url}/${item.avatar}`}
                                                 style={{maxHeight: '6rem'}}/>

                                        </div>

                                        <table key={item.user_id}
                                               className="table is-hoverable is-striped is-fullwidth  has-text-centered theme-light">


                                            <thead>

                                            <tr className="">
                                                <th className="has-text-centered">سوال</th>
                                                <th className="has-text-centered">جواب</th>
                                            </tr>
                                            </thead>
                                            <tbody className="">

                                            <tr className="">
                                                <td className="">{item.question1_text}</td>
                                                <td className="">%{item.question1_answer * 20}</td>
                                            </tr>
                                            <tr className="">
                                                <td className="">{item.question2_text}</td>
                                                <td className="">%{item.question2_answer * 20}</td>
                                            </tr>
                                            <tr className="">
                                                <td className="">{item.question3_text}</td>
                                                <td className="">%{item.question3_answer * 20}</td>
                                            </tr>
                                            <tr className="">
                                                <td className="">{item.question4_text}</td>
                                                <td className="">%{item.question4_answer * 20}</td>
                                            </tr>

                                            <tr className="clrtwo ">
                                                <td className="clrseventext">میانگین</td>
                                                <td className="clrseventext">%{item.average_number * 20}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                ))

                            }

                        </>


                    }


                </div>
            </div>
    } else {

        content = <div className='column is-12 mt-6 is-flex is-align-items-center is-justify-content-center '
                       style={{minHeight: '60dvh'}}>
            <Spinner/>
        </div>

    }


    return (
        <>

            <div className='columns is-flex is-multiline paddingx dvh p-6 is-align-items-center ' style={{
                backgroundImage: 'url(/survey_asset/images/wallpaper.svg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}>

                {
                    content
                }

            </div>


        </>
    )
}
export default Results_admin;