import {useNavigate} from "react-router-dom";

const Landing = () => {

    const nav = useNavigate()
    return (
        <>
            <div
                className='columns paddingx is-flex is-flex-direction-column is-justify-content-center   '
                style={{minHeight: '80dvh'}}>
                <div className='column is-12-tablet is-flex-grow-0 clrseven   shadowone borderrad1 has-text-centered'>
                    <article className='p-2 has-text-justified' style={{lineHeight:'1.6rem'}}>


                        جناب آقای/مجموعه فلانی،
                        از شما بابت انتخاب مجموعه
                        {'  '}
                        <strong className='clrtwotext'>
                            افق ایرانیان
                        </strong>
                        {'  '}

                        در انجام پروژه فلان

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

                    <button className='button clrtwo clrseventext my-3' onClick={()=>nav('/survey')}>
                        ادامه
                    </button>
                </div>

            </div>


        </>
    )
}
export default Landing;