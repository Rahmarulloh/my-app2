import React, { Component } from 'react';
import { FaLeaf, FaRecycle, FaSearch } from "react-icons/fa";
import { HiPuzzle, HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import './banner.scss';

export class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <div className="banner-arrows arrow-left">
          <HiArrowSmLeft />
        </div>

        <div className="banner1">
          <div className="banner1-title">
            <p className="title-sub">
              O'Z BIZNESINGIZNI BIZ BILAN RIVOJLANTIRING
            </p>
            <h2 className="title-site">
              CLEAN CITY.UZ
            </h2>
          </div>
          <div className="banner1-feature">
            <FaLeaf className='banner1-icon' />
            <p className="banner1-desc">
              Oson, Yengil Va Qulay
            </p>
          </div>
          <div className="banner1-recycle banner1-feature">
            <FaRecycle className='banner1-recycle banner1-icon' />
            <p className="banner1-redesc banner1-desc">
              Ikki Yoqlama Foydali Hamkorlik
            </p>
          </div>
          <div className="banner1-puzzle banner1-feature">
            <HiPuzzle className='banner1-puzz banner1-icon' />
            <p className="banner1-pudesc banner1-desc">
              Zamonaviy Informatsion Texnologiyalar
            </p>
          </div>
          <div className="banner1-search banner1-feature">
            <FaSearch className='banner1-sear banner1-icon' />
            <p className="banner1-sedesc banner1-desc">
              Zamonaviy Informatsion Texnologiyalar
            </p>
          </div>

          <button className="banner1-btn">Batafsilroq</button>
        </div>

        <div className="banner-arrows arrow-right">
          <HiArrowSmRight />
        </div>
      </div>
    )
  }
}

export default Banner