import "./bookingHotel.css";

const BookingHotel = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center">NHẬP THÔNG TIN CƠ BẢN</h2>
        <div className="flex-container-booking">
          <div className="col-left" style={{ flexGrow: 3 }}>
            <div className="row"></div>
          </div>
          <div className="col-right" style={{ flexGrow: 9 }}></div>
        </div>
      </div>
    </>
  );
};

export default BookingHotel;
