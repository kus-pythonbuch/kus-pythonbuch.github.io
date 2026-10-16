Write-Host "PDFs werden erstellt..."
Push-Location (Join-Path $PSScriptRoot "docs")
try {
    New-Item -ItemType Directory -Force -Path "assets/pdf" | Out-Null
    Get-ChildItem -Filter "*.md" | ForEach-Object {
        if ($_.Name -ne "index.md" -and $_.BaseName -notlike "*_alt") {
            Write-Host "Erstelle $($_.BaseName).pdf ..."
            pandoc $_.Name `
                -o "assets/pdf/$($_.BaseName).pdf" `
                --pdf-engine=typst `
                --template="../templates/schulskript.typ" `
                --lua-filter="../filters/remove-pdf-download.lua" `
                --resource-path=.
            if ($LASTEXITCODE -ne 0) { throw "Fehler bei $($_.Name)" }
        }
    }
} finally { Pop-Location }
Write-Host "PDFs erstellt. MkDocs wird gestartet..."
mkdocs serve
