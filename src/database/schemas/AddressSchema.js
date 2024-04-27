import { Schema } from "mongoose"

export const addressSchema = new Schema({
  type: {
    type: String,
    required:true,
    enum: ["Restaurant","Bar","Musée","Parc"],
  },
  name: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
    
    cuisineType: String,
    starRating: {
      type: Number,
    
    },
    cuisineAveragePrice: {
      type: String,
      min: 1,
      max: 5,
    },
    
    artMovement: String,
    artType: String,

    museumFreeOrPaid: {
      type: String,
      enum: ["Free", "Paid"]
    },
    price: Number,
   
    barType: String,
    barAveragePrice: {
      type: Number,
      min: 1,
      max: 5,
    },
   
    parcType: String,
    publicOrPrivate: {
      type: String,
      enum: ["Public", "Private"],
    },
    parcFreeOrPaid: {
      type: String,
      enum: ["Free", "Paid"],
    },
    parcPrice: Number,

  })