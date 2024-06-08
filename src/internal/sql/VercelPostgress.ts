import { NextResponse } from "next/server";

export class VercelPostgres {
  async initialize() {
    return NextResponse.json({ error: "Not implemented" }, { status: 500 });
  }
}
