import {useNavigate} from "react-router-dom";
import {Spinner} from '../components'
import {useEffect, useState} from "react";
import {getInfo} from '../services/service.js'

const Landing = () => {

    const [data, setData] = useState(false)


    // getting survey info
    const getData = async () => {
        const formdata = new FormData()
        formdata.append('token', 'x22')
        const response = await getInfo(formdata)
        if (response.data.code == 1) {

            if (response.data.survey.done == 1) {
                nav('/thanks')
            } else {
                console.log(response.data)
                localStorage.setItem('data', JSON.stringify(response.data))
                localStorage.setItem('user_responses', JSON.stringify({
                    'ofogh': {
                        q1_answer: 3,
                        q2_answer: 3,
                        q3_answer: 3,
                        q4_answer: 3,
                        q5_answer: 3


                    },
                    'emloyees':

                        response.data.surveyusers.map((item) => {
                            return {
                                'user_id': item.user_id,
                                'question1_answer': 3,
                                'question2_answer': 3,
                                'question3_answer': 3,
                                'question4_answer': 3,

                            }
                        })

                }))
                setData(response.data)
            }


        } else {
            alert(response.data.error)
        }

    }

    useEffect(() => {

        getData()


    }, []);

    let content
    if (data !== false) {
        content =
            <article className='p-2 has-text-justified is-color-black' style={{lineHeight: '1.6rem'}}>


                {data.customer.name}
                {' '}
                گرامی
                <br/>

                از شما بابت انتخاب مجموعه
                {'  '}
                <strong className='clrtwotext'>
                    افق ایرانیان
                </strong>
                {'  '}

                در انجام پروژه
                {'  '}
                {data.survey.project_name}
                {'  '}
                سپاسگزاریم.
                <br/>
                آژانس تبلیغاتی و برندینگ افق ایرانیان سعی دارد با همکاری شما عزیزان، برای افزایش رضایت مشتریان و
                بهبود عملکرد تیم تولید در حوزه تبلیغات و برندینگ قدم بردارد.
                <br/>

                در این راستا با توجه به 3 عامل مهم
                برای ما یعنی
                {'  '}
                <strong className='clrtwotext'>

                    نحوه برقراری ارتباط کارشناسان
                </strong>

                ،
                {'  '}
                <strong className='clrtwotext'>
                    فرایند تولید
                </strong>
                {'  '}
                و
                {'  '}
                <strong className='clrtwotext'>


                    کیفیت نهایی پروژه تولید شده
                </strong>

                ، فرم
                زیر آماده شده است.
                <br/>
                لطفاً با تکمیل این فرم نظرسنجی، ما را در بهبود کیفیت خدمات یاری کنید. نظرات و پیشنهادات شما برای
                ما بسیار ارزشمند است و به مجموعه افق ایرانیان کمک می کند تا نیازها و انتظارات شما مشتریان عزیز
                را بهتر درک کند.

                از ارائه بازخورد صادقانه شما سپاسگزاریم.
            </article>
    } else {
        content =
            <div>
                <Spinner/>
            </div>

    }


    const nav = useNavigate()
    return (
        <>
            <div
                className='columns paddingx is-flex is-flex-direction-column is-justify-content-center dvh  '
            >
                <div className='column is-12-tablet is-flex-grow-0 clrseven   shadowone borderrad1 has-text-centered'
                >

                    <img src="/asset/images/logo.png" alt=""
                         style={{maxHeight: '3.6rem', transform: 'translateY(-2.3rem)'}}/>
                    {
                        content
                    }


                    <button disabled={!data} className='button clrfour is-color-black  my-3'
                            onClick={() => nav('/survey')}>
                        ادامه
                    </button>
                </div>

            </div>


        </>
    )
}
export default Landing;