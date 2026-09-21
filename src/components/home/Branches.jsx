import React from 'react';
import './Branches.css';
import { MapPin, Building } from 'lucide-react';

const branchData = [
  {
    id: 'london',
    name: 'London',
    address: 'International Office: South Harrow, London, UK.',
    email: 'tamiloverseas@gmail.com',
    phone: '+44 7405 545086',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9920.233690186!2d-0.3545602!3d51.5671625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761310a4fec7ab%3A0x1b4a9d4d7698f76!2sSouth%20Harrow%2C%20Harrow%2C%20UK!5e0!3m2!1sen!2sin!4v1700319656640!5m2!1sen!2sin'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    address: 'Dubai Silicon Oasis, DDP, Building A1, Dubai, UAE.',
    email: 'tamiloverseas@gmail.com',
    phone: '+971 56 375 3466',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3612.4908359702176!2d55.374627724256285!3d25.119091434862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Dubai%20Silicon%20Oasis%2CDDP%2CBuilding%20A1%2C%20Dubai%2C%20United%20Arab%20Emirates.!5e0!3m2!1sen!2sin!4v1700990498756!5m2!1sen!2sin'
  },
  {
    id: 'namakkal',
    name: 'Namakkal',
    address: '254, SS Towers, Salem Road, Namakkal-637001, Tamil Nadu.',
    email: 'tamiloverseas@gmail.com',
    phone: '+91 9361870904',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3913.4165129041194!2d78.16236857504856!3d11.230739788946968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDEzJzUwLjciTiA3OMKwMDknNTMuOCJF!5e0!3m2!1sen!2sin!4v1707631051798!5m2!1sen!2sin'
  },
  {
    id: 'karaikudi',
    name: 'Karaikudi',
    address: 'No:4/14, Arunachalam Chettiar St, Sekkalai. Karaikudi-630002, TN.',
    email: 'tamiloverseas@gmail.com',
    phone: '+91 86376 39334',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7856.565219609458!2d78.7685187368259!3d10.075913923541485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo%3A4%2F14.Arunachalam%20Chettiar%20Street%2C%20Sekkalai.%20%20Karaikudi-630002%2C%20Tamil%20Nadu%2C!5e0!3m2!1sen!2sin!4v1700990390207!5m2!1sen!2sin'
  },
  {
    id: 'thanjavur',
    name: 'Thanjavur',
    address: 'New Bus Stand Rd, Thanjavur - 613005, Tamil Nadu, India.',
    email: 'tamiloverseas@gmail.com',
    phone: '+91 93618 70904',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7219096671047!2d79.11047577388915!3d10.755902459574331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab8cc993f3bad%3A0x8f64a3267c6d53e8!2sNew%20Bus%20Stand%20Rd%2C%20Thanjavur%2C%20Tamil%20Nadu%20613005!5e0!3m2!1sen!2sin!4v1700990723521!5m2!1sen!2sin'
  },
  {
    id: 'coimbatore',
    name: 'Coimbatore',
    address: 'Salem Complex 1st Floor, 148 E, Avanasi Road, Peelamedu, CBE-641004.',
    email: 'tamiloverseas@gmail.com',
    phone: '+91 9361870904',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.1698754032145!2d77.01630597504554!3d11.025878189138407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzMzLjIiTiA3N8KwMDEnMDguMCJF!5e0!3m2!1sen!2sin!4v1737821713465!5m2!1sen!2sin'
  },
  {
    id: 'chennai',
    name: 'Chennai',
    address: 'Upcoming New Branch (Chennai)',
    email: 'tamiloverseas@gmail.com',
    phone: '+91 9361870904',
    iframeSrc: 'https://maps.google.com/maps?q=Chennai&t=&z=11&ie=UTF8&iwloc=&output=embed'
  }
];

const Branches = () => {
  return (
    <section className="branches-section" id="ourbranch">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Locations</span>
          <h2 className="section-title">Visit Our Branches</h2>
          <p className="section-description">
            Find us at any of our convenient locations across the globe to start your study abroad journey.
          </p>
        </div>

        <div className="branches-grid">
          {branchData.map((branch) => (
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`} target="_blank" rel="noreferrer" className="branch-card" key={branch.id}>
              <div className="branch-badge-container">
                <div className="branch-badge">
                    <Building size={16} />
                    <span>{branch.name}</span>
                </div>
              </div>
              <div className="branch-map-container">
                <iframe
                  src={branch.iframeSrc}
                  title={branch.name}
                  frameBorder="0"
                  allowFullScreen
                  className="branch-map"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ pointerEvents: 'none' }}
                ></iframe>
              </div>
              
              <div className="branch-content">
                <div className="branch-info-item">
                  <div className="branch-icon-wrapper">
                    <MapPin size={18} className="branch-icon" />
                  </div>
                  <p className="branch-text">{branch.address}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
