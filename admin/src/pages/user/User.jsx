import { useLocation } from "react-router-dom";
import "./user.css";
import { Publish } from "@material-ui/icons";
import React from "react";
export default function User() {
  const location = useLocation();
  const user = location.user;
  const paymentStatus = user.isPayed.toString();
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">User</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={user.img} alt="" className="productInfoImg" />
            <span className="productName">{user.username}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{user._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Email Id:</span>
              <span className="productInfoValue">{user.email}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Join Date(Last Updated Date):</span>
              <span className="productInfoValue">{user.updatedAt}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Premium status:</span>
              <span className="productInfoValue">{paymentStatus}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>User Name</label>
            <input type="text" placeholder={user.username} />
            <label>Email Id</label>
            <input type="text" placeholder={user.email} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={user.profilePic}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
