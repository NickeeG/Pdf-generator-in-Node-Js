const { createInvoice } = require("./app.js");

const invoice = {
  shipping: {
    name: "John Doe",
    address: "123 Koinange",
    city: "Nairobi",
    state: "Kenya",
    country: "Africa",
    postal_code: 91221
  },
  items: [
    {
      item: "TC 100",
      description: "Toner Cartridge",
      quantity: 2,
      amount: 6000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    }
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
