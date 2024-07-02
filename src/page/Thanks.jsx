import {Link} from 'react-router-dom'


const Thanks = () => {
    return (
        <>
            <div
                className='columns paddingx is-flex is-flex-direction-column is-justify-content-center   '
                style={{minHeight: '80dvh'}}>
                <div className='column is-12-tablet is-flex-grow-0 clrseven shadowone borderrad1 has-text-centered'>

                    <img

                        src="/asset/images/check.png"
                        alt=""
                        style={{maxHeight: '4rem'}}/>
                    <article className=' '>
                        نظر شما با موفقیت ثبت شد.
                        <br/>
                        به امید همراهی مجدد با شما در پروژه های آتی.
                        <br/>
                        <Link to={'https://ofoghiranian.com/'}>
                            <strong className='clrtwotext'>
                                افق ایرانیان
                            </strong>

                        </Link>


                    </article>


                </div>

            </div>


        </>
    )
}
export default Thanks;