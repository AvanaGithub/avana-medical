# Product catalogue

Everything on **products.html** (the catalogue) and **product.html** (each product's page) comes from one file: `data/catalog.js`. No build step is needed: edit, save, refresh.

> All current content is dummy (lorem ipsum). "Lorem Medical" and "Ipsum Ortho" are placeholder brands.

## Folder structure

```
Avana_medical/
├── products.html                  Catalogue: search + filter by category and brand
├── product.html                   Product detail page, opened as product.html?id=<product-id>
├── data/
│   ├── catalog.js                 Brands, categories and products (edit this)
│   └── README.md                  This guide
├── images/
│   └── products/
│       ├── knotless-suture-anchor/
│       │   ├── 1.svg              First image = card thumbnail and main gallery image
│       │   └── 2.svg              Further images appear as gallery thumbnails
│       ├── adjustable-loop-cortical-button/
│       └── …                      One folder per product, named after the product id
└── assets/js/products.js          Code that renders both pages (no need to edit)
```

## The three lists in catalog.js

### brands
| Field  | Example                | Notes                          |
|--------|------------------------|--------------------------------|
| id     | `"arthrex"`            | Lowercase, hyphens, no spaces. Products refer to this. |
| name   | `"Arthrex"`            | Shown on the site.             |
| origin | `"Naples, Florida, USA"` | Shown on the product page.   |
| about  | `"…"`                  | One or two sentences.          |

### categories
| Field   | Example              | Notes                     |
|---------|----------------------|---------------------------|
| id      | `"sports-medicine"`  | Used in links: `products.html?category=sports-medicine` |
| name    | `"Sports Medicine"`  | Shown on the site.        |
| summary | `"…"`                | Shown when the category is selected. |

### products
| Field       | Example                                   | Notes |
|-------------|-------------------------------------------|-------|
| id          | `"knotless-suture-anchor"`                | Lowercase, hyphens. Must match the image folder name. Used in the page link `product.html?id=…`. |
| name        | `"Knotless Suture Anchor"`                | |
| brand       | `"arthrex"`                               | A brand **id** from the brands list. |
| category    | `"sports-medicine"`                       | A category **id** from the categories list. |
| code        | `"AR-SM-101"`                             | Catalogue / reference number. Searchable. |
| featured    | `true`                                    | Featured products are listed first. |
| summary     | `"One sentence."`                         | Shown on the card and at the top of the product page. |
| description | `["Paragraph 1", "Paragraph 2"]`          | Any number of paragraphs. |
| features    | `["Feature 1", "Feature 2"]`              | Bullet list. |
| specs       | `[{ label: "Material", value: "PEEK" }]`  | Specification table. |
| images      | `["images/products/<id>/1.jpg", …]`       | First image is the thumbnail. Any number of images. |

## Adding a product

1. Create a folder `images/products/<product-id>/` and put the photos in it (`1.jpg`, `2.jpg`, …). JPG, PNG, WebP or SVG all work. Use a 4:3 landscape shape, around 1200 × 900 px, on a plain light background.
2. In `data/catalog.js`, copy an existing product block, paste it at the end of the `products` list (mind the comma between blocks) and change the fields.
3. Open `products.html` and check the new card appears; click it to check the detail page.

## Replacing a placeholder image

Drop the real photo into the product's folder and update the file name in its `images` list, e.g. change `1.svg` to `1.jpg`. Then delete the old `.svg`.

## Adding a brand or category

Add an entry to `brands` or `categories`. It appears in the filters automatically once at least one product uses it.

---

# Job openings (careers.html)

The "Open positions" list on **careers.html** comes from `data/jobs.js`. The field list is at the top of that file.

- **Add a job:** copy a block, change the fields, keep the comma between blocks.
- **Close a job:** delete its block.
- **Filters:** the Department and Location filters fill themselves from the jobs, so a new department or city appears automatically.
- **Order:** newest `posted` date is listed first.
- **Link to one job:** `careers.html?job=<id>` opens the page with that job expanded, which is handy for LinkedIn or WhatsApp posts.

All current jobs are dummy (lorem ipsum) and must be replaced.
