import { addressSchema } from "@/database/schemas/AddressSchema"
import mongoose from "mongoose"

export const AddressModel =
  mongoose.models.Address || mongoose.model("Address", addressSchema)
