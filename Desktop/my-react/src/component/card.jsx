const Card = ({subject="کیک کدو حلوایی"}) => {
    return(
        <div className="card">
            <p>{subject}</p>
            <a href="#">hossein-heydari.ir</a>
            <p>این مطلب در مورد پرده اتاق کودک بسیار زیبا و شیک است. این مطلب از سایت اتاق میباشد. برای مشاهده‌ی کامل این مطلب به سایت اتاق مراجعه کنید.</p>
        </div>
    );
};

export default Card;