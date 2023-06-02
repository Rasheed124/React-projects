import { PortableText } from "@portabletext/react"
import { getPage } from "../../../../sanity/sanity.utils"

type Props = {
    params: { slug: string }
}

export default async function Page({ params }: Props) {


    const page = await getPage(params.slug)

    return (

        <div>
            <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-xl drop-shadow font-extrabold">{page.title}</h1>

            <div>
                <PortableText value={page.content} />
            </div>
        </div>
    )
}