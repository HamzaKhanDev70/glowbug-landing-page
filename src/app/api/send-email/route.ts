export const dynamic = "force-dynamic";

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

const sesClient = new SESClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  try {
    const { to, subject, body, fullName, phone, reason, message } = await req.json();

    if (!to || !subject || !body) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
 await prisma.contactSubmission.create({
      data: {
        fullName,
        email: to,
        phone,
        reason,
        message,
      },
    });
    const params = {
      Source: process.env.FROM_EMAIL!,
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: body,
            Charset: "UTF-8",
          },
        },
      },
    };

    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);

    return NextResponse.json(
      { message: "Email sent", messageId: result.MessageId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("SES Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
