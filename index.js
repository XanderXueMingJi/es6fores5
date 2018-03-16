//终端转换命令 babel index.js -o indexF.js  或者是 npm run build

const initialState = fromJS({
  username: false,
  toggleMenu: document.body.clientWidth < 1200,
  paidOrder: {
    loading: false,
    error: false,
    data: false,
    count: 0,
    
  },
  payAfterOrder: {
    loading: false,
    error: false,
    data: false,
    count: 0,
  },
  acceptedOrder: {
    loading: false,
    error: false,
    data: false,
    count: 0,
  },
  sortBy: 'time', // time, code
  sort: 'asc', // asc, desc
  default: {
    merchant: {},
  },
});