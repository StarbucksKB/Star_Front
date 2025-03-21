const express = require('express');
const app = express();
const port = 3000;
//CORS문제 해결
const cors = require('cors');
app.use(cors());
/*요청ContentType이 x-www-form-urlencoded인 경우
요청의 body사용하고 싶다면 아래 함수를 사용하세요*/
app.use(express.urlencoded({ extended: true }));
/*요청ContentType이 application/json인 경우
요청의 body사용하고 싶다면 아래 함수를 사용하세요*/
app.use(express.json());
//get요청이 되었을때 할 일
app.get('/', (req, res) => {
  res.send('WELCOME');
});

app.get('/product', (req, res) => {
  //   res.send('아메리카노, 아이스아메리카노, 라테');
  // productDetail에 추가될 내용을 products 안에 추가로 작성하기
  const products = [
    {
      prodNo: 'C0001',
      prodName: '나이트로 바닐라 크림 라떼',
      prodPrice: 1500,
      img: '/Image/drink1.png',
    },
    {
      prodNo: 'C0002',
      prodName: '리저브 HOT라떼',
      prodPrice: 1500,
      img: '/Image/drink2.jpg',
    },
    {
      prodNo: 'C0003',
      prodName: 'HOT아메리카노',
      prodPrice: 2000,
      img: '/Image/drink3.jpg',
    },
    {
      prodNo: 'C0004',
      prodName: 'HOT카페 라테',
      prodPrice: 2000,
      img: '/Image/drink4.jpg',
    },
    {
      prodNo: 'C0005',
      prodName: '콜드브루몰트',
      prodPrice: 2500,
      img: '/Image/drink5.jpg',
    },
    {
      prodNo: 'C0006',
      prodName: '카페브레베',
      prodPrice: 3500,
      img: '/Image/drink6.jpg',
    },
    {
      prodNo: 'C0007',
      prodName: '바닐라라떼',
      prodPrice: 3500,
      img: '/Image/drink7.jpg',
    },
  ];
  res.json(products);
});

app.get('/product/:prodNo', (req, res) => {
  // res.send(`${req.params.prodNo}상품의 상세내용입니다`);
  let product;
  if (req.params.prodNo == 'C0001') {
    product = {
      prodName: '아메리카노',
      img: 'C0001.jpg',
      Kcal: 400,
      transfat: 22,
      protein: 8,
      sodium: 140,
      sugar: 30,
      caffeine: 105,
    };
  } else if (req.params.prodNo == 'C0002') {
    product = {
      prodName: '아이스아메리카노',
      img: 'C0002.jpg',
      Kcal: 400,
      transfat: 22,
      protein: 8,
      sodium: 140,
      sugar: 30,
      caffeine: 105,
    };
  } else if (req.params.prodNo == 'C0003') {
    product = {
      prodName: '라테',
      img: 'C0003.jpg',
      Kcal: 400,
      transfat: 22,
      protein: 8,
      sodium: 140,
      sugar: 30,
      caffeine: 105,
    };
  } else if (req.params.prodNo == 'C0004') {
    product = {
      prodName: '아이스라테',
      img: 'C0004.jpg',
      Kcal: 400,
      transfat: 22,
      protein: 8,
      sodium: 140,
      sugar: 30,
      caffeine: 105,
    };
  } else if (req.params.prodNo == 'C0005') {
    product = {
      prodName: '콜드브루몰트',
      img: 'C0005.jpg',
      Kcal: 400,
      transfat: 22,
      protein: 8,
      sodium: 140,
      sugar: 30,
      caffeine: 105,
    };
  } else if (req.params.prodNo == 'C0006') {
    product = {
      prodName: '카페브레베',
      img: 'C0006.jpg',
      Kcal: 400,
      transfat: 22,
      protein: 8,
      sodium: 140,
      sugar: 30,
      caffeine: 105,
    };
  } else if (req.params.prodNo == 'C0007') {
    product = {
      prodName: '바닐라라떼',
      img: 'C0007.jpg',
      Kcal: 400,
      transfat: 22,
      protein: 8,
      sodium: 140,
      sugar: 30,
      caffeine: 105,
    };
  } else {
    product = {};
  }
  res.json(product);
});

app.get('/cartList', (req, res) => {
  const products = [
    {
      prodNo: 'C0001',
      prodName: '크림베리라떼',
      prodPrice: 4800,
      img: '/Image/drink1.png',
      prodNum: 1,
    },
    {
      prodNo: 'C0002',
      prodName: '따뜻한 카페라떼',
      prodPrice: 1500,
      img: '/Image/drink2.jpg',
      prodNum: 1,
    },
    {
      prodNo: 'C0003',
      prodName: '라테',
      prodPrice: 2000,
      img: '/Image/drink3.jpg',
      prodNum: 1,
    },
    {
      prodNo: 'C0004',
      prodName: '아이스라테',
      prodPrice: 2000,
      img: '/Image/drink4.jpg',
      prodNum: 1,
    },
    {
      prodNo: 'C0005',
      prodName: '콜드브루몰트',
      prodPrice: 2500,
      img: '/Image/drink5.jpg',
      prodNum: 1,
    },
    {
      prodNo: 'C0006',
      prodName: '카페브레베',
      prodPrice: 3500,
      img: '/Image/drink6.jpg',
      prodNum: 1,
    },
    {
      prodNo: 'C0007',
      prodName: '바닐라라떼',
      prodPrice: 3500,
      img: '/Image/drink7.jpg',
      prodNum: 1,
    },
  ];
  res.json(products);
});

app.get('/orderList', (req, res) => {
  const orders = [
    {
      orderNo: 'ORD001',
      orderDate: '2024-03-18',
      prodNo: 'C0001',
      prodName: '아메리카노',
      prodPrice: 1500,
      quantity: 2,
    },
    {
      orderNo: 'ORD002',
      orderDate: '2024-03-18',
      prodNo: 'C0002',
      prodName: '아이스아메리카노',
      prodPrice: 1500,
      quantity: 1,
    },
    {
      orderNo: 'ORD003',
      orderDate: '2024-03-19',
      prodNo: 'C0003',
      prodName: '라떼',
      prodPrice: 2000,
      quantity: 3,
    },
  ];
  res.json(orders);
});

//Listen for connections.
app.listen(port, () => {
  console.log('3000번 포트에서 backend server 실행중...');
});
