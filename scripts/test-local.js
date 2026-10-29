const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("============================================================");
console.log("VI DESIGN STUDIO: LOCAL ARCHITECTURE & VERIFICATION SUITE");
console.log("============================================================\n");

const ROOT = path.join(__dirname, '..');
let failures = 0;

function assert(condition, testName, details = "") {
  if (condition) {
    console.log(`[PASS] ${testName}`);
  } else {
    console.error(`[FAIL] ${testName}${details ? " - " + details : ""}`);
    failures++;
  }
}

// -----------------------------------------------------------------------------
// Test 1: Verify Core Project Files
// -----------------------------------------------------------------------------
console.log("--- 1. Core Architecture Files Verification ---");
const requiredFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/includes/page.tsx',
  'app/courses/page.tsx',
  'app/globals.css',
  'components/Header.tsx',
  'components/Hero.tsx',
  'components/PaletteTokens.tsx',
  'components/ComponentLab.tsx',
  'components/DirectivesList.tsx',
  'components/Footer.tsx',
  'components/icons/KeylineSystemIcons.tsx',
  'components/includes/IncludesExplorer.tsx',
  'components/includes/UIComponentShowcase.tsx',
  'components/includes/IncludeCard.tsx',
  'components/includes/IncludeInspector.tsx',
  'components/includes/DomainFilterRibbon.tsx',
  'components/courses/SectionHeading.tsx',
  'components/courses/CourseCard.tsx',
  'components/courses/ProviderCard.tsx',
  'components/courses/CategoryList.tsx',
  'components/courses/CourseCatalogueView.tsx',
  'lib/types-includes.ts',
  'lib/includes-data.ts',
  'lib/types-courses.ts',
  'lib/courses-data.ts',
  'docs/SYSTEM_DESIGN_AI_AGENTS_SUMMARY.md',
  'tailwind.config.ts',
  'tsconfig.json',
  'package.json',
  'wrangler.jsonc',
  'open-next.config.ts'
];

for (const file of requiredFiles) {
  const fullPath = path.join(ROOT, file);
  assert(fs.existsSync(fullPath), `Verified file exists: ${file}`);
}

// -----------------------------------------------------------------------------
// Test 2: Verify Catalog Schema & Includes Integrity
// -----------------------------------------------------------------------------
console.log("\n--- 2. Includes Catalog & Resilience Strategies Data Check ---");
const includesContent = fs.readFileSync(path.join(ROOT, 'lib/includes-data.ts'), 'utf8');

// Check that all 22 resilience codes exist
for (let i = 1; i <= 22; i++) {
  const code = `RES-${String(i).padStart(3, '0')}`;
  assert(includesContent.includes(code), `Resilience Strategy Code present: ${code}`);
}

// Check that 10 UI components exist
const uiCodes = ['UI-001', 'UI-002', 'UI-003', 'UI-004', 'UI-005', 'UI-006', 'UI-007', 'UI-008', 'UI-009', 'UI-010'];
for (const code of uiCodes) {
  assert(includesContent.includes(code), `UI Component Include present: ${code}`);
}

// Check Courses Data Integrity
console.log("\n--- 2b. Course Catalogue Data Integrity Check ---");
const coursesContent = fs.readFileSync(path.join(ROOT, 'lib/courses-data.ts'), 'utf8');
const courseCodes = ['ARCH-401', 'AI-301', 'SEC-302', 'CLOUD-201', 'DB-201', 'AI-101', 'PROD-501', 'K8S-402', 'SEC-501'];
for (const code of courseCodes) {
  assert(coursesContent.includes(code), `Course Code present: ${code}`);
}
assert(coursesContent.includes('IDT-KH'), "Training Provider present: IDT-KH");
assert(coursesContent.includes('NCEC'), "Training Provider present: NCEC");
assert(coursesContent.includes('CSDA'), "Training Provider present: CSDA");
assert(coursesContent.includes('ASLAB'), "Training Provider present: ASLAB");

// -----------------------------------------------------------------------------
// Test 3: Zero Emoji & Zero Unicode Symbol Audit
// -----------------------------------------------------------------------------
console.log("\n--- 3. Strict Zero Emoji Policy Verification ---");
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}]/u;

function auditEmojis(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (['node_modules', '.next', '.git', '.open-next'].includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      auditEmojis(fullPath);
    } else if (/\.(tsx|ts|js|jsx|css|jsonc)$/.test(entry.name)) {
      const text = fs.readFileSync(fullPath, 'utf8');
      const match = emojiRegex.exec(text);
      if (match) {
        assert(false, `Emoji scan: ${path.relative(ROOT, fullPath)}`, `Found emoji '${match[0]}'`);
      }
    }
  }
}

auditEmojis(path.join(ROOT, 'app'));
auditEmojis(path.join(ROOT, 'components'));
auditEmojis(path.join(ROOT, 'lib'));
console.log("[PASS] Zero emoji audit completed across all source trees.");

// -----------------------------------------------------------------------------
// Test 4: Accessible Labeled Inputs & Textareas Audit
// -----------------------------------------------------------------------------
console.log("\n--- 4. Form Controls & Accessible Label Verification ---");
function auditLabels(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const inputMatches = [...text.matchAll(/<input[^>]*id=["']([^"']+)["'][^>]*>/g)];
  const textareaMatches = [...text.matchAll(/<textarea[^>]*id=["']([^"']+)["'][^>]*>/g)];

  for (const match of [...inputMatches, ...textareaMatches]) {
    const id = match[1];
    const hasLabel = new RegExp(`<label[^>]*htmlFor=["']${id}["']`, 'i').test(text);
    assert(hasLabel, `Accessible <label> bound to id="${id}" in ${path.basename(filePath)}`);
  }
}

auditLabels(path.join(ROOT, 'components/includes/IncludesExplorer.tsx'));
auditLabels(path.join(ROOT, 'components/includes/IncludeInspector.tsx'));
auditLabels(path.join(ROOT, 'components/includes/UIComponentShowcase.tsx'));
auditLabels(path.join(ROOT, 'components/ComponentLab.tsx'));
auditLabels(path.join(ROOT, 'components/courses/CourseCatalogueView.tsx'));

// -----------------------------------------------------------------------------
// Test 5: TypeScript Compilation Check (tsc --noEmit)
// -----------------------------------------------------------------------------
console.log("\n--- 5. TypeScript Static Typecheck ---");
try {
  execSync('npx tsc --noEmit', { cwd: ROOT, stdio: 'pipe' });
  assert(true, "TypeScript strict typecheck: zero errors");
} catch (err) {
  assert(false, "TypeScript strict typecheck", err.stdout ? err.stdout.toString() : err.message);
}

// -----------------------------------------------------------------------------
// Final Report
// -----------------------------------------------------------------------------
console.log("\n============================================================");
if (failures === 0) {
  console.log("ALL LOCAL TESTS PASSED (0 FAILURES).");
  console.log("============================================================");
  process.exit(0);
} else {
  console.error(`LOCAL VERIFICATION FAILED WITH ${failures} ERROR(S).`);
  console.log("============================================================");
  process.exit(1);
}
