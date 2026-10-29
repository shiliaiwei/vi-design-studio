import type { Metadata } from "next";
import Header from "@/components/Header";
import CourseCatalogueView from "@/components/courses/CourseCatalogueView";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Course Catalogue — Academic & Professional Training",
  description:
    "Curated course discovery layout featuring featured courses, self-directed laboratories, accredited national certifications, and verified training providers.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-vi-canvas text-vi-slate flex flex-col justify-between selection:bg-vi-emerald selection:text-white">
      {/* Top Navigation */}
      <Header />

      {/* Main Course Catalogue View */}
      <main className="flex-1">
        <CourseCatalogueView />
      </main>

      {/* Edge Telemetry Footer */}
      <Footer />
    </div>
  );
}
