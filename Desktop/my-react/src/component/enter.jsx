const Enter = () => {
    return(
        <div className="div-enter2">
            <form>
                <input className="input" type="text" placeholder="نام کاربری" style={{marginTop: "10px"}} />
                <input className="input" type="password" placeholder="رمز عبور" />
                <button className="button-no2">ورود به بخش مدیریت وبلاگ</button>
            </form>
            <a className="remember" href="#">کلمه عبور خود را فراموش کردم</a>
        </div>
    );
};

export default Enter;