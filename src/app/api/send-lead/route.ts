import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const webhookUrl =
      "https://n8n.srv1625508.hstgr.cloud/webhook/979a4b97-a515-4ee0-96e3-5d0ddb475e99";
    const token = "fsa_n8n_secret_token_2026_x99a";

    const propertyType =
      body.property_type || body.propertyType || body.type || "";
    const keyRequirement =
      body.key_requirement ||
      body.keyRequirement ||
      body.comments ||
      body.comment ||
      "";

    const payload = {
      name: body.name || "",
      phone: body.phone || "",
      primaryPhone: body.phone || "",
      email: body.email || "",
      source: body.source || "Website",
      sub_source: body.sub_source || "Hudayriyat-island",
      subSource: body.sub_source || "Hudayriyat-island",
      utm_campaign: body.utm_campaign || "",
      utmCampaign: body.utm_campaign || "",
      campaign_url: body.campaign_url || "",
      utmUrl: body.campaign_url || "",
      project: body.project || "Hudayriyat Island",
      developer: body.developer || "Modon Properties",
      community: body.community || body.project || "Hudayriyat Island",
      property_type: propertyType,
      propertyType: propertyType,
      type: propertyType,
      key_requirement: keyRequirement,
      keyRequirement: keyRequirement,
      comments: keyRequirement,
      comment: keyRequirement,
      activity_description:
        body.activity_description || "Lead submitted from website form",
      message: body.activity_description || body.message || keyRequirement || "",
      Token: token,
      token: token,
    };

    console.log("Forwarding lead payload to n8n webhook:", payload);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Token: token,
        FSA_CRM_AUTH_TOKEN: token,
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log("n8n Webhook response status:", response.status, responseText);

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      message: responseText,
    });
  } catch (error: any) {
    console.error("API Route error sending lead to n8n:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
