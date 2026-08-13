Write-Host "PDFs werden erstellt..."

$pdfFolder = "docs/assets/pdf"

if (!(Test-Path $pdfFolder)) {
    New-Item -ItemType Directory -Path $pdfFolder | Out-Null
}

Get-ChildItem "docs" -Filter "*.md" | ForEach-Object {

    # Startseite nicht als PDF erzeugen
    if ($_.Name -ne "index.md") {

        $inputFile = $_.FullName
        $outputFile = Join-Path $pdfFolder ($_.BaseName + ".pdf")

        Write-Host "Erstelle $($_.BaseName).pdf ..."

        pandoc $inputFile `
            -o $outputFile `
            --pdf-engine=typst `
            --template=templates/schulskript.typ `
            --lua-filter=filters/remove-pdf-download.lua

        if ($LASTEXITCODE -ne 0) {
            Write-Host "Fehler bei $($_.Name)"
            exit 1
        }
    }
}

Write-Host "Alle PDFs erfolgreich erstellt."
Write-Host "MkDocs wird gestartet..."

mkdocs serve