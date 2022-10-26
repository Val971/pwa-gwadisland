import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './styles/contact.scss';

export default function Footer() {
  return (
    <div id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h3>Keep in Touch</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form.
          </p>
        </div>
        <div className="contact-form">
          <form>
            <TextField
              className="textfild-1"
              id="outlined-basic"
              label="Your name"
              name="name"
              variant="outlined"
              required
              sx={{ border: '1px solid white', borderRadius: 1, color: 'white' }}
            />
            <TextField
              className="textfild-2"
              id="outlined-basic"
              name="email"
              label="Your email"
              variant="outlined"
              required
              sx={{ border: '1px solid white', borderRadius: 1, color: 'white' }}
            />
            <TextField
              className="textfild-3"
              name="message"
              type="text"
              label={'Your message'}
              multiline
              required
              rows={4}
              variant="outlined"
              sx={{ border: '1px solid white', borderRadius: 1, color: 'white' }}
            />
            <Button className="btn" type="submit" variant="contained">
              {'send'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
