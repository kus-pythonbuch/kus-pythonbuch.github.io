-- PDF-Download-Links beim PDF-Export entfernen

function Link(el)
  local url = el.target or ""
  local text = pandoc.utils.stringify(el.content)

  -- Links auf generierte Kapitel-PDFs entfernen
  if url:match("assets/pdf/") or
     text:lower():match("pdf herunterladen") or
     text:lower():match("kapitel als pdf") then
    return {}
  end

  return nil
end