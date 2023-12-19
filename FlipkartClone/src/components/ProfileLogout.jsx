

const ProfileLogout = ({ account, setAccount }) => {
    return (
        <>
            <li className="cursor-pointer hover:font-semibold" onClick={() => { }}>Welcome {account}</li>
            <li className="cursor-pointer hover:font-semibold" onClick={() => { setAccount("") }}>Logout</li>
        </>
    )
}

export default ProfileLogout
