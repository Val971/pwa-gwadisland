import React from 'react';
import { FaBed } from 'react-icons/fa';
import { MdOutlineFastfood, MdOutlineNightlight, MdOutlineSportsVolleyball } from 'react-icons/md';
import { TiThSmall } from 'react-icons/ti';

import './styles/chips.scss';

export default function Chips({ category, handleCategory }: any) {
  return (
    <>
      <div className="chip-categories">
        <button
          className={`button-81 ${category === 'all' ? 'button-81-active' : ''}`}
          onClick={() => handleCategory('all')}
          role="button"
        >
          <div className="chips-categories-flex">
            <TiThSmall size={20} />
            {'All'}
          </div>
        </button>
        <button
          className={`button-81 ${category === 'food' ? 'button-81-active' : ''}`}
          onClick={() => handleCategory('food')}
          role="button"
        >
          <div className="chips-categories-flex">
            <MdOutlineFastfood size={20} />
            {'Food'}
          </div>
        </button>
        <button
          className={`button-81 ${category === 'night' ? 'button-81-active' : ''}`}
          onClick={() => handleCategory('night')}
          role="button"
        >
          <div className="chips-categories-flex">
            <MdOutlineNightlight size={20} />
            {'Beauty'}
          </div>
        </button>
        <button
          className={`button-81 ${category === 'room' ? 'button-81-active' : ''}`}
          onClick={() => handleCategory('room')}
          role="button"
        >
          <div className="chips-categories-flex">
            <FaBed size={20} />
            {'Hebergement'}
          </div>
        </button>
        <button
          className={`button-81 ${category === 'activities' ? 'button-81-active' : ''}`}
          onClick={() => handleCategory('activities')}
          role="button"
        >
          <div className="chips-categories-flex">
            <MdOutlineSportsVolleyball size={20} />
            {'Sport'}
          </div>
        </button>
      </div>
      <div className="chips-mobile">
        <div className="chips-content">
          <button
            className={`button-81 ${category === 'all' ? 'button-81-active' : ''}`}
            onClick={() => handleCategory('all')}
            role="button"
          >
            <TiThSmall size={20} />
          </button>
          <span className="chips-label">All</span>
        </div>
        <div className="chips-content">
          <button
            className={`button-81 ${category === 'food' ? 'button-81-active' : ''}`}
            onClick={() => handleCategory('food')}
            role="button"
          >
            <MdOutlineFastfood size={20} />
          </button>
          <span className="chips-label">Food</span>
        </div>
        <div className="chips-content">
          <button
            className={`button-81 ${category === 'night' ? 'button-81-active' : ''}`}
            onClick={() => handleCategory('night')}
            role="button"
          >
            <MdOutlineNightlight size={20} />
          </button>
          <span className="chips-label">Night</span>
        </div>
        <div className="chips-content">
          <button
            className={`button-81 ${category === 'room' ? 'button-81-active' : ''}`}
            onClick={() => handleCategory('room')}
            role="button"
          >
            <FaBed size={20} />
          </button>
          <span className="chips-label">Room</span>
        </div>
        <div className="chips-content">
          <button
            className={`button-81 ${category === 'activities' ? 'button-81-active' : ''}`}
            onClick={() => handleCategory('activities')}
            role="button"
          >
            <MdOutlineSportsVolleyball size={20} />
          </button>
          <span className="chips-label">Activities</span>
        </div>
      </div>
    </>
  );
}
