import React from 'react'
import Navbar from "../Components/Navbar";
import TeamsCSS from "../Styling/teams.module.css";
import manager from "../Assets/gallery/manager.webp"
import leader from "../Assets/gallery/leader.webp";
import face1 from "../Assets/gallery/face1.jpeg";
import face2 from "../Assets/gallery/face2.webp";
import face3 from "../Assets/gallery/face3.webp";
import face4 from "../Assets/gallery/face4.webp";
import KitchenSinkCard from '../Components/KitchenSinkCard';

const Teams = () => {
  return (
    <>
    <Navbar />
    <div className={`container-fluid ${TeamsCSS.teamContainer}`}>
        <div className="row overflow-auto">
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={manager} />
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={leader} />
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={face1} />
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={face2} />
          </div>
        </div>
        <div className="row overflow-auto">
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={face3} />
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={face4} />
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={face3} />
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={manager} />
          </div>
        </div>
        <div className="row overflow-auto">
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={face1} />
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={manager} />
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${TeamsCSS.cardContainer}`}>
            <KitchenSinkCard imageSrc={leader} />
          </div>
        </div>
      </div>
    </>
    );
};

export default Teams
