"use client";

import React from "react";
import { CourseCategoryItem } from "../../lib/types-courses";

interface CategoryListProps {
  categories: CourseCategoryItem[];
  selectedCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function CategoryList({
  categories,
  selectedCategoryId,
  onSelectCategory,
}: CategoryListProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
      <div className="flex items-center space-x-2.5 min-w-max">
        {categories.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-sticker transition-all border text-left flex flex-col justify-center ${
                isSelected
                  ? "bg-vi-slate text-white border-vi-slate shadow-sm"
                  : "bg-white text-vi-slate hover:border-slate-400 border-vi-border"
              }`}
            >
              <div className="flex items-center space-x-1.5">
                <span>{cat.nameEn}</span>
                <span className="text-[10px] opacity-75">({cat.coursesCount})</span>
              </div>
              <div
                className={`text-[10px] font-sans font-normal mt-0.5 ${
                  isSelected ? "text-emerald-300" : "text-vi-muted"
                }`}
              >
                {cat.nameKm}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
