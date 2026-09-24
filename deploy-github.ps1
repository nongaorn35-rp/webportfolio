# ===================================================================
# PowerShell Script: Deploy Web Portfolio to GitHub
# Usage: .\deploy-github.ps1 -RepoUrl "https://github.com/USERNAME/REPO.git"
# ===================================================================

param (
    [Parameter(Mandatory=$false)]
    [string]$RepoUrl
)

$git = "C:\Program Files\Git\cmd\git.exe"

if (-not (Test-Path $git)) {
    Write-Error "ไม่พบ Git ที่ $git กรุณาตรวจสอบการติดตั้ง Git"
    exit 1
}

if (-not $RepoUrl) {
    Write-Host "==========================================================" -ForegroundColor Cyan
    Write-Host "   โปรดระบุ GitHub Repository URL ของคุณ เช่น:" -ForegroundColor Yellow
    Write-Host "   https://github.com/<your-username>/webportfolio.git" -ForegroundColor White
    Write-Host "==========================================================" -ForegroundColor Cyan
    $RepoUrl = Read-Host "กรอก GitHub Repository URL"
}

if (-not $RepoUrl) {
    Write-Warning "ไม่มีการระบุ URL ยกเลิกขั้นตอน"
    exit 0
}

Write-Host "`nกำลังตรวจสอบการเชื่อมต่อ Git Remote..." -ForegroundColor Cyan

# เช็คว่ามี remote origin อยู่หรือไม่
$existingOrigin = & $git remote get-url origin 2>$null
if ($existingOrigin) {
    Write-Host "พบ Remote Origin เดิม ($existingOrigin) กำลังอัปเดต URL เป็น $RepoUrl" -ForegroundColor Yellow
    & $git remote set-url origin $RepoUrl
} else {
    Write-Host "กำลังเพิ่ม Remote Origin: $RepoUrl" -ForegroundColor Green
    & $git remote add origin $RepoUrl
}

Write-Host "กำลัง Push โค้ดทั้งหมดขึ้น Branch 'main'..." -ForegroundColor Cyan
& $git branch -M main
& $git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n==========================================================" -ForegroundColor Green
    Write-Host "   🎉 Deploy โปรเจกต์ขึ้น GitHub สำเร็จเรียบร้อยแล้ว!" -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "`nขั้นตอนต่อไป: เปิดใช้งาน GitHub Pages เพื่อให้เว็บไซต์ออนไลน์" -ForegroundColor Yellow
    Write-Host "1. เข้าไปที่หน้า Repository บน GitHub" -ForegroundColor White
    Write-Host "2. คลิกที่แท็บ Settings -> Pages" -ForegroundColor White
    Write-Host "3. ในส่วน Branch เลือก 'main' แล้วกด Save" -ForegroundColor White
} else {
    Write-Host "`nเกิดข้อผิดพลาดในการ Push กรุณาตรวจสอบสิทธิ์การเข้าถึง GitHub หรือ Personal Access Token" -ForegroundColor Red
}
