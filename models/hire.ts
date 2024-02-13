//This handles the schema for the Hire

//Libraries -->
import {Schema, model, Types, models } from "mongoose";
import { IHire, IHireModel } from "@/config/interfaces";

//Commencing the app

//This is the schema for the Hire database
const hireSchema = new Schema<IHire, IHireModel>(
  {
    clientName: {
      type: String,
      required: true,
      trim: true
    },
    companyName: {
      type: String,
      required: true,
      trim: true
    },
    emailAddress: {
      type: String,
      required: true,
      trim: true
    },
    budget: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
  },
  { timestamps: true }
);

/**
 * @notice Static create and send hire
 * @param hire The details as required by IHire
 * @returns The created hire
 */
hireSchema.statics.createHire = async function ( hire: IHire ) {

  //Adding the hire to the database before sending it to the admin
  const hire_ = await this.create(hire);

  //A function should be created that sends the hire to the admin

  return hire_;
};

/**
 * @notice Static get all inquiries
 * @returns All inquiries
 */
hireSchema.statics.getAllInquiries = async function () {
  const hire = await this.find({}).sort({ createdAt: -1 });
  return hire;
};

/**
 * @notice Static get hire
 * @returns The hire
 */
hireSchema.statics.getHireById = async function (id: string) {
  //Validation of args
  if (!Types.ObjectId.isValid(id)) {
    throw Error("Id is invalid");
  }

  const hire = await this.find({ _id: id })

  if (!hire) {
    throw new Error("hire not found");
  } else {
    return hire;
  }
};

/**
 * @notice Static delete hire
 * @param id The id of the hire to be deleted
 * @returns The deleted hire
 */
hireSchema.statics.deleteHire = async function (id: string) {
  //Validation of args
if (!Types.ObjectId.isValid(id)) {
  throw Error("Id is invalid");
}

//This deletes the quote from the database
const delete_ = await this.findOneAndDelete({ _id: id });
return delete_;
}

//export const Hire: IHireModel = (models.Hire || model<IHire, IHireModel>("Hire", hireSchema)) as IHireModel;
