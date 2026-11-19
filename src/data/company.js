// Company contact details shared across pages (ContactCard, service pages, Contact page).
export const company = {
  name: "Rapid Proto Tech India Private Limited",
  phone: { label: "+91 91599 23535", href: "tel:+919159923535" },
  email: {
    label: "sales@rapidprototech.com",
    href: "mailto:sales@rapidprototech.com",
  },
  website: {
    label: "www.rapidprototech.com",
    href: "https://www.rapidprototech.com",
  },
  facilities: "Coimbatore | Pune, India",
  address: {
    title: "Main Office",
    lines: [
      "131 A3, West Ramalingam Road, R S Puram,",
      "Coimbatore 641002, Tamil Nadu, India",
    ],
  },
  people: [
    {
      role: "Director",
      name: "Kannan Dhandapani",
      phone: { label: "+91 98430 23535", href: "tel:+919843023535" },
    },
    {
      role: "Manager",
      name: "Arun Prakash K G",
      phone: { label: "+91 91599 23535", href: "tel:+919159923535" },
    },
  ],
  map: {
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4115.34835249573!2d76.94603757521774!3d11.003670154960668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591a44fbc8ef%3A0x159650c7ab23e75c!2sRapid%20Proto%20Tech%20%7C%20SLA%2C%20MJF%2C%20SLS%2C%20SRM!5e1!3m2!1sen!2sin!4v1795092139112!5m2!1sen!2sin",
    // Opens the Google Maps place page (cid = the place id in the embed, in decimal)
    open: "https://maps.google.com/?cid=1555519539803055964",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Rapid+Proto+Tech+R+S+Puram+Coimbatore",
  },
};
