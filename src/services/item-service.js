export default class ItemService {
  data = [
    {
      id: 0,
      name: "item",
      price: 15,
      sdescription: "mmm...tasty",
      ldescription: "long description for tasty thing",
      image: "https://images.clipart.com/images-clipart/thb/thb14/PO/1001/1001596018.thb.jpg"
    },
    {
      id: 1,
      name: "item",
      price: 3,
      sdescription: "chocolate",
      ldescription: "there is nothing more tastier than chocolate",
      image: "https://images.clipart.com/images-clipart/thb/thb12/PO/050915_5368_02/050915_5368_1834_a__p.thb.jpg"
    },
    {
      id: 2,
      name: "item",
      price: 12,
      sdescription: "a bit of meat",
      ldescription: "meat is our everything",
      image: "https://images.clipart.com/images-clipart/thb/thb14/PO/1001/1001596003.thb.jpg"
    },
    {
      id: 3,
      name: "item",
      price: 45,
      sdescription: "hey apple",
        ldescription: "apple for some Snow White",
      image: "https://images.clipart.com/images-clipart/thb/thb12/PO/050915_5368_17/050915_5368_1745_a__p.thb.jpg"
    },
    {
      id: 4,
      name: "item",
      price: 5,
      sdescription: "Variety of nuts on plate",
      ldescription: "don't get nuts with this",
      image: "https://images.clipart.com/images-clipart/thb/thb14/PO/1001/1001596053.thb.jpg"
    },
    {
      id: 5,
      name: "item",
      price: 7,
      sdescription: "Cookies",
      ldescription: "where is my tea?",
      image: "https://images.clipart.com/images-clipart/thb/thb14/PO/1001/1001596036.thb.jpg"
    },
    {
      id: 6,
      name: "item",
      price: 12,
      sdescription: "Top view of bowl filled with eggs",
      ldescription: "where is white rabbit?",
      image: "https://images.clipart.com/images-clipart/thb/thb12/PO/051115_5368_03/051115_5368_0315_a__p.thb.jpg"
    }
  ];

  getItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error("something happened with server"));
        } else {
          resolve(this.data);
        }
      }, 700)
    })
  }
}