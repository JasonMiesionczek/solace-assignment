import { NextRequest } from "next/server";
import db from "../../../db";
import { advocates } from "../../../db/schema";
import { arrayContains, arrayOverlaps, eq, ilike, inArray, or, sql, SQL } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get("searchTerm") || "";
  
  // If a search term is provided, filter the advocates based on it (you can customize the filtering logic as needed)
  if (searchTerm) {
    const filters: SQL[] = [
      ilike(advocates.firstName, `%${searchTerm}%`),
      ilike(advocates.lastName, `%${searchTerm}%`),
      ilike(advocates.city, `%${searchTerm}%`),
      ilike(advocates.degree, `%${searchTerm}%`),
      //arrayContains(advocates.specialties, [searchTerm]),
      //arrayOverlaps(advocates.specialties, [searchTerm]),
    ];

    if (!isNaN(Number(searchTerm))) {
      filters.push(eq(advocates.yearsOfExperience, Number(searchTerm)));
    }

    const data = await db.select().from(advocates).where(or(...filters));
    return Response.json({ data });
  }
  
  const data = await db.select().from(advocates);

  return Response.json({ data });
}
