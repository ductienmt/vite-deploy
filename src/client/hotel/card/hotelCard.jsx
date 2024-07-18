// import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import "./hotelCard.css";
import imghotel from "../../../assets/img/hotel2.jpg";
import { Link } from "react-router-dom";

const HotelCard = ({ name }) => {
  const originalPrice = 250000;
  const discountedPrice = 200000;
  const hasDiscount = discountedPrice < originalPrice;
  return (
    <div className="card custom-card-hotel mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={imghotel}
            className="img-fluid rounded-start custom-img-hotel-card"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <h5 className="card-title mb-0">{name}</h5>
                <small className="hotel-adr">
                  <i className="fa-solid fa-map-pin me-3"></i>Quận 1, Hồ Chí
                  Minh
                </small>
                <p className="card-text amenities d-flex">
                  <small>
                    <i className="fa-solid fa-square-parking"></i>Bãi đỗ xe
                  </small>
                  <small>
                    <i className="fa-solid fa-wifi"></i>Wifi
                  </small>
                  <small>
                    <i className="fa-solid fa-person-swimming"></i>Hồ bơi
                  </small>
                </p>
                <div className="feed-back-hotel d-flex">
                  <div className="start-feedback">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="total-customer">43 người đánh giá</span>
                </div>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <div className="row addFav-viewDe">
                  <div className="col-md-3">
                    <button className="">
                      <i className="fa-solid fa-heart-circle-plus"></i>
                    </button>
                  </div>
                  <div className="col-md-9">
                    <Link to={"./detail"}>Xem chi tiết</Link>
                  </div>
                </div>
              </div>

              <h6 className="col-md-4">
                <div className="row">Chỉ từ</div>
                <span className={`price ${hasDiscount ? "discounted" : ""}`}>
                  {originalPrice.toLocaleString("vi-VN")} VNĐ
                </span>
                <br />
                {hasDiscount && (
                  <span className="new-price">
                    {discountedPrice.toLocaleString("vi-VN")} VNĐ
                  </span>
                )}
                <br />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HotelCard;
