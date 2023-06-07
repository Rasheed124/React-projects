


import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: NextApiRequest, res: NextApiResponse) {
    draftMode().disable();
    redirect("/");
    // return new Response("Draft mode is disabled");
}
