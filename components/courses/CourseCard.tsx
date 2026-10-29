"use client";

import React, { useState } from "react";
import { Course } from "../../lib/types-courses";
import { CheckIcon } from "../icons/KeylineSystemIcons";

interface CourseCardProps {
  course: Course;
  onEnroll?: (course: Course) => void;
}

export default function CourseCard({ course, onEnroll }: CourseCardProps) {
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    setEnrolled(true);
    if (onEnroll) {
      onEnroll(course);
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-slate-100 text-vi-slate border-slate-200";
      case "Intermediate":
        return "bg-blue-50 text-vi-sparkBlue border-blue-200";
      case "Advanced":
        return "bg-emerald-50 text-vi-emeraldDark border-emerald-200";
      case "Professional":
        return "bg-amber-50 text-amber-800 border-amber-300";
      default:
        return "bg-slate-100 text-vi-slate border-slate-200";
    }
  };

  return (
    <div className="vi-glass-card p-5 sm:p-6 bg-white border border-vi-border rounded-glass flex flex-col justify-between hover:border-slate-400 transition-all shadow-sm">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold text-vi-slate bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              {course.code}
            </span>
            <span
              className={`vi-pill text-[10px] border ${getLevelBadgeClass(
                course.level
              )}`}
            >
              {course.level.toUpperCase()}
            </span>
          </div>

          {course.isAccredited && (
            <span className="vi-pill bg-emerald-50 text-vi-emeraldDark border border-emerald-200 text-[10px]">
              ACCREDITED
            </span>
          )}
        </div>

        {/* Dual-Language Title */}
        <h3 className="text-base sm:text-lg font-bold text-vi-slate uppercase leading-snug">
          {course.titleEn}
        </h3>
        <div className="text-xs sm:text-sm font-semibold text-vi-emeraldDark font-sans mt-1">
          {course.titleKm}
        </div>

        {/* Dual-Language Description */}
        <p className="mt-3 text-xs text-vi-muted leading-relaxed line-clamp-2">
          {course.descriptionEn}
        </p>
        <p className="mt-1 text-xs text-slate-500 font-sans leading-relaxed line-clamp-2">
          {course.descriptionKm}
        </p>

        {/* Course Telemetry Specs */}
        <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 font-mono text-[11px] text-vi-muted">
          <div className="p-2 bg-slate-50 rounded border border-slate-100 text-center">
            <span className="text-[9px] block uppercase text-slate-400">DURATION</span>
            <span className="font-bold text-vi-slate">{course.durationHours}H</span>
          </div>
          <div className="p-2 bg-slate-50 rounded border border-slate-100 text-center">
            <span className="text-[9px] block uppercase text-slate-400">MODULES</span>
            <span className="font-bold text-vi-slate">{course.totalModules}</span>
          </div>
          <div className="p-2 bg-slate-50 rounded border border-slate-100 text-center">
            <span className="text-[9px] block uppercase text-slate-400">RATING</span>
            <span className="font-bold text-vi-emeraldDark">{course.ratingScore} / 5.0</span>
          </div>
        </div>

        {/* Provider Tag */}
        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-vi-muted">
          <span>PROVIDER:</span>
          <span className="font-bold text-vi-slate truncate max-w-[200px]" title={course.providerNameEn}>
            {course.providerNameEn}
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          onClick={handleEnroll}
          className={`flex-1 py-2.5 px-4 text-xs font-mono font-bold tracking-wider uppercase rounded-sticker transition-all inline-flex items-center justify-center space-x-1.5 ${
            enrolled
              ? "bg-slate-900 text-white border-b-2 border-black"
              : "vi-button-primary"
          }`}
        >
          {enrolled ? (
            <>
              <CheckIcon className="w-3.5 h-3.5 text-vi-emerald" />
              <span>[ ENROLLED / បានចុះឈ្មោះ ]</span>
            </>
          ) : (
            <span>[ ENROLL NOW / ចុះឈ្មោះ ]</span>
          )}
        </button>

        <span className="text-[10px] font-mono text-vi-muted shrink-0">
          {course.enrolledStudentsCount} STUDENTS
        </span>
      </div>
    </div>
  );
}
