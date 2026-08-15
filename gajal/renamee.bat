@echo off
cd /d "%~dp0"

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$folder=Get-Location; $txt=Join-Path $folder 'renamed_songs.txt'; $out=@(); Get-ChildItem -LiteralPath $folder -Filter '*.mp3' -File | ForEach-Object { $old=$_.BaseName; $name=$old -replace '^[0-9]+[\s._-]*',''; $name=$name -replace '[^a-zA-Z0-9\s-]',''; $name=$name -replace '[-\s]+',' '; $words=$name.Trim() -split '\s+'; $words=$words | Select-Object -First 6; $name=$words -join '-'; $new=$name+'.mp3'; $n=2; while(Test-Path (Join-Path $folder $new)){ $suffix='-'+$n; $base=$name; $new=$base+$suffix+'.mp3'; $n++ }; Rename-Item -LiteralPath $_.FullName -NewName $new; $out += ('""gajal/'+$new+'""' + ',') }; $out | Set-Content -LiteralPath $txt -Encoding UTF8; Write-Host ''; Write-Host 'DONE!' -ForegroundColor Green; Write-Host 'Created:' $txt"

echo.
pause