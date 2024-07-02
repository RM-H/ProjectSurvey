import {Divider, Slider} from "@mui/material";


const Employeeitem = ({info}) => {


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
            <div className='column is-12 my-6 borderrad1 shadowone px-6 clrten' style={{border:'3px solid #1B95A2'}}>
                <div className='is-flex is-align-items-center is-justify-content-space-around mb-3 clrthree borderrad1 shadowone py-2' style={{transform:'translateY(-3rem)'}}>
                    <img src="https://mis.ofoghiranianteam.ir/images/662f236f295c2.jpg" className='bordercircle' alt="" style={{maxHeight:'5rem'}}/>
                    <p className='clrseventext has-text-weight-bold'>
                        {info}
                      <br/>
                        <i className='is-size-7'>
                            برنامه نویس
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
export default Employeeitem;
