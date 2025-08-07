import React from 'react';
import GitHubIcon from "../assets/git.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import SpotifyIcon from "../assets/spotify.svg";
import GoodreadsIcon from "../assets/goodreads.svg";


const Contact = () => {
  const email = "sophiezy@umich.edu";

  const socialLinks = [
    { icon: GitHubIcon, url: "https://github.com/sophieyzhou", label: "GitHub" },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/in/sophiezy", label: "LinkedIn" },
    { icon: GoodreadsIcon, url: "https://www.goodreads.com/user/show/157517607-sophie", label: "Goodreads" },
    { icon: SpotifyIcon, url: "https://open.spotify.com/user/jslxgsjqlxodvwoqnp", label: "Spotify" },
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
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-green-800 hover:text-green-400 transition-colors duration-200"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
