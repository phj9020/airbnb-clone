import React from 'react';
import "components/Footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <p>	&#169; {new Date().getFullYear()} AirBnb Clone! No Rights reserved - This is a demo</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default Footer;