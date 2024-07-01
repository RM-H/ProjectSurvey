import {Outlet} from 'react-router-dom'
import {Nav} from '../components'


const Mainlayout = () => {


    return (
        <>
            <div className='maincontainer clreight'>
                <Nav/>


                <Outlet/>
            </div>



        </>
    )
}
export default Mainlayout;