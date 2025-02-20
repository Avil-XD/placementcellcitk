"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const quicklinks = [
  { name: "Courses", link: "/courses" },
  { name: "Our Alumni", link: "/alumni" },
  { name: "Why CITK", link: "/whycitk" },
];

const officialLinks = [
  { name: "CITK", link: "https://cit.ac.in" },
  { name: "Central Library", link: "http://centrallibrary.cit.ac.in/" },
  { name: "Alumni Association", link: "https://www.cit.ac.in/page-alumni-achievements" },
  { name: "MOU's", link: "https://www.cit.ac.in/institute-mou" },
];

const clubLinks = [
  { name: "Cyber X Secure Club", link: "https://sites.google.com/cit.ac.in/cyberxsecureclub/home?authuser=0" },
  { name: "AI Club", link: "https://cit.ac.in" },
  { name: "Robotics Club", link: "https://roboticsclub.cit.ac.in/" },
  { name: "DevCom Club", link: "https://cit.ac.in" },
  { name: "Design Circle Club", link: "https://www.cit.ac.in/club-Design%20Circle" },
  { name: "Coding Club", link: "https://codingclub.cit.ac.in/" },
  { name: "Konstruct Club", link: "https://cit.ac.in" },
  { name: "VLSI Club", link: "https://sites.google.com/cit.ac.in/vlsiclubcitk/home?authuser=0" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/school/t-p-cell-cit-kokrajhar/",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:tnp@cit.ac.in",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/tnpcellcitk/",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
  };

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/cit-logo.png"
                alt="CITK logo"
                width={64}
                height={64}
                className="object-contain dark:brightness-200"
              />
              <span className="font-heading text-lg font-semibold text-gradient">
                CITK
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Central Institute of Technology Kokrajhar - 783370, Assam, India
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubmit} className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <FaPaperPlane className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quicklinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.link}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Official Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Official Sites</h3>
            <ul className="space-y-2">
              {officialLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Club Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Student Clubs</h3>
            <ul className="space-y-2">
              {clubLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CITK. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background hover:bg-muted transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              Developed by{" "}
              <span className="font-medium text-foreground">
                Placement Cell, CITK
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
