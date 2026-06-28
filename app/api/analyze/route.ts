import { NextResponse } from "next/server";
import { analyzeCompany } from "@/lib/chain";

export async function POST(request: Request) {
  try {
    const { company } = await request.json();

    if (!company) {
      return NextResponse.json(
        { error: "Company name is required." },
        { status: 400 }
      );
    }

    const result = await analyzeCompany(company);

    return NextResponse.json({
      result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to analyze company." },
      { status: 500 }
    );
  }
}