const Notfound = () => {
    return (


        <>
            <div draggable={false} className='dvh' style={{
                backgroundImage: 'url(/survey_asset/images/404.jpg)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#eaebef',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end'


            }}>
                <p draggable={false} className='has-text-weight-bold is-size-5' style={{marginBottom: '10rem'}}>
                    صفحه مورد نظر شما یافت نشد !
                </p>

            </div>


        </>
    )
}
export default Notfound;