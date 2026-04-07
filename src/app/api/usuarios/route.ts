import { connectDB } from "../../../../lib/mongodb"; 

export async function POST(request: Request) {
    const body = await request.json()
    const { nome, email } = body

    const db = await connectDB()

    const result = await db.collection("usuarios").insertOne({
        nome,
        email,
        createdAt: new Date()
    })

    return Response.json({
        message: "Usuário cadastrado",
        id: result.insertedId
    })
}

export async function GET() {
    const db = await connectDB()

    const usuarios = await db
        .collection("usuarios")
        .find()
        .toArray()
    
    return Response.json(usuarios)
}