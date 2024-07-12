import { connectDB } from "@/app/lib/connectDB";

export const POST = async(request) => {
    
    const newUser = await request.json();
    
    try {
        const db = await connectDB();
        const userCollection = db.collection('users')
        const exist = await userCollection.findOne({email : newUser.email})
        if (exist) {
            return Response.json({message : 'Already created account'}, {status : 406})
        }
        const res = await userCollection.insertOne(newUser)
        return Response.json({message : 'your account created successfully'}, {status : 200} )
    } catch (error) {
        return Response.json({message : 'Somthing is wrong'}, {status : 500} )
    }
}

export const GET = async(request) => {
    return Response.json({message : 'server is working'})
}