export default function Contact(){
  return (
    <div className="contact-form">
      <h1 className="header-contact">Contact Me</h1>
      <form className="form">
        <div className="formGroup" >
          <label className="label" >Name:</label>
          <input className="input" type="text" placeholder="Write your name." />
        </div>
        <div className="formGroup">
          <label className="label" >Email:</label>
          <input className="input" type="email"/>
        </div>
        <div className="formGroup">
          <label className="label" >Message:</label>
          <textarea className="textarea" name="message" id=""></textarea>
        </div>
        <button className="button" type="submit" >
          Send Message
        </button>
      </form>
    </div>
  );
}