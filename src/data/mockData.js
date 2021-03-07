export default {
  customers: {
    0: {
      id: 111,
      name: "Luigis Pizza",
      branch: "Pizzeria",
      street: "Allora Str. 19",
      city: "Di Roma",
      tel: "001/10231",
    },
    1: {
      id: 121,
      name: "Marios Pasta",
      branch: "Pasta",
      street: "Di Marco Str. 22",
      city: "Amalfi",
      tel: "231/52123",
    },
    2: {
      id: 333,
      name: "Francescos Trattoria",
      branch: "Trattoria",
      street: "Via di Cornuto, 110",
      city: "Toglia",
      tel: "313/231789",
    },
  },
  orders: {
    0: {
      id: 0,
      customer_id: 111,
      total_price: 91,
    },
    1: {
      id: 1,
      customer_id: 121,
      total_price: 221,
    },
    2: {
      id: 2,
      customer_id: 121,
      total_price: 999,
    },
  },
  orderDetails: {
    0: { id: 0, order_id: 0, item: "120T60", amount: 2, price: 200 },
    1: { id: 1, order_id: 0, item: "120T100", amount: 1, price: 100 },
    2: { id: 2, order_id: 1, item: "Tragetaschen", amount: 100, price: 1000 },
  },
};
