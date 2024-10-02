import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      <div>
        <h3 >Contact</h3>
        <p>
          Email: <Link href="mailto:umamafatima319@gmail.com" >umamafatima319@gmail.com</Link>
        </p>
        <p>
          Phone: <Link href="tel:+1234567890" >+123 456 7890</Link>
        </p>
        <p>Location: Karachi, Pakistan</p>
      </div>

      <div>
        <h3 >Follow Me</h3>
        <ul >
          <li>
            <Link href="https://twitter.com/" target='blank'>
              Twitter
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/umama-fatima-20592225b/" target='blank'>
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="https://github.com/UmamaMasroor?tab=repositories" target="_blank" >
              GitHub
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/" target="_blank" >
              Instagram
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 >Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div >
        <p>© Umama Masroor. All rights reserved.</p>
      </div>
    </div>
  );
}
