import {Outlet} from 'react-router-dom'



const Mainlayout = () => {


    return (
        <>
            <div className='maincontainer clrnine' style={{
                backgroundImage: 'url(/asset/images/wallpaper.svg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}>



                <Outlet/>
            </div>


        </>
    )
}
export default Mainlayout;