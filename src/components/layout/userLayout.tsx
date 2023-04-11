import { Outlet } from 'react-router-dom'
import UserHeader from '../userHeader'
import Slider from './slider'
import Footer from './footer'
const UserLayout = () => {
    return <div>
        <UserHeader />
        <Slider />
        {/* Content */}
        <Outlet />
        <Footer />
    </div>
}

export default UserLayout