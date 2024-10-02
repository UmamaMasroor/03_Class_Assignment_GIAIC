import Link from 'next/link'
export default function Footer() {
  return (
   <div className="footer">
    <div>
      <h2>Email:</h2>
      <Link href={'mailto:umamafatima319@gmail.com'}><p>umamafatima319@gmail.com</p></Link>

      <h2>Phone:</h2>
      <p>+123455679</p>

      <h2>Address:</h2>
      <p>Karchi, Pakistan</p>

    </div>
    <div>
      <Link><h2>Github</h2></Link>
      <Link><h2>Linkedin</h2></Link>
      <Link><h2>Versel</h2></Link>
    </div>
   </div>
  );
}
