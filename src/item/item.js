
export class Item {
  constructor(data) {
    Object.assign(this, {
      brand: '',
      title: '',
      description: '',
      descriptionFull: '',
      price: null,
      currency: ''
    }, data)
  }
}