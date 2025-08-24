import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container bg-gradient-to-b from-main-green to-gray-800">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">لُمیسا</h3>
          <p className="footer-description">
            بهترین جواهرات و زیورآلات با کیفیت عالی
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">دسترسی سریع</h4>
          <ul className="footer-links">
            <li><a href="/">خانه</a></li>
            <li><a href="/men">مردانه</a></li>
            <li><a href="/women">زنانه</a></li>
            <li><a href="/bangle">دستبند</a></li>
            <li><a href="/chain">گردنبند</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">تماس با ما</h4>
          <div>
            <div className="contact-info">
              <a href="">درباره ما</a>
              <p className='mt-6'>راه های ارتباطی</p>
            </div>
          </div>
          <div className="contact-info">
            <p>📧 info@lomisa.com</p>
            <p>📞 051-38945678</p>
            <p>📍 مشهد, خیابان مطهری</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">شبکه‌های اجتماعی</h4>
          <div className="social-links flex-col">
            <a href="#" className="social-link">اینستاگرام</a>
            <a href="#" className="social-link">تلگرام</a>
            <a href="#" className="social-link">واتساپ</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 1404 لُمیسا - تمامی حقوق محفوظ است</p>
      </div>
    </footer>
  );
};

export default Footer;