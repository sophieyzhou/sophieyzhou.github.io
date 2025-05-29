import React from "react";

function Footer() {
  return (
    <footer className="text-center py-6 bg-neutral-light text-neutral-dark font-body mt-10">
      <p>&copy; {new Date().getFullYear()} Sophie Zhou. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
