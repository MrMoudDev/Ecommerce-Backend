const mongoose = require ( 'mongoose')

const ProductSchema = new mongoose.Schema ({
    Reference: {
        type: String,
        required: [true, 'La referencia del producto es obligatorio']
    },
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'La cantidad es obligatorio'],
        min: [0, 'El precio no puede ser negativo']
    },
    quantity: {
        type: Number,
        required: [true, 'La cantidad es obligatorio'],
        min: [1, 'La cantidad minima a registrar es 1 ']
    },
    category: {
        type: String,
        required: [true, 'La categoria es obligatoria'],
        default: 'non-category'
    },
    urlImage: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
})

ProductSchema.index({ Reference: 1 }, { unique:true })


ProductSchema.pre(['findOneAndUpdate', 'findByIdAndUpdate'], function() {
  const update = this.getUpdate();
  if (update.__v != null) {
    delete update.__v;
  }
  const keys = ['$set', '$setOnInsert'];
  for (const key of keys) {
    if (update[key] != null && update[key].__v != null) {
      delete update[key].__v;
      if (Object.keys(update[key]).length === 0) {
        delete update[key];
      }
    }
  }
  update.$inc = update.$inc || {};
  update.$inc.__v = 1;
});

ProductSchema.pre( 'findOneAndReplace', async function () {
    const data = await this.model.findById(this.getQuery(),_id)

    if (!doc) return

    const replacement = this.getUpdate()

    if (replacement.__v != null) {
        delete replacement.__v
    }
    replacement.__v = doc.__v + 1
    this.setUpdate(replacement)
})

const ProductModel = mongoose.model('products', ProductSchema)


const ensureIndexes = () => {
    ProductModel.createIndexes()
    .then ( () => {
        console.log( ' Indices asegurados en el modelo ProductModel ')
    })
    .catch ( ( error ) => {
        console.error( ' Error al asegurar la creación de indeces ', error )
    })
}

module.exports = {
    ensureIndexes,
    ProductModel
}