import { useEffect } from "react";
import "./styles/LoyaltyAndGiftCard.css";
import { Link } from "react-router-dom";

export default function LoyaltyAndGiftCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="loyalty-gift-cards">
        <section className="loyalty-card-container">
          <img
            className="loyalty-card-img"
            src="https://via.placeholder.com/640x332.png"
            alt="Placeholder"
          />
          <article className="evening-article-cards">
            <p className="loyalty-card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              debitis incidunt sequi quisquam cum fuga rem ipsum aperiam nisi
              accusamus natus magni placeat quis eaque libero dolore ab
              dignissimos ea in, fugiat delectus.
            </p>
            <Link to={"/contact"}>
              <button className="button-primary">Register for Loyalty Card</button>
            </Link>
          </article>
        </section>
        <section className="gift-card-container">
          <article className="evening-article-cards">
            <p className="gift-card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              debitis incidunt sequi quisquam cum fuga rem ipsum aperiam nisi
              accusamus natus magni placeat quis eaque libero dolore ab
              dignissimos ea in, fugiat delectus.
            </p>
            <Link to={"/contact"}>
              <button className="button-primary">Register for Gift Card</button>
            </Link>
          </article>
          <img
            className="gift-card-img"
            src="https://via.placeholder.com/640x332.png"
            alt="Placeholder"
          />
          {/* <BsFillGiftFill className="loyalty-card-icon" /> */}
        </section>
      </div>
    </>
  );
}
