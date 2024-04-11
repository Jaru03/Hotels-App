import './style/UserLogged.css'

const UserLogged = ({setUser, user}) => {
  

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser()
    }

    return (
    <article className="userLogged">
        <header className='userLogged__header'><img className='userLogged__img' src={
            user.gender === 'female' ? '../famaleIcon.png': '../maleIcon.png'
        } alt="" /></header>
        <h2 className='userLogged__name'>{user.firstName} {user.lastName}</h2>
        <button className='userLogged__button' onClick={handleLogout}>Logout</button>
    </article>
  )
}

export default UserLogged