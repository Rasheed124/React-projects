import { getProject } from "@/schemas/utils/sanity.utils"


type Props = {
    params: { slug: string }
}

export default async function Portfolio({ params }: Props) {


    const project = await getProject(params.slug)


    {console.log(project)}
    return (

        <div>
           
           <h2>You are welcome to the Portfolio Page</h2>
        </div>
    )
}