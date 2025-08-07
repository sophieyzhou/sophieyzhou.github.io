import React from 'react';

const Contact = () => {
  const email = "sophie@umich.edu";

  const socialLinks = [
    { icon: "/icons/linkedin.svg", url: "https://www.linkedin.com/in/sophiezy", label: "LinkedIn" },
    { icon: "/icons/github.svg", url: "https://github.com/sophieyzhou", label: "GitHub" },
    { icon: "/icons/goodreads.svg", url: "https://www.goodreads.com/yourprofile", label: "Goodreads" },
    { icon: "/icons/spotify.svg", url: "https://open.spotify.com/user/yourprofile", label: "Spotify" },
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="text-center">
        <h2 className="text-3xl font-header mb-4">Let's Connect</h2>

        <div className="mb-8">
          <p className="text-lg">
            Get in touch: {" "}
            <a href={`mailto:${email}`} className="underline hover:text-blue-600">
              {email}
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Find me elsewhere:</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition duration-200"
                aria-label={link.label}
              >
                <img src={link.icon} alt={link.label} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
