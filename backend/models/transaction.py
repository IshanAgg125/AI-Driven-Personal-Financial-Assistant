import re

from pdfminer.high_level import extract_pages, extract_text
import tabula


# for page_layout in extract_pages("backend/models/sample.pdf"):
#     for element in page_layout:
#         print(element)

text = extract_text("backend/models/sample.pdf")
print(text)

 

# tables = tabula.read_pdf("backend/models/sample.pdf", pages ="all")
# print(tables)