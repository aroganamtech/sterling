# Sterling Ventilation — remove files superseded by the content update
# Run from the project root:  powershell -ExecutionPolicy Bypass -File .\cleanup-removed-files.ps1
#
# These files are no longer imported anywhere. Removing them keeps the build
# clean and stops orphaned assets being bundled by the products image glob.

$files = @(
  "src\assets\products\air-handling-unit-detail.svg",
  "src\assets\products\air-handling-unit-elevation.svg",
  "src\assets\products\air-handling-unit-section.svg",
  "src\assets\products\axial-flow-fan-detail.svg",
  "src\assets\products\axial-flow-fan-elevation.svg",
  "src\assets\products\axial-flow-fan-section.svg",
  "src\assets\products\car-park-jet-fan-detail.svg",
  "src\assets\products\car-park-jet-fan-elevation.svg",
  "src\assets\products\car-park-jet-fan-section.svg",
  "src\assets\products\centrifugal-fan-detail.svg",
  "src\assets\products\centrifugal-fan-elevation.svg",
  "src\assets\products\centrifugal-fan-section.svg",
  "src\assets\products\stair-pressurisation-unit-detail.svg",
  "src\assets\products\stair-pressurisation-unit-elevation.svg",
  "src\assets\products\stair-pressurisation-unit-section.svg",
  "src\assets\products\sterling-centro-detail.svg",
  "src\assets\products\sterling-centro-elevation.svg",
  "src\assets\products\sterling-centro-elevation.webp",
  "src\assets\products\sterling-centro-section.svg",
  "src\assets\products\tunnel-ventilation-fan-detail.svg",
  "src\assets\products\tunnel-ventilation-fan-elevation.svg",
  "src\assets\products\tunnel-ventilation-fan-section.svg",
  "src\components\products\CategoryAccordion.jsx",
  "src\components\SolutionFinder.jsx",
  "src\components\ProcessFlow.jsx",
  "src\components\hero\CinematicHero.jsx",
  "src\components\hero\HeroStage.jsx",
  "src\components\hero\shaders.js"
  "src\data\engineering.js",
  "src\data\industries.js",
  "src\data\projects.js",
  "src\pages\Careers.jsx",
  "src\pages\about\GlobalPresence.jsx",
  "src\pages\about\VisionMission.jsx",
  "src\pages\engineering\EngineeringDetail.jsx",
  "src\pages\engineering\EngineeringIndex.jsx",
  "src\pages\industries\IndustriesIndex.jsx",
  "src\pages\industries\IndustryDetail.jsx",
  "src\pages\projects\ProjectDetail.jsx",
  "src\pages\projects\ProjectsIndex.jsx",
  "src\pages\resources\News.jsx"
)

$dirs = @("src\pages\engineering", "src\pages\industries", "src\pages\projects")

foreach ($f in $files) {
  if (Test-Path $f) { Remove-Item -LiteralPath $f -Force; Write-Host "removed $f" }
  else { Write-Host "already gone: $f" }
}

foreach ($d in $dirs) {
  if ((Test-Path $d) -and -not (Get-ChildItem -LiteralPath $d -Force)) {
    Remove-Item -LiteralPath $d -Force; Write-Host "removed empty folder $d"
  }
}

Write-Host ""
Write-Host "Done. Now run: npm run build"
