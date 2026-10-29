"use client";

import React, { useState, useMemo } from "react";
import { COURSES_DATA, COURSE_CATEGORIES, TRAINING_PROVIDERS } from "../../lib/courses-data";
import { Course, TrainingProvider } from "../../lib/types-courses";
import SectionHeading from "./SectionHeading";
import CourseCard from "./CourseCard";
import ProviderCard from "./ProviderCard";
import CategoryList from "./CategoryList";
import { SearchIcon, XIcon, CheckIcon } from "../icons/KeylineSystemIcons";

export default function CourseCatalogueView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filter courses based on search & category
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      // Category Filter
      if (selectedCategory !== "all") {
        if (selectedCategory === "sys-arch" && course.categoryEn !== "System Architecture") return false;
        if (selectedCategory === "cloud-devops" && course.categoryEn !== "Cloud & DevOps") return false;
        if (selectedCategory === "security" && course.categoryEn !== "Application Security") return false;
        if (selectedCategory === "ai-agents" && course.categoryEn !== "AI Agents & LLMs") return false;
        if (selectedCategory === "databases" && course.categoryEn !== "Database Engineering") return false;
      }

      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitleEn = course.titleEn.toLowerCase().includes(q);
        const matchesTitleKm = course.titleKm.toLowerCase().includes(q);
        const matchesDescEn = course.descriptionEn.toLowerCase().includes(q);
        const matchesDescKm = course.descriptionKm.toLowerCase().includes(q);
        const matchesCode = course.code.toLowerCase().includes(q);
        const matchesProvider = course.providerNameEn.toLowerCase().includes(q);
        const matchesTags = course.tags.some((t) => t.toLowerCase().includes(q));

        if (
          !matchesTitleEn &&
          !matchesTitleKm &&
          !matchesDescEn &&
          !matchesDescKm &&
          !matchesCode &&
          !matchesProvider &&
          !matchesTags
        ) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Split into sections
  const featuredCourses = useMemo(() => {
    return filteredCourses.filter((c) => c.type === "featured");
  }, [filteredCourses]);

  const selfDirectedCourses = useMemo(() => {
    return filteredCourses.filter((c) => c.type === "self-directed");
  }, [filteredCourses]);

  const accreditedCourses = useMemo(() => {
    return filteredCourses.filter((c) => c.type === "accredited");
  }, [filteredCourses]);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-vi-slate text-white px-5 py-3 rounded-sticker border border-slate-700 shadow-2xl flex items-center space-x-3 text-xs font-mono animate-in slide-in-from-bottom-2 duration-150"
        >
          <CheckIcon className="w-4 h-4 text-vi-emerald" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="mb-8">
        <span className="vi-pill bg-slate-100 text-vi-slate mb-2">
          COURSE CATALOGUE & ACADEMIC REPOSITORY
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-vi-slate tracking-tight uppercase">
          Curated Course Catalogue
        </h1>
        <div className="text-base sm:text-lg font-semibold text-vi-emeraldDark font-sans mt-1">
          កាតាឡុកវគ្គបណ្តុះបណ្តាល និងកម្មវិធីសិក្សាឯកទេសឌីជីថល
        </div>
        <p className="mt-2 text-xs sm:text-sm text-vi-muted max-w-3xl leading-relaxed">
          Explore featured engineering tracks, self-directed laboratories, accredited national certifications, and verified higher-education training providers in Cambodia.
        </p>
      </div>

      {/* Search Bar with Explicit Accessible Label */}
      <div className="mb-6 p-4 sm:p-5 bg-white border border-vi-border rounded-glass shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <label
              htmlFor="course-catalogue-search"
              className="text-xs font-bold font-mono uppercase text-vi-slate block mb-1.5"
            >
              SEARCH COURSES, TOPICS & PROVIDERS / ស្វែងរកវគ្គសិក្សា
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 pointer-events-none text-vi-muted">
                <SearchIcon className="w-4 h-4" />
              </div>
              <input
                id="course-catalogue-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, code (e.g. ARCH-401), topic (Kubernetes, AI, Security), or provider..."
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-vi-border rounded-sticker text-xs font-mono text-vi-slate placeholder-slate-400 outline-none focus:bg-white focus:border-vi-sparkBlue focus:ring-2 focus:ring-vi-sparkBlue/20 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 p-1 text-vi-muted hover:text-vi-slate"
                  aria-label="Clear course search"
                >
                  <XIcon className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Catalog Telemetry */}
          <div className="flex items-center space-x-3 pt-2 sm:pt-4 text-xs font-mono">
            <div className="p-2.5 bg-slate-50 border border-vi-border rounded-sticker text-center">
              <span className="text-[10px] text-vi-muted block uppercase">
                COURSES MATCHED
              </span>
              <span className="font-bold text-vi-slate">
                {filteredCourses.length} / {COURSES_DATA.length}
              </span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-vi-border rounded-sticker text-center">
              <span className="text-[10px] text-vi-muted block uppercase">
                PROVIDERS
              </span>
              <span className="font-bold text-vi-sparkBlue">
                {TRAINING_PROVIDERS.length} INSTITUTIONS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category List Filter Ribbon */}
      <div className="mb-12">
        <CategoryList
          categories={COURSE_CATEGORIES}
          selectedCategoryId={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
        />
      </div>

      {/* SECTION 1: FEATURED COURSES (វគ្គសិក្សាពិសេស) */}
      {(featuredCourses.length > 0 || !searchQuery) && (
        <section className="mb-14">
          <SectionHeading
            badge="SECTION 01"
            titleEn="Featured Courses"
            titleKm="វគ្គសិក្សាពិសេស"
            descriptionEn="Flagship specialized engineering tracks led by national academic and industry pioneers."
            descriptionKm="កម្មវិធីសិក្សាឯកទេសកម្រិតខ្ពស់ដឹកនាំដោយអ្នកជំនាញឧស្សាហកម្ម និងវិទ្យាស្ថានបច្ចេកវិទ្យាជាតិ។"
            count={featuredCourses.length}
          />

          {featuredCourses.length === 0 ? (
            <div className="p-8 text-center bg-white border border-vi-border rounded-sticker text-xs font-mono text-vi-muted">
              No featured courses match the selected criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={(c) => showToast(`Enrolled in ${c.code}: ${c.titleEn}`)}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* SECTION 2: SELF-DIRECTED COURSES (វគ្គសិក្សាស្វ័យសិក្សា) */}
      {(selfDirectedCourses.length > 0 || !searchQuery) && (
        <section className="mb-14">
          <SectionHeading
            badge="SECTION 02"
            titleEn="Self-Directed Courses"
            titleKm="វគ្គសិក្សាស្វ័យសិក្សា"
            descriptionEn="On-demand interactive laboratory modules designed for self-paced independent mastery."
            descriptionKm="ម៉ូឌុលពិសោធន៍ជាក់ស្តែងតាមប្រព័ន្ធអនឡាញ រៀបចំឡើងសម្រាប់ការសិក្សាស្វ័យប្រវត្តិតាមល្បឿនផ្ទាល់ខ្លួន។"
            count={selfDirectedCourses.length}
          />

          {selfDirectedCourses.length === 0 ? (
            <div className="p-8 text-center bg-white border border-vi-border rounded-sticker text-xs font-mono text-vi-muted">
              No self-directed courses match the selected criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selfDirectedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={(c) => showToast(`Enrolled in ${c.code}: ${c.titleEn}`)}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* SECTION 3: ACCREDITED COURSES (វគ្គសិក្សាមានការទទួលស្គាល់) */}
      {(accreditedCourses.length > 0 || !searchQuery) && (
        <section className="mb-14">
          <SectionHeading
            badge="SECTION 03"
            titleEn="Accredited Courses"
            titleKm="វគ្គសិក្សាមានការទទួលស្គាល់"
            descriptionEn="Government and industry-certified credentials validating enterprise engineering readiness."
            descriptionKm="វិញ្ញាបនបត្រផ្លូវការដែលទទួលស្គាល់ដោយស្ថាប័នរដ្ឋ និងស្តង់ដារគុណវុឌ្ឍិសហគ្រាសជាតិ។"
            count={accreditedCourses.length}
          />

          {accreditedCourses.length === 0 ? (
            <div className="p-8 text-center bg-white border border-vi-border rounded-sticker text-xs font-mono text-vi-muted">
              No accredited courses match the selected criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accreditedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={(c) => showToast(`Enrolled in ${c.code}: ${c.titleEn}`)}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* SECTION 4: TRAINING PROVIDERS (ស្ថាប័នបណ្តុះបណ្តាល) */}
      <section className="mb-14">
        <SectionHeading
          badge="SECTION 04"
          titleEn="Training Providers"
          titleKm="ស្ថាប័នបណ្តុះបណ្តាល"
          descriptionEn="Verified national academies, universities, and research laboratories delivering digital education."
          descriptionKm="វិទ្យាស្ថានជាតិ បណ្ឌិត្យសភាស្រាវជ្រាវ និងមជ្ឈមណ្ឌលឧត្តមភាពបណ្តុះបណ្តាលឌីជីថល។"
          count={TRAINING_PROVIDERS.length}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_PROVIDERS.map((provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              onSelect={(p) => {
                setSearchQuery(p.nameEn);
                showToast(`Filtered courses for: ${p.nameEn}`);
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
