import Image from "next/image";
import Navbar from "@/components/Navbar/navbar";
import Testimonials from "@/components/Testimonials/testimonials";
import Footer from "@/components/Footer/footer";
import badge from "@/assets/badge.svg";
import heroImg from "@/assets/hero-bg-img.png";
import "./home.scss";
import { ArrowRight } from "lucide-react";
import dashboardTop from "@/assets/dashboard-top-left.png";
import dashboardBottomLeft from "@/assets/dashboard-bottom-left.png";
import dashboardBottomRight from "@/assets/dashboard-bottom-right.png";
import insightGraph from "@/assets/insight-graph.png";
import moneyDashboard from "@/assets/money-dashboard.png";
import financeLogo from "@/assets/logo.png";
export default function Home() {
  return (
    <main className="home">
      <Navbar />
      {/* hero */}
      <section className="home__hero padding">
        <div className="boxed">
          <div className="home__hero__badge">
            <Image src={badge} width={18} height={18} alt="badge" />
            <span className="body-m">Track Spending. Save Smarter.</span>
          </div>
          <h1 className="gradient heading-primary">
            One Dashboard to Track, Spend & Save Smarter
          </h1>
          <p className="body-xxl">
            From wallets to budgets, get real-time insights into your money so
            you can focus on what matters most.
          </p>
          <div className="home__hero__cta">
            <button className="btn-fill">Get Started</button>
            <button className="btn-outline">Request a demo</button>
          </div>
        </div>
        <Image src={heroImg} className="home__hero__image" alt="home-img" />
      </section>

      {/* dashboard */}
      <section className="home__dashboard padding">
        <div className="boxed">
          <h2 className="gradient heading-secondary">
            One Dashboard, Endless Possibilities
          </h2>
          <div className="home__dashboard__top">
            <div className="home__dashboard__top__left">
              <h3 className="heading-tertiary gradient">
                Smart Expense Tracking That Works
              </h3>
              <p className="body-xl dim">
                Track your income growth across wallets and accounts—see how
                much you earn and where it comes from
              </p>

              <button className="btn-fill body-m">
                Explore Features
                <span>
                  <ArrowRight size={20} />
                </span>
              </button>
            </div>
            <Image
              src={dashboardTop}
              alt="dahoboard-top"
              className="home__dashboard__top__image"
            />
          </div>
          <div className="home__dashboard__bottom">
            <div className="home__dashboard__bottom__left">
              <h3 className="heading-tertiary gradient">
                Smarter Savings Growth
              </h3>
              <p className="body-xl dim">
                Set clear goals and watch your savings increase each month—track
                progress with real-time insights.
              </p>
              <Image src={dashboardBottomLeft} alt="bottom-left" />
            </div>
            <div className="home__dashboard__bottom__right">
              <h3 className="heading-tertiary gradient">
                Stay Within Your Budget
              </h3>
              <p className="body-xl dim">
                Monitor your monthly spending against set limits—so you never
                overspend and always stay in control.
              </p>
              <Image src={dashboardBottomRight} alt="bottom-left" />
            </div>
          </div>
        </div>
      </section>

      {/* insights */}
      <section className="home__insights padding">
        <div className="boxed">
          <h2 className="gradient heading-secondary">
            Turn Numbers Into Clear Insights
          </h2>
          <Image
            src={insightGraph}
            width={1040}
            height={440}
            alt="insight graph"
            className="home__insights__image"
          />
        </div>
      </section>

      {/* money dashboard */}
      <section className="home__money-dashboard padding">
        <div className="boxed">
          <h1 className="gradient heading-secondary">
            All Your Money. One Dashboard.
          </h1>
          <Image
            src={moneyDashboard}
            alt="money dashboard"
            height={1009}
            className="home__money-dashboard__image"
          />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Finances */}
      <section className="home__finances padding">
        <div className="boxed">
          <Image
            src={financeLogo}
            alt="finance logo"
            width={72}
            height={72}
            className="home__finances__logo"
          />
          <h1 className="gradient heading-secondary">
            Take Control of Your Finances Today
          </h1>
          <p className="body-xl dim">
            Track, save, and grow—all in one powerful dashboard.
          </p>
          <button className="btn-fill body-m">
            Get Started
            <span>
              <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </main>
  );
}
