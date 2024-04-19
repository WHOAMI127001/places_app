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
    // Champs spécifiques aux restaurants
    cuisineType: String,
    starRating: {
      type: Number,
      min: 1,
      max: 3,
    },
    cuisineAveragePrice: {
      type: Number,
      min: 1,
      max: 5,
    },
    // Champs spécifiques aux musées
    artMovement: String,
    artType: String,

    museumFreeOrPaid: {
      type: String,
      enum: ["Free", "Paid"]
    },
    price: Number,
    // Champs spécifiques aux bars
    barType: String,
    barAveragePrice: {
      type: Number,
      min: 1,
      max: 5,
    },
    // Champs spécifiques aux parcs
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