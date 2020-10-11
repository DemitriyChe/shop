import img0 from "../img/1001596018.thb.jpg";
import img1 from "../img/050915_5368_1834_a__p.thb.jpg";
import img2 from "../img/1001596003.thb.jpg";
import img3 from "../img/050915_5368_1745_a__p.thb.jpg";
import img4 from "../img/1001596053.thb.jpg";
import img5 from "../img/1001596036.thb.jpg";
import img6 from "../img/051115_5368_0315_a__p.thb.jpg";

export default class ItemService {
  data = [
    {
      id: 0,
      name: "item",
      price: 15,
      sdescription: "mmm...tasty",
      ldescription: "long description for tasty thing",
      image: img0
    },
    {
      id: 1,
      name: "item",
      price: 3,
      sdescription: "chocolate",
      ldescription: "there is nothing more tastier than chocolate",
      image: img1
    },
    {
      id: 2,
      name: "item",
      price: 12,
      sdescription: "a bit of meat",
      ldescription: "meat is our everything",
      image: img2
    },
    {
      id: 3,
      name: "item",
      price: 45,
      sdescription: "hey apple",
        ldescription: "apple for some Snow White",
      image: img3
    },
    {
      id: 4,
      name: "item",
      price: 5,
      sdescription: "Variety of nuts on plate",
      ldescription: "don't get nuts with this",
      image: img4
    },
    {
      id: 5,
      name: "item",
      price: 7,
      sdescription: "Cookies",
      ldescription: "where is my tea?",
      image: img5
    },
    {
      id: 6,
      name: "item",
      price: 12,
      sdescription: "Top view of bowl filled with eggs",
      ldescription: "where is white rabbit?",
      image: img6
    }
  ];

  _transformItems = (item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      sdescription: item.sdescription,
      ldescription: item.ldescription,
      image: item.image,
      isliked: false
    }
  };

  getItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.7) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data.map(this._transformItems));
        }
      }, 700)
    })
  }
}