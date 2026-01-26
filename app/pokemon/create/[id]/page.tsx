'use client'

import Form from "@/components/form/form";
import { useParams } from "next/navigation";


export default function CreatePage() {
    const params = useParams()

    return (
        <Form pokemon={{
            id: Number(params.id),
            name: '',
            height: 0,
            weight: 0,
            sprite: ''
        }}/>
    )
}