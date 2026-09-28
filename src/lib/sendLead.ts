export interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  project?: string;
  developer?: string;
  community?: string;
  property_type?: string;
  propertyType?: string;
  type?: string;
  key_requirement?: string;
  keyRequirement?: string;
  comment?: string;
  comments?: string;
  activity_description?: string;
  [key: string]: any;
}

export async function sendLeadToWebhook(
  data: LeadPayload,
  redirectAfter: boolean = true
): Promise<boolean> {
  const campaignUrl =
    typeof window !== "undefined" ? window.location.href : "";

  let utmCampaign = "";
  if (typeof window !== "undefined") {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      utmCampaign =
        searchParams.get("utm_campaign") ||
        searchParams.get("utm_source") ||
        "";
    } catch {
      utmCampaign = "";
    }
  }

  const propertyType =
    data.property_type || data.propertyType || data.type || "";
  const keyRequirement =
    data.key_requirement ||
    data.keyRequirement ||
    data.comment ||
    data.comments ||
    "";

  const payload = {
    name: data.name || "",
    phone: data.phone || "",
    email: data.email || "",
    source: "Website",
    sub_source: "Hudayriyat-island",
    utm_campaign: utmCampaign,
    campaign_url: campaignUrl,
    project: data.project || "Hudayriyat Island",
    developer: data.developer || "Modon Properties",
    community: data.community || data.project || "Hudayriyat Island",
    property_type: propertyType,
    propertyType: propertyType,
    type: propertyType,
    key_requirement: keyRequirement,
    keyRequirement: keyRequirement,
    comment: keyRequirement,
    comments: keyRequirement,
    activity_description:
      data.activity_description || "Lead submitted from website form",
  };

  try {
    // Await API route call with keepalive to guarantee delivery to n8n webhook
    await fetch("/api/send-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (error) {
    console.error("Error sending lead to API route:", error);
  } finally {
    if (redirectAfter && typeof window !== "undefined") {
      window.location.href = "/thank-you";
    }
  }

  return true;
}
