'use client';

import { ApiProduct } from "@/app/components/ProductCard";


export const extractFilterOptions = (products: ApiProduct[]) => {
    const companies = new Set<string>();
    const equipmentTypes = new Set<string>();

    products.forEach((p: any) => {
        // Prefer explicit fields
        const company = (p.company ?? inferCompanyFromDescription(p.description))?.trim();
        const type = (p.equipmentType ?? inferTypeFromDescription(p.description))?.trim();

        if (company) companies.add(company);
        if (type) equipmentTypes.add(type);
    });

    return {
        companies: Array.from(companies).sort(),
        equipmentTypes: Array.from(equipmentTypes).sort(),
    };
};

// --------- Fallback helpers (used only if data missing new fields) ----------
function inferCompanyFromDescription(desc?: string): string | undefined {
    if (!desc) return undefined;
    // Old data tended to have company at the end, sometimes with country suffix
    // e.g., "Eye Care,Topcon-Japan" -> "Topcon"
    const parts = desc.split(",").map(s => s.trim()).filter(Boolean);
    if (parts.length === 0) return undefined;
    const last = parts[parts.length - 1];
    // Strip common "-Country" suffixes
    const normalized = last.replace(/-?(Japan|USA|UK|Switzerland|Ireland)$/i, "").trim();
    // If still contains spaces or looks like a phrase, skip
    if (!normalized || /\s{2,}/.test(normalized)) return undefined;
    return normalized;
}

function inferTypeFromDescription(desc?: string): string | undefined {
    if (!desc) return undefined;
    const lower = desc.toLowerCase();

    // Keep the taxonomy broad and consistent with JSON you added
    if (lower.includes("retinal camera") || lower.includes("fundus camera")) return "Retinal Camera";
    if (lower.includes("kerato") || lower.includes("refractometer")) return "Kerato-Refractometer";
    if (lower.includes("tonometer") || lower.includes("tono")) return "Tonometer";
    if (lower.includes("slit lamp")) return "Slit Lamp";
    if (lower.includes("specular microscope")) return "Specular Microscope";
    if (lower.includes("ophthalmometer")) return "Ophthalmometer";
    if (lower.includes("operation microscope") || lower.includes("surgical microscope")) return "Operation Microscope";
    if (lower.includes("instrument stand")) return "Instrument Stand";
    if (lower.includes("instrument table")) return "Instrument Table";
    if (lower.includes("vision tester")) return "Vision Tester";
    if (lower.includes("perimeter")) return "Perimeter";
    if (lower.includes("corneal analyser") || lower.includes("corneal analyzer") || lower.includes("wavefront")) return "Corneal Analyzer";
    if (lower.includes("lensmeter") || lower.includes("lens meter") || lower.includes("lens analyser") || lower.includes("lens analyzer")) return "Lens Meter";
    if (lower.includes("oct")) return "OCT";
    if (lower.includes("retinal laser") || lower.includes("pascal")) return "Retinal Laser System";
    if (lower.includes("biometer")) return "Biometer";
    if (lower.includes("a-scan")) return "A-Scan";
    if (lower.includes("ab-scan")) return "AB-Scan";
    if (lower.includes("dental unit")) return "Dental Unit";
    if (lower.includes("dental microscope")) return "Dental Microscope";
    if (lower.includes("ent") && lower.includes("microscope")) return "ENT Surgical Microscope";
    if (lower.includes("cpet")) return "CPET";
    if (lower.includes("treadmill") || lower.includes("stress test")) return "ETT / Treadmill";
    if (lower.includes("holter")) return "Holter ECG";
    if (lower.includes("abpm")) return "ABPM";
    if (lower.includes("ecg")) return "ECG Machine";
    if (lower.includes("haemodialysis machine") || lower.includes("hemodialysis machine")) return "Haemodialysis Machine";
    if (lower.includes("dialyser") || lower.includes("dialyzer") || lower.includes("dialysis") || lower.includes("capd")) return "Dialysis Consumable";
    if (lower.includes("icu ventilator")) return "ICU Ventilator";
    if (lower.includes("anesthesia machine")) return "Anesthesia Machine";

    return undefined;
}
