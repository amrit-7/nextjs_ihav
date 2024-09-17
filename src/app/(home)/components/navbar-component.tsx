"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import styles from "./navbar-component.module.css";

const pages = [
  { name: "Home", href: "/" },
  { name: "Plumbing", href: "/plumbing" },
  { name: "Drainage", href: "/drainage" },
  { name: "Bathroom", href: "/bathroom" },
  { name: "Commercial", href: "/commercial" },
];

function NavbarComponent() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpenNavMenu = () => {
    setIsNavOpen(true);
  };

  const handleCloseNavMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <div className={styles.logo}>
            <a href="#s" className={styles.logoText}>
              Business Logo
            </a>
          </div>
          <div className={styles.menuButton} onClick={handleOpenNavMenu}>
            <MenuIcon />
          </div>
          <div
            className={`${styles.navMenu} ${isNavOpen ? styles.showMenu : ""}`}
          >
            <div className={styles.navLinks}>
              {pages.map((page, index) => (
                <Link
                  key={index}
                  className={`${styles.navLink} ${
                    pathname === page.href ? styles.activeLink : ""
                  }`}
                  href={page.href}
                  onClick={handleCloseNavMenu}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.contactAndButton}>
            <div className={styles.contactInfo}>
              <PhoneInTalkOutlinedIcon />
              <span className={styles.phoneNumber}>020 4527 6468</span>
            </div>
            <button className={styles.bookingButton}>
              <span>Request Booking</span>
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
