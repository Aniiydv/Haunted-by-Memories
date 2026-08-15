@echo off
cd /d "%~dp0"

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$folder=Get-Location; $txt=Join-Path $folder 'renamed_songs.txt'; $out=@(); Get-ChildItem -LiteralPath $folder -Filter '*.mp3' -File | ForEach-Object { $old=$_.BaseName; $name=$old -replace '^[0-9]+[\s._-]*',''; $name=$name -replace '\s+','-'; $name=$name -replace '[^a-zA-Z0-9-]',''; $name=$name -replace '-+','-'; $name=$name.Trim('-'); if($name.Length -gt 25){$name=$name.Substring(0,25).TrimEnd('-')}; $new=$name+'.mp3'; $n=2; while(Test-Path (Join-Path $folder $new)){ $suffix='-'+$n; $max=25-$suffix.Length; $base=$name.Substring(0,[Math]::Min($name.Length,$max)).TrimEnd('-'); $new=$base+$suffix+'.mp3'; $n++ }; Rename-Item -LiteralPath $_.FullName -NewName $new; $out += ('""gajal/'+$new+'""' + ',') }; $out | Set-Content -LiteralPath $txt -Encoding UTF8; Write-Host ''; Write-Host 'DONE!' -ForegroundColor Green; Write-Host 'Created:' $txt"

echo.
pause