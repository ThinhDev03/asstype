import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Menu from './menu'
import DetailProduct from '../detailproduc'

const DetailLayout = () =>{
    return <div>
        <Header/>
        <Menu/>
        <Outlet/>
        <Footer/>
    </div>
}
export default DetailLayout