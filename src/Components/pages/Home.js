import React, { useEffect, useState } from "react";
import profile from "../images/PngItem_1468479 (1).png";
import axios from "axios";

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://sandbox.peexit.com/api/v1/users/search_by_name/junior")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <div className="container">
        <br></br>
        <br></br>
        <h1>
          <b>User listing</b>
        </h1>
        <br></br>
        <form>
          <div className="search">
            <input
              className="form-control"
              type="search"
              placeholder="search user by name  email or phone"
            />
            <a href="/">
              <button className="btn">search</button>
            </a>
          </div>
        </form>

        <div>
          <form className="containerForm">
            <div>
              <div className="sub-main">
                <div>
                  <div className="imgs">
                    <div className="container-image">
                      <img src={profile} alt="profile" className="profile" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="form-group">
                <label htmlfor="first name">
                  <b>Fisrt name:</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={
                    data.individual_profile
                      ? data.individual_profile.first_name
                      : ""
                  }
                  disabled
                />

                <div>
                  <label htmlfor="Last name">
                    <b>Last name:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      data.individual_profile
                        ? data.individual_profile.last_name
                        : ""
                    }
                    name="Last name"
                    id="Last name"
                    required
                    disabled
                  />
                </div>
                <div>
                  <label htmlfor="Date">
                    <b>Date of Birth:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      data.individual_profile
                        ? data.individual_profile.birth_date
                        : ""
                    }
                    name="Date"
                    id="Date"
                    required
                    disabled
                  />
                </div>
                <div>
                  <label htmlfor="Is Account confirmed:">
                    <b>Is Account confirmed:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="yes"
                    name="Is Account confirmed:"
                    id="Is Account confirmed:"
                    required
                    disabled
                  />
                </div>
                <div>
                  <label htmlfor="Email">
                    <b>Email:</b>
                  </label>
                  <input
                    type="Email"
                    className="form-control"
                    placeholder="peex@peexit.com"
                    value={data.email}
                    name="Email"
                    id="disabledInput"
                    required
                    disabled
                  />
                </div>
                <div>
                  <label htmlfor="Phone number">
                    <b>Phone number:</b>
                  </label>
                  <input
                    type="Phone number"
                    className="form-control"
                    value={data.mobile_phone}
                    name="Phone number"
                    id="Phone number:"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div></div>

        <br></br>
        <div></div>
        <div className="containerimg">
          <div>
            <h4>National Identity</h4>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div className="card-body">
                <input type="file" />
                <h5 className="card-title">img</h5>
                <p class="card-text"></p>
              </div>
              <div>
                <a href="/" class="btn btn-primary">
                  Download
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <div>
            <br></br>
            <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div className="card-body">
                <input type="file" />
                <h5 className="card-title">img</h5>
                <p class="card-text"></p>
              </div>
              <div>
                <a href="/" class="btn btn-primary">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <div></div>
        <div className="containerimg">
          <div>
            <h4>Commercial Register</h4>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div className="card-body">
                <input type="file" />
                <h5 className="card-title">img</h5>
                <p class="card-text"></p>
              </div>
              <div>
                <a href="/" class="btn btn-primary">
                  Download
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4>N. of Contribuable</h4>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div className="card-body">
                <input type="file" />
                <h5 className="card-title">img</h5>
                <p class="card-text"></p>
              </div>
              <div>
                <a href="/" class="btn btn-primary">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlfor="Date">
            <b>Created the</b>
          </label>
          <input
            type="text"
         
            value={data.created_at}
            required
            disabled
          />
        </div>
        <div>
          <label htmlfor="Date">
            <b>Updated the</b>
          </label>
          <input
            type="text"
                      value={data.updated_at}
            required
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
