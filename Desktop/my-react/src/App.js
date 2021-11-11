import './App.css';
import Card from './component/card';
import Enter from './component/enter';
import Footer from './component/footer';
import Logo from './component/logo';
import Submit from './component/submit';

function App() {
  return (
      <div className="div-general">
          <div className="div-logo">
                <Logo />
          </div>
          <div className="div-enter">
                <Submit />
                <Enter />
          </div>
          <div className="div-middlepart">
              <hr />
              <p className="title">
                  وبلاگ‌های به روز شده
              </p>
              <hr />
          </div>
          <div className="div-cards">
                <Card subject="شیرینی دانمارکی" />
                <Card subject="شیرینی خرمایی"/>
                <Card subject="شیرینی ناپلئونی"/>
                <Card subject="شیرینی برنجی"/>
                <Card />
                <Card />
                <Card />
                <Card />
          </div>
          <div className="div-footer">
                <Footer />
          </div>
      </div>
  );
}

export default App;
