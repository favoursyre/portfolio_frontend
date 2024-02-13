///This is the api route for hire

///Libraries -->
import connectMongoDB from "@/config/mongodb";
//import { Hire } from "@/models/hire";
import { NextResponse } from "next/server";
import { IHire } from "@/config/interfaces";
//import { sendInquiryEmail } from "@/config/email";

///Commencing the code
///Creating an inquiry
// export async function POST(request) {
//     try {
//         const inquiry: IHire = await request.json();
//         await connectMongoDB();
//         await Hire.createHire( inquiry );

//         //Sending confirmation letter to the customerinquiry
//         //const status = await sendInquiryEmail(inquiry)
//         //console.log('Email Status: ', status)

//         return NextResponse.json({ message: "Inquiry submitted" }, { status: 200 });
//     } catch (error) {
//         console.log("Error: ", error)
//         return NextResponse.json({ message: error.message }, { status: 400 });
//     }
    
// }

// ///Getting all inquiries
// export async function GET() {
//     try {
//         await connectMongoDB();
//         const hires = await Hire.getAllHires();
//         return NextResponse.json( hires , { status: 200 });
//     } catch (error) {
//         console.log("Error: ", error)
//         return NextResponse.json({ message: error.message }, { status: 400 });
//     }
    
// }