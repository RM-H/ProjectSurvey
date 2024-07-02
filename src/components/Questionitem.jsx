import {Divider, Slider} from "@mui/material";


const Questionitem = ({question}) => {


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


            <div className='column is-12 my-6 borderrad1 shadowone px-6 clrten' style={{border:'2px solid #E1C886'}}>
                <div
                    className='is-flex is-align-items-center is-justify-content-space-around mb-3 clrfour borderrad1 shadowone py-2'
                    style={{transform: 'translateY(-3rem)'}}>
                    <img src="/asset/images/logo.png" className='bordercircle'
                         alt="" style={{maxHeight: '4rem'}}/>
                    <p className='clrseventext has-text-weight-bold'>
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

                        سوال درباره عملکرد کارمند ؟

                    </p>


                    <Slider
                        aria-label="Restricted values"
                        min={0}
                        max={5}
                        // defaultValue={defualtval !==null ? defualtval:3}

                        step={null}

                        marks={marks}
                        sx={{
                            mt: 3,
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
                        // onChange={(e) => dispatch(addvaluetoskill({q: question, v: e.target.value}))}

                    />


                    <Divider sx={{my: 2}}/>

                </div>
                <div>

                    <p>

                        سوال درباره عملکرد کارمند ؟

                    </p>


                    <Slider
                        aria-label="Restricted values"
                        min={0}
                        max={5}
                        // defaultValue={defualtval !==null ? defualtval:3}

                        step={null}

                        marks={marks}
                        sx={{
                            mt: 3,
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
                        // onChange={(e) => dispatch(addvaluetoskill({q: question, v: e.target.value}))}

                    />


                    <Divider sx={{my: 2}}/>

                </div>
                <div>

                    <p>

                        سوال درباره عملکرد کارمند ؟

                    </p>


                    <Slider
                        aria-label="Restricted values"
                        min={0}
                        max={5}
                        // defaultValue={defualtval !==null ? defualtval:3}

                        step={null}

                        marks={marks}
                        sx={{
                            mt: 3,
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
                        // onChange={(e) => dispatch(addvaluetoskill({q: question, v: e.target.value}))}

                    />


                    <Divider sx={{my: 2}}/>

                </div>


            </div>

            <Divider sx={{my: 2}}/>


        </>

    )
}
export default Questionitem;