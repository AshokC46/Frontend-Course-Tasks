import logo from "./logo.svg";
import "./App.css";

function App() {
  const suvCars = [
    {
      name: "Mahindra Thar",
      price: "₹ 11.50 - 17.60 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Tata Punch",
      price: "₹ 6 - 10.32 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Hyundai Creta",
      price: "₹ 11.11 - 20.42 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1705465218824/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Tata Nexon",
      price: "₹ 8 - 15.60 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/11103/1736494813808/front-left-side-47.jpg?tr=w-300",
    },
  ];
  const electricCars = [
    {
      name: "Mahindra BE 6",
      price: "₹ 18.90 - 26.90 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1738382953778/front-left-side-47.jpg?tr=w-300",
    },

    {
      name: "Hyundai Creta Electric",
      price: "₹ 17.99 - 24.38 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta-Electric/11523/1738068021618/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Mahindra XEV 9e",
      price: "₹ 21.90 - 30.50 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-XEV/9e/9262/1732688872801/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "MG Windsor EV",
      price: "₹ 14 - 16 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1726050481737/front-left-side-47.jpg?tr=w-300",
    },
  ];

  const upcomingCars = [
    {
      name: "Audi RS Q8 2025",
      price: "₹ 2.30 Cr (Estimated Price)",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS-Q8-2025/12377/1738054937653/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "MG Majestor",
      price: "₹ 46 Lakh (Estimated Price)",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Majestor/12370/1737206408710/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Volvo XC90 2025",
      price: "₹ 1.05 Cr (Estimated Price)",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC90-2025/11977/1725537655549/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Audi Q6 e-tron",
      price: "₹ 1.05 Cr (Estimated Price)",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q6-e-tron/11608/1710995400792/front-left-side-47.jpg?tr=w-300",
    },
  ];

  const Logo =
    "https://dynamic.brandcrowd.com/preview/logodraft/61ad7d52-7b25-440a-a263-9861e4e5981b/image/large.png";
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={Logo} width="190px" style={{ height: "90px" }} />
          </a>

          <form class="d-flex" role="search" style={{ width: "500px" }}>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search or Ask a Question"
              aria-label="Search"
            />
          </form>

          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login/Register
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container" style={{ marginTop: "18px" }}>
        <h4>Most Searched Cars</h4>
        <div class="row">
          {suvCars.map((copyofsuvCars) => {
            const { name, price, image } = copyofsuvCars;
            return (
              <div class="col-3">
                <div class="card">
                  <img src={image} />
                  <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{price}</p>
                    <a href="#" class="btn btn-primary">
                      Check Complete Offers
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div class="container">
        <h4>Electric Cars</h4>
        <div class="row">
          {electricCars.map((copyofelectricCars) => {
            const { name, price, image } = copyofelectricCars;
            return (
              <div class="col-3">
                <div class="card">
                  <img src={image} />
                  <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{price}</p>
                    <a href="#" class="btn btn-primary">
                      Check Complete Offers
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div class="container">
        <h4>Upcoming Cars</h4>
        <div class="row">
          {upcomingCars.map((copyofupcomingCars) => {
            const { name, price, image } = copyofupcomingCars;
            return (
              <>
                <div class="col-3">
                  <div class="card">
                    <img src={image} />
                    <div class="card-body">
                      <h5 class="card-title">{name}</h5>
                      <p class="card-text">{price}</p>
                      <a href="#" class="btn btn-primary">
                        Check Complete Offers
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div class="container">
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">ABOUT CARVIEW</h6>
              <p class="card-text">About</p>
              <p>Careers With Us</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Corporate Policies</p>
              <p>Investors</p>
              <p>FAQs</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">CONNECT WITH US</h6>
              <p class="card-text">Feedback</p>
              <p>Contact Us</p>
              <p>Advertise with Us</p>
              <p>Become Partner Dealer</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">OTHERS</h6>
              <p class="card-text">Trucks View</p>
              <p>Tyre View</p>
              <p>Tractors View</p>
              <p>Girnar Vision Fund</p>
              <p>Emergency Response</p>
              <p>Car Sales Trends</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">EXPERIENCE CARVIEW APP</h6>
              <img
                src="https://stimg.cardekho.com/pwa/img/appstore.png"
                style={{ paddingRight: "20px" }}
              />{" "}
              <img src="https://stimg.cardekho.com/pwa/img/playstore.png" />
              <div>
                <p class="card-text" style={{ paddingTop: "10px" }}>
                  CARVIEW GROUP VENTURES
                </p>
              </div>
              <img
                src="https://stimg.cardekho.com/pwa/img/footer-BdLogo.svg"
                style={{ paddingRight: "45px" }}
              />
              <img src="https://stimg.cardekho.com/pwa/img/footer-rupyyLogo.svg" />
              <img
                src="https://stimg.cardekho.com/pwa/img/footer-zwLogo.svg"
                style={{ paddingRight: "50px" }}
              />
              <img src="https://stimg.cardekho.com/pwa/img/footer-IdLogo.svg" />
              <img src="https://stimg.cardekho.com/pwa/img/Revv_Logo.svg" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <p>@carview.pvt.Ltd</p>
      </div>
    </>
  );
}

export default App;
