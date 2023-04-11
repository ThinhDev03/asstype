import { useLocalStorage } from "../hooks"


const UserHeader = () => {
    const [user, setUser] = useLocalStorage('user', null)
    return <header className="bg-red-500">
        <div className="container mx-auto flex gap-4 items-center">
            <img className="w-[50px]" src="/logo.png" alt="" />
            <input className="grow" type="text" placeholder="Search" />
            <a href="/signin">Đăng nhập</a>
            <a href="/signup">Đăng kí</a>
            <p className="text-white">Xin chào: {user && user.lastName}</p>
        </div>
    </header>

}

export default UserHeader