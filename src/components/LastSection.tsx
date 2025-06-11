import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_SERVICEID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATEID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLICKEY;

const LastSection = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('SERVICE_ID:', SERVICE_ID);
    console.log('TEMPLATE_ID:', TEMPLATE_ID);
    console.log('PUBLIC_KEY:', PUBLIC_KEY);
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      e.currentTarget,
      PUBLIC_KEY
    )
      .then(
        () => {
          alert('Message sent successfully!');
        },
        () => {
          alert('Failed to send message.');
        }
      );
    e.currentTarget.reset();
  };

  return (
   <>
   <div className="font-sans" id="contact-section" style={{ background: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
  <main className="max-w-6xl mx-auto px-6 py-16">
    <section className="max-w-4xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="block w-8 h-[2px]" style={{ background: 'var(--theme-purple)' }}></span>
          <h3 className="font-semibold text-lg leading-none" style={{ color: 'var(--theme-purple)' }}>CONTACT</h3>
        </div>
        <h1 className="font-extrabold text-4xl leading-[1.1] mb-4">
          Yes! You Are Here! Have You Any Project? Drop A Line Here
        </h1>
        <p className="max-w-3xl" style={{ color: '#555' }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-12">
        <form className="flex flex-col gap-4 md:flex-1" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="px-4 py-4 focus:outline-none"
            style={{ background: 'var(--theme-gray)', color: 'var(--theme-text)' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-4 py-4 focus:outline-none"
            style={{ background: 'var(--theme-gray)', color: 'var(--theme-text)' }}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="px-4 py-4 focus:outline-none"
            style={{ background: 'var(--theme-gray)', color: 'var(--theme-text)' }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="px-4 py-4 focus:outline-none"
            style={{ background: 'var(--theme-gray)', color: 'var(--theme-text)' }}
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Write message"
            className="px-4 py-4 resize-none focus:outline-none"
            style={{ background: 'var(--theme-gray)', color: 'var(--theme-text)' }}
          ></textarea>
          <button
            type="submit"
            className="font-semibold py-3 mt-2 transition-colors"
            style={{ border: '2px solid var(--theme-purple)', color: 'var(--theme-purple)', background: 'var(--theme-bg)' }}
          >
            Send Message
          </button>
        </form>
        <aside className="mt-8 md:mt-0 md:flex-1" style={{ color: 'var(--theme-text)' }}>
          <p className="mb-4">
            <span className="font-bold" style={{ color: 'var(--theme-yellow)' }}>Phone:</span> +009 321 23456
          </p>
          <p className="mb-4">
            <span className="font-bold" style={{ color: 'var(--theme-yellow)' }}>Email:</span> hello@Quickhire.com
          </p>
          <p className="mb-4">
            <span className="font-bold" style={{ color: 'var(--theme-yellow)' }}>Website:</span> www.Quickhire.com
          </p>
          <p className="mb-8">
            <span className="font-bold" style={{ color: 'var(--theme-yellow)' }}>Address:</span> 12/7, Mc Street, Gurgoan
          </p>
          <div className="flex gap-6 text-xl">
            <a href="#" aria-label="Facebook" style={{ color: 'var(--theme-purple)' }}><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter" style={{ color: 'var(--theme-purple)' }}><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn" style={{ color: 'var(--theme-purple)' }}><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Behance" style={{ color: 'var(--theme-purple)' }}><i className="fab fa-behance"></i></a>
            <a href="#" aria-label="Dribbble" style={{ color: 'var(--theme-purple)' }}><i className="fab fa-dribbble"></i></a>
          </div>
        </aside>
      </div>
    </section>
  </main>
</div>
   </>
  )
}

export default LastSection