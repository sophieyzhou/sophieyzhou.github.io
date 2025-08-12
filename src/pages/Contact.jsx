import React from 'react';

import GitHubDark from "../assets/git_dark.svg";
import GitHubLight from "../assets/git_light.svg";

import LinkedInDark from "../assets/linkedin_dark.svg";
import LinkedInLight from "../assets/linkedin_light.svg";

import SpotifyDark from "../assets/spotify_dark.svg";
import SpotifyLight from "../assets/spotify_light.svg";

import GoodreadsDark from "../assets/goodreads_dark.svg";
import GoodreadsLight from "../assets/goodreads_light.svg";

const Contact = () => {
  const email = "sophiezy@umich.edu";

  const socialLinks = [
    {
      dark: GitHubDark,
      light: GitHubLight,
      url: "https://github.com/sophieyzhou",
      label: "GitHub",
    },
    {
      dark: LinkedInDark,
      light: LinkedInLight,
      url: "https://www.linkedin.com/in/sophiezy",
      label: "LinkedIn",
    },
    {
      dark: GoodreadsDark,
      light: GoodreadsLight,
      url: "https://www.goodreads.com/user/show/157517607-sophie",
      label: "Goodreads",
    },
    {
      dark: SpotifyDark,
      light: SpotifyLight,
      url: "https://open.spotify.com/user/jslxgsjqlxodvwoqnp",
      label: "Spotify",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="text-center">
        <h2 className="text-3xl font-header mb-4">Let's Connect</h2>

        <div className="mb-8">
          <p className="text-lg">
            Get in touch:{" "}
            <a
              href={`mailto:${email}`}
              className="underline hover:text-blue-600"
            >
              {email}
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Find me elsewhere:</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ dark, light, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group w-6 h-6 relative"
              >
                <img
                  src={dark}
                  alt={`${label} dark`}
                  className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={light}
                  alt={`${label} light`}
                  className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
