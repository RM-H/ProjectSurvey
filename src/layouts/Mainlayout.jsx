import {Outlet} from 'react-router-dom'
import {Nav} from '../components'


const Mainlayout = () => {


    return (
        <>
            <div className='maincontainer clrnine' style={{
                backgroundImage: 'url(/asset/images/wallpaper.svg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}>
                <Nav/>


                <Outlet/>
            </div>


        </>
    )
}
export default Mainlayout;