import { useState, useEffect, useRef } from "react";
import photoPortrait from "./pictures/c6bc3783-d4ef-4d71-a5ba-1e342b9dff19.jpeg";
import photoVenue from "./pictures/farfangan.jpg";
import photoSea from "./pictures/9100c47e-d5a9-4c1f-966e-08e66c58e93c.jpeg";
import photoMarina from "./pictures/30c52864-58d6-48a7-88df-15f1acf39377.jpeg";
import photoItaly from "./pictures/4b7411a2-41dd-424b-910c-391bc8f10c55.jpeg";

const SAGE = "#7A8C6E";
const BLUSH = SAGE;
const CREAM = "#F3F6EF";
const DARK = "#3B3530";
const LIGHT_SAGE = "#C2CEAB";
const LIGHT_BLUSH = "#DCE8D2";
const WHITE = "#FAFCF8";

const SCHEDULE = [
  { time: "3:00 PM", event: "Ceremony", desc: "Say 'I do'" },
  { time: "5:00 PM", event: "Dinner", desc: "Sit-down dinner & toasts" },
  { time: "9:00 PM", event: "Dance & Party", desc: "Let's celebrate all night" },
];

const SmoothScroll = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Nav = ({ active }) => (
  <nav style={{
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: `${CREAM}ee`, backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${LIGHT_SAGE}`,
    display: "flex", justifyContent: "center", gap: 32, padding: "16px 0",
    fontFamily: "'Georgia', serif", fontSize: 14, letterSpacing: 2, textTransform: "uppercase",
  }}>
    {["home", "details", "rsvp"].map(s => (
      <span key={s} onClick={() => SmoothScroll(s)} style={{
        cursor: "pointer", color: DARK, opacity: active === s ? 1 : 0.5,
        borderBottom: active === s ? `2px solid ${SAGE}` : "2px solid transparent",
        paddingBottom: 4, transition: "all 0.3s",
      }}>{s}</span>
    ))}
  </nav>
);

const Hero = () => (
  <section id="home" style={{
    minHeight: "100vh", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", textAlign: "center",
    background: `linear-gradient(180deg, ${CREAM} 0%, ${LIGHT_BLUSH} 50%, ${CREAM} 100%)`,
    padding: "80px 24px 60px", position: "relative", overflow: "hidden",
  }}>
    <div style={{ position: "absolute", top: 60, left: "50%", transform: "translateX(-50%)", opacity: 0.12 }}>
      <svg width="400" height="400" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="180" fill="none" stroke={SAGE} strokeWidth="1" />
        <circle cx="200" cy="200" r="160" fill="none" stroke={BLUSH} strokeWidth="0.5" />
        <circle cx="200" cy="200" r="195" fill="none" stroke={SAGE} strokeWidth="0.5" />
      </svg>
    </div>
    <div style={{
      width: 200, height: 200, borderRadius: "50%", overflow: "hidden",
      marginBottom: 36, flexShrink: 0,
      border: `3px solid ${WHITE}`,
      boxShadow: `0 0 0 6px ${LIGHT_BLUSH}, 0 0 0 7px ${LIGHT_SAGE}`,
    }}>
      <img src={photoPortrait} alt="Yusi & Wen" style={{
        width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%",
      }} />
    </div>
    <p style={{ fontFamily: "'Georgia', serif", fontSize: 14, letterSpacing: 6, textTransform: "uppercase", color: SAGE, marginBottom: 16 }}>
      Together with their families
    </p>
    <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 400, color: DARK, margin: "0 0 8px", lineHeight: 1.1 }}>
      Yusi <span style={{ fontStyle: "italic", color: SAGE }}>&</span> Wen
    </h1>
    <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: DARK, opacity: 0.6, marginBottom: 40, letterSpacing: 3 }}>
      ARE GETTING MARRIED
    </p>
    <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
      <div style={{ width: 60, height: 1, background: SAGE }} />
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 18, color: DARK, letterSpacing: 2 }}>
        September 26, 2026
      </p>
      <div style={{ width: 60, height: 1, background: SAGE }} />
    </div>
    <Countdown />
    <button onClick={() => SmoothScroll("rsvp")} style={{
      marginTop: 48, padding: "14px 48px", background: SAGE, color: WHITE,
      border: "none", borderRadius: 0, fontFamily: "'Georgia', serif",
      fontSize: 13, letterSpacing: 3, textTransform: "uppercase", cursor: "pointer",
      transition: "all 0.3s",
    }}
      onMouseEnter={e => { e.target.style.background = "#9AB49A"; }}
      onMouseLeave={e => { e.target.style.background = SAGE; }}
    >
      RSVP Now
    </button>
  </section>
);

const Countdown = () => {
  const calc = () => {
    const diff = new Date("2026-09-26T15:00:00") - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const i = setInterval(() => setT(calc), 1000); return () => clearInterval(i); }, []);

  return (
    <div style={{ display: "flex", gap: 32 }}>
      {Object.entries(t).map(([label, val]) => (
        <div key={label} style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "'Georgia', serif", fontSize: 36, color: DARK, fontWeight: 300,
            minWidth: 50,
          }}>{String(val).padStart(2, "0")}</div>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: SAGE, marginTop: 4 }}>{label}</div>
        </div>
      ))}
    </div>
  );
};

const Details = () => (
  <section id="details" style={{
    padding: "100px 24px", textAlign: "center",
    backgroundImage: `linear-gradient(rgba(243,246,239,1) 0%, rgba(250,252,248,0.88) 12%, rgba(250,252,248,0.88) 88%, rgba(243,246,239,1) 100%), url(${photoVenue})`,
    backgroundSize: "cover", backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}>
    <p style={{ fontFamily: "'Georgia', serif", fontSize: 12, letterSpacing: 5, textTransform: "uppercase", color: SAGE, marginBottom: 8 }}>
      The Details
    </p>
    <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 36, fontWeight: 400, color: DARK, marginBottom: 12 }}>
      When & Where
    </h2>
    <div style={{ width: 60, height: 1, background: BLUSH, margin: "0 auto 48px" }} />

    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 40, marginBottom: 64 }}>
      {[
        { icon: "📅", title: "Date", line1: "Saturday", line2: "September 26, 2026" },
        { icon: "📍", title: "Venue", line1: "Fårfängan", line2: "Klockstapelsbacken 3, Stockholm" },
        { icon: "👗", title: "Dress Code", line1: "Suit & Dress", line2: "Adults only — no children please" },
      ].map(c => (
        <div key={c.title} style={{
          background: CREAM, padding: "36px 32px", borderRadius: 4, width: 240,
          transition: "transform 0.3s",
        }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
          <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 14, letterSpacing: 3, textTransform: "uppercase", color: SAGE, marginBottom: 12, fontWeight: 400 }}>{c.title}</h3>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: DARK, margin: 0 }}>{c.line1}</p>
          <p style={{ fontSize: 13, color: DARK, opacity: 0.6, margin: "4px 0 0" }}>{c.line2}</p>
        </div>
      ))}
    </div>

    <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 14, letterSpacing: 5, textTransform: "uppercase", color: SAGE, marginBottom: 32, fontWeight: 400 }}>
      Schedule of Events
    </h3>
    <div style={{ maxWidth: 500, margin: "0 auto", background: CREAM, borderRadius: 4, padding: "36px 32px" }}>
      {SCHEDULE.map((s, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "flex-start", gap: 24, marginBottom: 28,
          textAlign: "left",
        }}>
          <div style={{
            fontFamily: "'Georgia', serif", fontSize: 14, color: SAGE,
            minWidth: 80, letterSpacing: 1, paddingTop: 2,
          }}>{s.time}</div>
          <div style={{ width: 1, minHeight: 40, background: LIGHT_SAGE, flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: DARK }}>{s.event}</div>
            <div style={{ fontSize: 13, color: DARK, opacity: 0.5, marginTop: 2 }}>{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const RSVPForm = () => {
  const [form, setForm] = useState({ name: "", email: "", attending: "", guests: "0", guestNames: [], dietary: "", speech: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const SHEET_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL"; // Replace with your deployed Apps Script URL

  const update = (k, v) => setForm(p => ({
    ...p, [k]: v,
    ...(k === "guests" ? { guestNames: Array.from({ length: Number(v) }, (_, i) => p.guestNames[i] || "") } : {}),
  }));
  const updateGuestName = (i, v) => setForm(p => {
    const names = [...p.guestNames]; names[i] = v; return { ...p, guestNames: names };
  });

  const submit = async () => {
    if (!form.name || !form.email || !form.attending) return;
    setSending(true);
    setError("");
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          attending: form.attending === "yes" ? "Yes" : "No",
          guests: form.guests,
          guestNames: form.guestNames.filter(Boolean).join(", ") || "—",
          dietary: form.dietary || "None",
          speech: form.speech || "No",
          message: form.message || "—",
        }),
      });
      setSubmitted(true);
    } catch { setError("Could not send. Please check your connection."); }
    setSending(false);
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", border: `1px solid ${LIGHT_SAGE}`,
    borderRadius: 2, fontFamily: "'Georgia', serif", fontSize: 14,
    background: WHITE, color: DARK, outline: "none", boxSizing: "border-box",
    transition: "border-color 0.3s",
  };

  const labelStyle = {
    fontFamily: "'Georgia', serif", fontSize: 11, letterSpacing: 3,
    textTransform: "uppercase", color: SAGE, marginBottom: 6, display: "block",
  };

  if (submitted) {
    return (
      <section id="rsvp" style={{ padding: "100px 24px", background: CREAM, textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>💌</div>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 28, fontWeight: 400, color: DARK, marginBottom: 12 }}>
            Thank You, {form.name.split(" ")[0]}!
          </h2>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: DARK, opacity: 0.7, lineHeight: 1.8 }}>
            {form.attending === "yes"
              ? "We're so excited to celebrate with you! A confirmation email will be sent shortly."
              : "We're sorry you can't make it. You'll be missed!"}
          </p>
          <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", attending: "", guests: "0", guestNames: [], dietary: "", speech: "", message: "" }); }}
            style={{ marginTop: 24, padding: "10px 32px", background: "transparent", border: `1px solid ${SAGE}`, color: SAGE, fontFamily: "'Georgia', serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", borderRadius: 2 }}>
            Submit Another RSVP
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" style={{ padding: "100px 24px", background: CREAM, textAlign: "center" }}>
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 12, letterSpacing: 5, textTransform: "uppercase", color: SAGE, marginBottom: 8 }}>
        RSVP
      </p>
      <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 36, fontWeight: 400, color: DARK, marginBottom: 8 }}>
        Will You Join Us?
      </h2>
      <p style={{ fontSize: 14, color: DARK, opacity: 0.5, marginBottom: 48 }}>Kindly respond by June 1, 2026</p>

      <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "left" }}>
        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>Full Name *</label>
          <input style={inputStyle} value={form.name} onChange={e => update("name", e.target.value)}
            onFocus={e => e.target.style.borderColor = SAGE} onBlur={e => e.target.style.borderColor = LIGHT_SAGE}
            placeholder="Your full name" />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>Email Address *</label>
          <input style={inputStyle} type="email" value={form.email} onChange={e => update("email", e.target.value)}
            onFocus={e => e.target.style.borderColor = SAGE} onBlur={e => e.target.style.borderColor = LIGHT_SAGE}
            placeholder="your@email.com" />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>Will you be attending? *</label>
          <div style={{ display: "flex", gap: 12 }}>
            {[["yes", "Joyfully Accept"], ["no", "Respectfully Decline"]].map(([v, l]) => (
              <button key={v} onClick={() => update("attending", v)} style={{
                flex: 1, padding: "12px 16px", border: `1px solid ${form.attending === v ? SAGE : LIGHT_SAGE}`,
                background: form.attending === v ? SAGE : WHITE,
                color: form.attending === v ? WHITE : DARK,
                fontFamily: "'Georgia', serif", fontSize: 13, cursor: "pointer",
                borderRadius: 2, transition: "all 0.3s",
              }}>{l}</button>
            ))}
          </div>
        </div>

        {form.attending === "yes" && (
          <>
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Number of Additional Guests</label>
              <select style={{ ...inputStyle, cursor: "pointer" }} value={form.guests} onChange={e => update("guests", e.target.value)}>
                {[0, 1, 2, 3].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            {Number(form.guests) > 0 && form.guestNames.map((gName, i) => (
              <div key={i} style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Guest {i + 1} Full Name</label>
                <input style={inputStyle} value={gName} onChange={e => updateGuestName(i, e.target.value)}
                  onFocus={e => e.target.style.borderColor = SAGE} onBlur={e => e.target.style.borderColor = LIGHT_SAGE}
                  placeholder="Full name" />
              </div>
            ))}
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Dietary Requirements</label>
              <input style={inputStyle} value={form.dietary} onChange={e => update("dietary", e.target.value)}
                onFocus={e => e.target.style.borderColor = SAGE} onBlur={e => e.target.style.borderColor = LIGHT_SAGE}
                placeholder="Any allergies or preferences" />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Would you like to give a speech?</label>
              <div style={{ display: "flex", gap: 12 }}>
                {[["yes", "Yes, I'd love to"], ["no", "No, thank you"]].map(([v, l]) => (
                  <button key={v} onClick={() => update("speech", v)} style={{
                    flex: 1, padding: "12px 16px", border: `1px solid ${form.speech === v ? SAGE : LIGHT_SAGE}`,
                    background: form.speech === v ? SAGE : WHITE,
                    color: form.speech === v ? WHITE : DARK,
                    fontFamily: "'Georgia', serif", fontSize: 13, cursor: "pointer",
                    borderRadius: 2, transition: "all 0.3s",
                  }}>{l}</button>
                ))}
              </div>
            </div>
          </>
        )}

        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>Message for the Couple</label>
          <textarea style={{ ...inputStyle, minHeight: 80, resize: "vertical" }} value={form.message}
            onChange={e => update("message", e.target.value)}
            onFocus={e => e.target.style.borderColor = SAGE} onBlur={e => e.target.style.borderColor = LIGHT_SAGE}
            placeholder="Share your well wishes..." />
        </div>

        <button onClick={submit} disabled={!form.name || !form.email || !form.attending || sending}
          style={{
            width: "100%", padding: "14px", background: (!form.name || !form.email || !form.attending || sending) ? LIGHT_SAGE : SAGE,
            color: WHITE, border: "none", fontFamily: "'Georgia', serif", fontSize: 13,
            letterSpacing: 3, textTransform: "uppercase", cursor: (!form.name || !form.email || !form.attending || sending) ? "not-allowed" : "pointer",
            borderRadius: 2, transition: "all 0.3s",
          }}>
          {sending ? "Sending..." : "Send RSVP"}
        </button>
        {error && <p style={{ color: "#c47070", fontSize: 13, marginTop: 12, textAlign: "center" }}>{error}</p>}
      </div>
    </section>
  );
};

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  const photos = [
    { src: photoSea, pos: "center 30%" },
    { src: photoMarina, pos: "center center" },
    { src: photoItaly, pos: "center 30%" },
  ];

  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section style={{ padding: "80px 24px", background: WHITE, textAlign: "center" }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: 12, letterSpacing: 5, textTransform: "uppercase", color: SAGE, marginBottom: 8 }}>
          Our Journey
        </p>
        <div style={{ width: 60, height: 1, background: BLUSH, margin: "0 auto 48px" }} />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          maxWidth: 860,
          margin: "0 auto",
        }}>
          {photos.map(({ src, pos }, i) => (
            <div key={i} onClick={() => setLightbox(src)} style={{
              overflow: "hidden",
              aspectRatio: "3/4",
              borderRadius: 2,
              cursor: "pointer",
            }}>
              <img src={src} alt="" style={{
                width: "100%", height: "100%", objectFit: "cover",
                objectPosition: pos,
                transition: "transform 0.6s ease",
                display: "block",
              }}
                onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; }}
                onMouseLeave={e => { e.target.style.transform = "scale(1)"; }}
              />
            </div>
          ))}
        </div>
      </section>

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24, cursor: "zoom-out",
        }}>
          <img src={lightbox} alt="" style={{
            maxWidth: "100%", maxHeight: "100%",
            objectFit: "contain",
            borderRadius: 2,
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          }} />
        </div>
      )}
    </>
  );
};

const Footer = () => (
  <footer style={{
    padding: "48px 24px", background: WHITE, textAlign: "center",
    borderTop: `1px solid ${LIGHT_SAGE}`,
  }}>
    <p style={{ fontFamily: "'Georgia', serif", fontSize: 22, color: DARK, margin: "0 0 8px" }}>
      Yusi & Wen
    </p>
    <p style={{ fontSize: 12, color: DARK, opacity: 0.4, letterSpacing: 2 }}>
      SEPTEMBER 26, 2026 • STOCKHOLM, SWEDEN
    </p>
  </footer>
);

export default function WeddingSite() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = ["rsvp", "details", "home"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: DARK, background: CREAM }}>
      <Nav active={active} />
      <Hero />
      <Details />
      <Gallery />
      <RSVPForm />
      <Footer />
    </div>
  );
}