import { isMobile } from 'react-device-detect';
import LazyLoad from 'react-lazy-load';

import './styles/work.scss';

export default function Work() {
  return (
    <div className="work-content">
      <h3>How does it work?</h3>
      <div className="work-section">
        <div className="work-section-left">
          <div className="work-card">
            <LazyLoad>
              <img alt="icon1" className="swiper-lazy" src={`/assets/propositions-icon 1.png`} />
            </LazyLoad>
            {/* <div className="number-outline">1</div> */}
            <p>Sign in</p>
            <p>Whether you just need a quick logo or a full startup branding package.</p>
          </div>
          <div className="work-card">
            {/* <div className="number-outline">2</div> */}
            <LazyLoad>
              <img alt="icon2" className="swiper-lazy" src={`/assets/propositions-icon 2.png`} />
            </LazyLoad>
            <p>Add your business</p>
            <p>Whether you just need a quick logo or a full startup branding package.</p>
          </div>
        </div>

        {!isMobile && <img src={`/assets/Smartphone.png`} className="swiper-lazy" />}
        <div className="work-section-right">
          <div className="work-card">
            {/* <div className="number-outline">3</div> */}
            <LazyLoad>
              <img alt="icon3" className="swiper-lazy" src={`/assets/propositions-icon 3.png`} />
            </LazyLoad>
            <p>Share your business</p>
            <p>Whether you just need a quick logo or a full startup branding package.</p>
          </div>
          <div className="work-card">
            {/* <div className="number-outline">4</div> */}
            <LazyLoad>
              <img alt="icon4" className="swiper-lazy" src={`/assets/propositions-icon 4.png`} />
            </LazyLoad>
            <p>Share your business</p>
            <p>Whether you just need a quick logo or a full startup branding package.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
