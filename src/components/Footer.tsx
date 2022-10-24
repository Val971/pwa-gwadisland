import { GrInstagram } from 'react-icons/gr';

import '@/components/styles/footer.scss';

export default function Footer() {
  return (
    <div className="footer-content">
      <div className="firstfooter">
        <div className="firstfooter-content">
          <div className="col1">
            <h3>APP NAME</h3>
            <p style={{ color: ' #2d848a' }}>appname@gmail.com</p>
            <p>+59 06 90 47 85</p>
          </div>
          <div className="col2">
            <h3>Quick links</h3>
            <p>Home</p>
            <p>About</p>
            <p>Activities</p>
            <p>Contacts</p>
          </div>
          <div className="col3">
            <GrInstagram color={'  #2d848a'} size={35} />
          </div>
        </div>
      </div>
      <div className="lastfooter">
        <p>© 2022 Wonder Tour. All rights reserved.</p>
      </div>
    </div>
  );
}
