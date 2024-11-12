import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <aside className="sidebar">
          <div className="logo">CryptoHacker</div>
          <nav>
            <ul>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/trends">Trends</Link>
              </li>
              <li>
                <Link to="/selected">Selected</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/selected" element={<Selected />} />
            <Route path="/account" element={<Account />} />
            <Route path="/" element={<News />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const newsData = [
  { id: 1, title: "News Title 1", content: "Detailed content for news 1.", image: "https://via.placeholder.com/800x300?text=News+1" },
  { id: 2, title: "News Title 2", content: "Detailed content for news 2.", image: "https://via.placeholder.com/800x300?text=News+2" },
  { id: 3, title: "News Title 3", content: "Detailed content for news 3.", image: "https://via.placeholder.com/800x300?text=News+3" },
  { id: 4, title: "News Title 4", content: "Detailed content for news 4.", image: "https://via.placeholder.com/800x300?text=News+4" },
];

function News() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = newsData.map(news => news.image);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <h1>Breaking News for Crypto Hackers!</h1>
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`News ${index + 1}`}
            style={{ opacity: currentImage === index ? 1 : 0 }}
          />
        ))}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={currentImage === index ? "active" : ""}
            ></span>
          ))}
        </div>
      </div>
      <div className="news-cards">
        {newsData.map(news => (
          <div key={news.id} className="news-card">
            <Link to={`/news/${news.id}`}>
              <img src={news.image} alt={news.title} />
            </Link>
            <div className="news-card-content">
              <h3>{news.title}</h3>
              <button>Like</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find(news => news.id === parseInt(id));

  return (
    <div className="news-detail">
      <h2>{news.title}</h2>
      <img src={news.image} alt={news.title} />
      <p>{news.content}</p>
      <button>Like</button>
      <button>Bookmark</button>
      <button>Comment</button>
    </div>
  );
}


function Trends() {
  return (
    <div>
      <h1>Trends</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="chart">
        <img src="https://via.placeholder.com/600x300" alt="Chart" />
      </div>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Volume</th>
            <th>Market Cap</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>BTC</td>
            <td>$81,432.26</td>
            <td>0.5%</td>
            <td>2.9%</td>
            <td>18.0%</td>
            <td>$93,801,419,247</td>
            <td>$1,610,781,631,950</td>
            <td>bitcoin (BTC) 7d chart</td>
          </tr>
          <tr>
            <td>2</td>
            <td>ETH</td>
            <td>$3,179.25</td>
            <td>0.8%</td>
            <td>0.4%</td>
            <td>28.5%</td>
            <td>$51,035,429,648</td>
            <td>$382,694,013,856</td>
            <td>ethereum (ETH) 7d chart</td>
          </tr>
          <tr>
            <td>3</td>
            <td>USDT</td>
            <td>$1.00</td>
            <td>0.1%</td>
            <td>1.0%</td>
            <td>0.3%</td>
            <td>$158,103,065,727</td>
            <td>$123,476,490,475</td>
            <td>tether (USDT) 7d chart</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Selected() {
  return (
    <div>
      <div className="profile">
        <img src="https://via.placeholder.com/80" alt="Profile" />
        <div className="profile-info">
          <h2>John Doe</h2>
          <p>Account Management</p>
        </div>
      </div>
      <div className="account-summary">
        <div>
          <h3>Today's P&L</h3>
          <p>$1,234.56</p>
        </div>
        <div>
          <h3>My Account</h3>
          <p>$12,345.67</p>
        </div>
        <div>
          <h3>Total Assets</h3>
          <p>$123,456.78</p>
        </div>
        <div>
          <h3>Market Value</h3 >         
          <p>$1,234,567.89</p>
        </div>
        <div>
          <h3>Floating P&L</h3>
          <p>$12,345.67</p>
        </div>
      </div>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Volume</th>
            <th>Market Cap</th>
            <th>My Holdings</th>
            <th>Cost</th>
            <th>Buy/Sell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>BTC</td>
            <td>$81,432.26</td>
            <td>0.5%</td>
            <td>2.9%</td>
            <td>18.0%</td>
            <td>$93,801,419,247</td>
            <td>$1,610,781,631,950</td>
            <td>1.5 BTC</td>
            <td>$75,000.00</td>
            <td>
              <Link to="/trade/BTC">Trade</Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>ETH</td>
            <td>$3,179.25</td>
            <td>0.8%</td>
            <td>0.4%</td>
            <td>28.5%</td>
            <td>$51,035,429,648</td>
            <td>$382,694,013,856</td>
            <td>10 ETH</td>
            <td>$30,000.00</td>
            <td>
              <Link to="/trade/ETH">Trade</Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>USDT</td>
            <td>$1.00</td>
            <td>0.1%</td>
            <td>1.0%</td>
            <td>0.3%</td>
            <td>$158,103,065,727</td>
            <td>$123,476,490,475</td>
            <td>5000 USDT</td>
            <td>$5,000.00</td>
            <td>
              <Link to="/trade/USDT">Trade</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Account() {
  const [likes, setLikes] = useState(123);
  const [followers, setFollowers] = useState(456);
  const [replies, setReplies] = useState(789);
  const [mentions, setMentions] = useState(101);
  const [collections, setCollections] = useState(["Item 1", "Item 2"]);
  const [purchasedServices, setPurchasedServices] = useState(["Service 1", "Service 2"]);
  const [browsingHistory, setBrowsingHistory] = useState(["Page 1", "Page 2"]);

  return (
    <div>
      <div className="account-profile">
        <img src="https://via.placeholder.com/80" alt="Profile" />
        <div className="account-info">
          <h2>John Doe</h2>
          <p>Followers: {followers} | Following: 456 | Posts: 789</p>
        </div>
      </div>
      <div className="account-section">
        <h3>My Collections</h3>
        <ul>
          {collections.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="account-section">
        <h3>Purchased Services</h3>
        <ul>
          {purchasedServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <div className="account-section">
        <h3>Browsing History</h3>
        <ul>
          {browsingHistory.map((page, index) => (
            <li key={index}>{page}</li>
          ))}
        </ul>
      </div>
      <div className="dashboard">
        <div>
          <h3>Likes</h3>
          <p>{likes}</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p>{followers}</p>
        </div>
        <div>
          <h3>Replies</h3>
          <p>{replies}</p>
        </div>
        <div>
          <h3>Mentions</h3>
          <p>{mentions}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
