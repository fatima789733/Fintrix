import Image from "next/image";
import { testimonials } from "@/constants/data";
import "./testimonials.scss";

export default function Testimonials() {
  return (
    <section className="padding testimonials">
      <div className="boxedd">
        <h1 className="gradient heading-secondary test">
          Why People Love Fintrix
        </h1>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-quote body-xl dim">“{t.quote}”</p>

              <div className="testimonial-user">
                {t.avatar && (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={52}
                    height={52}
                    className="testimonial-avatar"
                  />
                )}
                <div className="testimonial-info">
                  <p className="testimonial-name body-xl ">{t.name}</p>
                  <p className="testimonial-role body-l dim wt-400">
                    {t.role} – {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
