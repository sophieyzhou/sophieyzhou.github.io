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
      dark: GitHubLight,
      light: GitHubDark,
      url: "https://github.com/sophieyzhou",
      label: "GitHub",
    },
    {
      dark: LinkedInLight,
      light: LinkedInDark,
      url: "https://www.linkedin.com/in/sophiezy",
      label: "LinkedIn",
    },
    {
      dark: GoodreadsLight,
      light: GoodreadsDark,
      url: "https://www.goodreads.com/user/show/157517607-sophie",
      label: "Goodreads",
    },
    {
      dark: SpotifyLight,
      light: SpotifyDark,
      url: "https://open.spotify.com/user/jslxgsjqlxodvwoqnp",
      label: "Spotify",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-primary py-24 px-8"
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">

        {/* Heading */}
        <div>
          <h2 className="text-5xl md:text-6xl font-header font-bold text-neutral-light leading-tight mb-3">
            Let's Connect
          </h2>
          <p className="text-secondary font-body text-lg">
            Open to opportunities, collaborations, and good conversations.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-secondary/50" />

        {/* Email pill */}
        <a
          href={`mailto:${email}`}
          className="
            inline-block font-body text-lg px-8 py-4 rounded-full
            border-2 border-accent text-accent
            hover:bg-accent hover:text-primary
            transition-all duration-300 tracking-wide
          "
        >
          {email}
        </a>

        {/* Social icons */}
        <div className="flex justify-center gap-8 mt-2">
          {socialLinks.map(({ dark, light, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative w-10 h-10 flex items-center justify-center"
            >
              {/* Pink circle background on hover */}
              <span className="absolute inset-0 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />

              {/* Icon — dark (white) by default, swaps to primary green on hover */}
              <span className="relative w-6 h-6 block">
                <img
                  src={dark}
                  alt={`${label}`}
                  className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={light}
                  alt={`${label} hover`}
                  className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                />
              </span>
            </a>
          ))}
        </div>

        {/* Social labels */}
        <div className="flex justify-center gap-8 -mt-4">
          {socialLinks.map(({ label }) => (
            <span key={label} className="text-xs text-secondary/60 font-body w-10 text-center">
              {label}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
