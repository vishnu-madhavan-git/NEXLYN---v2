# NEXLYN Distribution - Live Site Data Extract

> Extracted: 2026-03-24
> Source: https://www.nexlyndistribution.com/
> Backend API: https://backend.nexlyndistribution.com/api/

---

## Site Architecture

- **Framework:** Next.js (RSC/App Router)
- **Backend API:** Express/Node.js at `backend.nexlyndistribution.com`
- **Database:** MongoDB (ObjectID-based IDs)
- **Image CDN:** Cloudinary (`res.cloudinary.com/dmemle98a`)
- **Page Title Pattern:** `[Page/Product Name] | NEXLYN`

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/products` | GET | All products (paginated: `{products, page, pages, total}`) |
| `/api/products/:id` | GET | Single product with full details |
| `/api/categories` | GET | All categories |
| `/api/banners` | GET | Homepage banners/sliders |

### Routes

| Route | Title | Purpose |
|-------|-------|---------|
| `/` | NEXLYN - Premium E-commerce Experience | Homepage |
| `/products` | MikroTik Products - Routers, Switches & Wireless Devices | Product listing |
| `/product/:id` | [Product Name] - NEXLYN | Product detail page |
| `/category/:id` | Category filtered view | Category page |
| `/about` | About Us | About page |
| `/contact` | Contact Us | Contact page |
| `/privacy` | Privacy Policy | Legal |
| `/terms` | Terms of Service | Legal |

---

## Navigation

```
Logo: "NEXLYN Distribution" (N highlighted separately)
Links: HOME | Products | About Us | Contact Us
```

---

## Homepage Sections

### 1. Hero Section
- Brand name: "NEXLYN"
- Heading: "Powering Reliable Connectivity with NEXLYN"
- Description: "NEXLYN is a trusted supplier of professional networking solutions, specializing in genuine MikroTik routers, switches, and wireless devices. Our product range is built to deliver performance, stability, and scalability for homes, businesses, and ISP networks. Whether you are deploying a new network or upgrading existing infrastructure, NEXLYN provides dependable technology backed by expertise and support."
- Stats badges:
  - "100% Genuine MikroTik Products"
  - "24/7 Technical & Sales Support"

### 2. Featured Products Section
- Section header: "Exclusive Collection" / "Featured Products"
- CTA: "View All Products" link to /products
- Displays 8 product cards in horizontal scroll
- Product card format: Image, Category badge, Title, Description, Price, Cart button

### 3. Top Categories Section
- Section header: "Browse by Theme" / "Top Categories"
- 3 category cards with images and "View Collection" CTA:
  - WIRELESS SYSTEMS -> /category/697ffbdc9f6a178fdfb66202
  - ETHERNET ROUTERS -> /category/697ffc5e9f6a178fdfb66209
  - SWITCHES -> /category/69801986af7ea421683e4986

### 4. Custom Quote CTA Section
- Heading: "Need a Custom Quote?"
- Text: "Contact us today for bulk orders or specialized product requirements. Our experts are ready to assist you."
- Button: "WhatsApp Us Now"

### 5. Banners (API Data)
Two active banners:
1. L009UiGS-RM -> links to /product/6980507eaf7ea421683e4dbe
   - Image: https://res.cloudinary.com/dmemle98a/image/upload/v1770119725/ecommerce/q1kzk2j4qffrq3ioam9b.png
   - Background: https://res.cloudinary.com/dmemle98a/image/upload/v1770119726/ecommerce/khdzdafeyjdhhtmiu6ua.png
2. hEX S (2025) -> links to /product/698054e2af7ea421683e4e91
   - Image: https://res.cloudinary.com/dmemle98a/image/upload/v1770119508/ecommerce/shpp90qwimiok35tqryb.png
   - Background: https://res.cloudinary.com/dmemle98a/image/upload/v1770119509/ecommerce/mvsbniaopng6rog0dgg0.webp

---

## Footer

```
Column 1 - Brand:
  Heading: "NEXLYN"
  Text: "Supplying genuine MikroTik networking solutions including routers, switches, and wireless devices. NEXLYN is committed to reliable connectivity, quality products, and dedicated customer support."

Column 2 - Quick Links:
  - Home (/)
  - Products (/products)
  - About Us (/about-us)
  - Contact Us (/contact-us)

Column 3 - Contact Us:
  - Location: Dubai, UAE
  - Phone: +971 56 922 3145
  - Email: info@nexlyndistribution.com

Column 4 - Follow Us:
  - Facebook (#)
  - Twitter (#)
  - Instagram (#)
  - LinkedIn (#)
  - Newsletter signup (email + "Join" button)

Bottom bar:
  - "2026 NEXLYN. All rights reserved."
  - Privacy Policy | Terms of Service
```

---

## Products Page (/products)

### Layout
- Page title: "All Products"
- Subtitle: "Discover our complete collection of premium items."
- Search bar: "Search products..."
- Category filter tabs: All | WIRELESS SYSTEMS | ETHERNET ROUTERS | SWITCHES (with category images)
- Sort: "Sort: Newest First"
- Product count: "Showing all products (12)" per page
- Pagination: 5 pages, 12 products per page, prev/next arrows
- Same product card as homepage

---

## Product Detail Page (/product/:id)

### Layout Structure
- **Left side:** Main product image with thumbnail gallery below
- **Right side:**
  - Category badge (e.g., "SWITCHES")
  - Product name (h1)
  - Price display ("Price" label + formatted price)
  - Short description paragraph
  - Key features bullet list
  - Stock status ("In Stock" with icon)
  - "Request Quote on WhatsApp" button

### Tabs Section (below product info)
1. **Detailed Description** - Extended product description text
2. **Specifications** - Structured key-value pairs in sections (Specifications, Powering, Ethernet, Certification & Approvals)
3. **Documents** - YouTube link and PDF link

### Product Data Schema (from API)
```json
{
  "_id": "string (MongoDB ObjectId)",
  "name": "string",
  "description": "string (short description)",
  "detailedDescription": "string (long description for tab)",
  "price": "number",
  "images": ["array of Cloudinary URLs"],
  "keyFeatures": ["array of feature strings"],
  "specifications": "string (plain text, section:key:value format)",
  "useCases": "string (plain text with use case scenarios)",
  "category": { "_id": "string", "name": "string", "slug": "string" },
  "inStock": "boolean",
  "youtubeLink": "string (YouTube URL)",
  "pdfLink": "string (MikroTik CDN PDF URL)",
  "createdAt": "ISO date",
  "updatedAt": "ISO date"
}
```

---

## About Page (/about)

### Sections

**1. Hero**
- Heading: "Our Journey to Reliable Connectivity"
- Subtext: "NEXLYN was founded with a clear goal: to deliver professional-grade networking solutions that businesses, ISPs, and home users can trust."

**2. Mission & Vision Cards**
- **Our Mission:** "To provide genuine, high-performance networking products that enable stable, secure, and scalable connectivity. We focus on delivering original MikroTik solutions backed by expert guidance and dependable support."
- **Our Vision:** "To become a trusted regional leader in networking distribution, recognized for authenticity, technical expertise, and long-term customer partnerships across enterprise and ISP markets."

**3. Story Section**
- Image: "NEXLYN Office" (about page image)
- Badge: "Founded in 2026"
- Heading: "How we started..."
- Paragraph 1: "NEXLYN began as a focused networking supply business with a mission to make genuine MikroTik products easily accessible to professionals, system integrators, and growing companies."
- Paragraph 2: "Today, we support businesses, ISPs, and individual users with a carefully selected range of routers, switches, and wireless solutions-- always prioritizing reliability, authenticity, and technical accuracy."

**4. Values Section**
- Heading: "Small Team, Strong Networks"
- Subtitle: "The principles that define how we work and serve."
- 4 value cards:
  - Trusted | Business & ISP Clients
  - 100% | Genuine Products
  - Fast | Order Fulfillment
  - Expert | Technical Support

---

## Contact Page (/contact)

### Layout
- **Left: Contact Form**
  - Heading: "Contact Us"
  - Subtitle: "Have a question or need a special quote? Reach out to our team and we'll get back to you as soon as possible."
  - Fields:
    - Full Name (placeholder: "John Doe")
    - Email Address (placeholder: "john@example.com")
    - Subject (placeholder: "Pricing Inquiry / Bulk Order")
    - Message (placeholder: "Tell us how we can help...")
  - Submit: "Send Message" button

- **Right: Contact Information Panel**
  - Phone: +971 56 922 3145
  - Email: info@nexlyndistribution.com
  - Office: Deira, Dubai, UAE
  - Social links: Facebook, Twitter, Instagram, LinkedIn (all #)
  - Google Maps embed (iframe)

---

## Categories

| ID | Name | Slug | Image URL |
|----|------|------|-----------|
| 697ffbdc9f6a178fdfb66202 | WIRELESS SYSTEMS | wireless-systems | https://res.cloudinary.com/dmemle98a/image/upload/v1769995227/ecommerce/pyh06c9fg95k5mu7brzd.png |
| 697ffc5e9f6a178fdfb66209 | ETHERNET ROUTERS | ethernet-routers | https://res.cloudinary.com/dmemle98a/image/upload/v1769995357/ecommerce/wt2oxh84t8dh9cctvfnh.png |
| 69801986af7ea421683e4986 | SWITCHES | switches | https://res.cloudinary.com/dmemle98a/image/upload/v1770002821/ecommerce/zbtn1l1wbwquelfiojbv.png |

Category description (shared): "MikroTik offers routers, switches, and wireless systems for every type of network -- from home offices and small businesses to carrier-grade ISP infrastructure. Whether you're building a setup for a few users or thousands, there's a MikroTik device that fits your needs and your budget."

---

## Complete Product Catalog (56 Products)

### SWITCHES (34 products)

| # | ID | Name | Price | Images |
|---|----|----|-------|--------|
| 1 | 698b24a05efddfffaeb2d69e | MikroTik CRS304-4XG-IN - The Ultimate 10G Copper Desktop Switch | $199 | 7 images |
| 2 | 698b21da5efddfffaeb2d696 | MikroTik CRS305-1G-4S+IN - The Compact 10G Fiber Gateway | $149 | 3 images |
| 3 | 698b203b5efddfffaeb2d68e | MikroTik CRS312-4C+8XG-RM - The 10G Copper Specialist | $699 | 1 image |
| 4 | 698b18fd5efddfffaeb2d686 | MikroTik CRS320-8P-8B-4S+RM - The High-Power NetPower Alternative | $488 | 3 images |
| 5 | 698b15775efddfffaeb2d67e | MikroTik CRS317-1G-16S+RM - The Enterprise Fiber Core | $498 | 2 images |
| 6 | 698ada945efddfffaeb2d61b | MikroTik CRS309-1G-8S+IN - The Compact 10G Desktop Powerhouse | $268 | 4 images |
| 7 | 6989d74c5efddfffaeb2d56b | MikroTik CRS518-16XS-2XQ-RM - The 100G Data Center Powerhouse | $1,593 | 3 images |
| 8 | 6989d5405efddfffaeb2d563 | MikroTik CRS310-1G-5S-4S+IN - The Fiber-Forward Desktop Hub | $199 | 3 images |
| 9 | 6989d33c5efddfffaeb2d55b | MikroTik CRS310-8G+2S+IN - The 2.5G Desktop Speedster | $219 | 3 images |
| 10 | 6989cabf5efddfffaeb2d4e4 | MikroTik netPower 16P - The High-Power Outdoor PoE Distribution Switch | $278 | 3 images |
| 11 | 6989c9345efddfffaeb2d4d0 | MikroTik netPower 15FR - The Ultimate Reverse PoE Outdoor Switch | $168 | 4 images |
| 12 | 69870fdf5efddfffaeb2d3ae | MikroTik netFiber 9 - Rugged Outdoor Fiber Switch with 10G SFP+ | $249 | 4 images |
| 13 | 69870dfe5efddfffaeb2d3a6 | MikroTik CRS326-24G-2S+IN - Desktop 24-Port Managed Switch with 10G SFP+ | $197 | 3 images |
| 14 | 69870cb25efddfffaeb2d39e | MikroTik CRS326-24G-2S+RM - The Industry Standard 24-Port Managed Switch | $209 | 3 images |
| 15 | 69870b9b5efddfffaeb2d396 | MikroTik CRS326-24S+2Q+RM - High-Density 10G SFP+ Aggregator | $599 | 2 images |
| 16 | 69870aa05efddfffaeb2d386 | MikroTik CRS326-4C+20G+2Q+RM - The 2.5G Enterprise Workhorse | $999 | 3 images |
| 17 | 698709515efddfffaeb2d376 | MikroTik CRS328-24P-4S+RM - 24-Port PoE+ Powerhouse with 10G Uplinks | $489 | 2 images |
| 18 | 698708865efddfffaeb2d36e | MikroTik CRS328-4C-20S-4S+RM - Professional Fiber Aggregation Switch | $447 | 2 images |
| 19 | 698707845efddfffaeb2d366 | MikroTik CRS354-48G-4S+2Q+RM - High-Density 48-Port Gigabit Switch | $599 | 3 images |
| 20 | 698706225efddfffaeb2d35e | MikroTik CRS354-48P-4S+2Q+RM - High-Density 48-Port PoE+ Core Switch | $999 | 4 images |
| 21 | 6985d2815efddfffaeb2d2a8 | MikroTik CRS520-4XS-16XQ-RM - Enterprise Core 100G Switch | $2,195 | 3 images |
| 22 | 6985d13a5efddfffaeb2d2a0 | MikroTik CSS318-16G-2S+IN - Smart 16-Port Gigabit Switch with 10G SFP+ | $139 | 3 images |
| 23 | 6985d0015efddfffaeb2d28f | MikroTik CSS326-24G-2S+RM - 24-Port Gigabit Smart Switch with 10G SFP+ | $159 | 2 images |
| 24 | 6985cf1b5efddfffaeb2d287 | MikroTik RB260GS - Compact 5-Port Gigabit Smart Switch with SFP | $39.95 | 2 images |
| 25 | 6985cbc35efddfffaeb2d27f | MikroTik RB260GSP - Compact 5-Port Gigabit PoE Switch with SFP | $55.95 | 3 images |
| 26 | 6985c9d65efddfffaeb2d253 | MikroTik CRS106-1C-5S - Compact Fiber Desktop Switch | $59 | 2 images |
| 27 | 6985c7ce5efddfffaeb2d246 | MikroTik CSS610-8G-2S+IN - Cloud Smart Switch | $119 | 3 images |
| 28 | 6985c6125efddfffaeb2d23e | MikroTik netPower Lite 7R - Outdoor Reverse PoE Reverse Switch | $139 | 2 images |
| 29 | 6985c50b5efddfffaeb2d236 | MikroTik CRS112-8P-4S-IN - Compact 8-Port PoE Managed Switch | $209 | 2 images |
| 30 | 6985c39f5efddfffaeb2d22e | MikroTik CSS610-8P-2S+IN - Cloud Smart Switch with PoE-Out | $227 | 3 images |
| 31 | 6985c2be5efddfffaeb2d226 | MikroTik CRS305-1G-4S+OUT - FiberBox Plus Weatherproof 10G Switch | $229 | 5 images |
| 32 | 6981edc15efddfffaeb2ce74 | MikroTik CRS504-4XQ-IN - Compact 100GbE Rackmount Managed Switch | $799 | 6 images |
| 33 | 6981ec475efddfffaeb2ce60 | CRS504-4XQ-OUT | $897 | 7 images |
| 34 | 6981e99e5efddfffaeb2ce30 | CRS510-8XS-2XQ-IN | $999 | 3 images |

### ETHERNET ROUTERS (22 products)

| # | ID | Name | Price | Images |
|---|----|----|-------|--------|
| 1 | 6980557aaf7ea421683e4e9d | RB5009UPr+S+IN | $298 | 3 images |
| 2 | 698054e2af7ea421683e4e91 | hEX S (2025) | $69 | 2 images |
| 3 | 698053ecaf7ea421683e4e23 | ROSE Data server (RDS) | $1,950 | 4 images |
| 4 | 698052d1af7ea421683e4df5 | RB5009UPr+S+OUT | $319 | 6 images |
| 5 | 6980523baf7ea421683e4de6 | RB4011iGS+RM | $219 | 6 images |
| 6 | 6980507eaf7ea421683e4dbe | L009UiGS-RM | $119 | 5 images |
| 7 | 69804fc1af7ea421683e4d8f | hEX refresh | $59.95 | 2 images |
| 8 | 69804c6eaf7ea421683e4d69 | CCR2216-1G-12XS-2XQ | $2,795 | 3 images |
| 9 | 69804b75af7ea421683e4d38 | CCR2116-12G-4S+ | $995 | 4 images |
| 10 | 698049f4af7ea421683e4d0c | hEX lite | $39.95 | 2 images |
| 11 | 69804972af7ea421683e4ce9 | hEX | $59 | 4 images |
| 12 | 698048e9af7ea421683e4cda | hEX PoE lite | $59.95 | 2 images |
| 13 | 6980480eaf7ea421683e4c94 | hEX S | $79 | 4 images |
| 14 | 6980470caf7ea421683e4c54 | hEX PoE | $89 | 4 images |
| 15 | 69804676af7ea421683e4c2b | PowerBox Pro | $109 | 4 images |
| 16 | 6980455aaf7ea421683e4c0b | CCR2004-1G-2XS-PCIe | $199 | 3 images |
| 17 | 698044eaaf7ea421683e4bfc | RB1100AHx4 | $329 | 2 images |
| 18 | 69804482af7ea421683e4bdc | RB1100AHx4 Dude Edition | $385 | 2 images |
| 19 | 698015cdaf7ea421683e491b | CCR2004-16G-2S+ | $465 | 3 images |
| 20 | 69801322af7ea421683e483f | CCR2004-16G-2S+PC | $464 | 2 images |
| 21 | 69801225af7ea421683e47f3 | CCR2004-1G-12S+2XS | $593 | 3 images |
| 22 | 69800e5daf7ea421683e47a0 | RB5009UG+S+IN | $219 | 2 images |

### WIRELESS SYSTEMS (0 products in API response)

Note: The WIRELESS SYSTEMS category exists but had 0 products returned in the main `/api/products` response. This category may be empty or products may require a different API call.

---

## Product Image URLs (All Cloudinary)

All images follow the pattern:
```
https://res.cloudinary.com/dmemle98a/image/upload/v{timestamp}/ecommerce/{public_id}.png
```

Cloudinary cloud name: `dmemle98a`
Upload folder: `ecommerce`

### Sample Product Full Image List (CRS304-4XG-IN)
1. https://res.cloudinary.com/dmemle98a/image/upload/v1770726549/ecommerce/om6tlfcy728bduqquw20.png
2. https://res.cloudinary.com/dmemle98a/image/upload/v1770726545/ecommerce/nmpdi1ltgpxl1qvqsk3t.png
3. https://res.cloudinary.com/dmemle98a/image/upload/v1770726546/ecommerce/hktnem9f39oidufubxaq.png
4. https://res.cloudinary.com/dmemle98a/image/upload/v1770726546/ecommerce/ghxp3ymn4fo9cgrincnq.png
5. https://res.cloudinary.com/dmemle98a/image/upload/v1770726546/ecommerce/w0mtvynjhhgn0ds88ggf.png
6. https://res.cloudinary.com/dmemle98a/image/upload/v1770726547/ecommerce/hstvkc92m0oizexevlbb.png
7. https://res.cloudinary.com/dmemle98a/image/upload/v1770726548/ecommerce/c5gqiujh8luqsl8r4mub.png

---

## Product Descriptions (Short)

| Product | Short Description |
|---------|------------------|
| CRS304-4XG-IN | The MikroTik CRS304-4XG-IN is a game-changing, ultra-compact switch designed for those who need maximum speed with minimum fuss. Released as a specialized solution for offices in Dubai and tech hubs across Africa. |
| CRS305-1G-4S+IN | Compact yet incredibly powerful switch, perfect entry point into 10Gbps networking. For home labs in Dubai Hills or small branch offices in Nairobi. |
| CRS312-4C+8XG-RM | Unique powerhouse designed to bridge the gap between traditional copper (RJ45) and high-speed 10Gbps networking. 8 dedicated 10G RJ45 ports. |
| CRS320-8P-8B-4S+RM | Unique, high-power PoE switch for demanding professional setups. Mix of standard PoE and high-power 802.3bt (PoE++) capabilities. |
| CRS317-1G-16S+RM | High-performance, rack-mountable manageable switch for fiber-heavy networks. 16 SFP+ ports for high-density 10Gbps connectivity. |
| CRS309-1G-8S+IN | Fan-favorite for high-speed networking in a small footprint. Eight SFP+ slots for 10G fiber connectivity. |
| CRS518-16XS-2XQ-RM | Titan in networking, designed for data center environments. 100Gbps with high-density 25G connectivity alongside 100G uplinks. |
| CRS310-1G-5S-4S+IN | Specialized fiber powerhouse for small-to-medium distribution points. High-density 10G and 1G fiber connectivity. |
| CRS310-8G+2S+IN | Compact, high-performance switch for 2.5 Gigabit Ethernet as the new standard for WiFi 6/7 Access Points. |
| netPower 16P | Powerhouse outdoor PoE distribution switch for surveillance and wireless deployments. |
| netPower 15FR | Specialized outdoor switch for ISPs - draws power from customer premises (Reverse PoE). |
| netFiber 9 | Rugged outdoor fiber switch with 10G SFP+ for harsh environments, IP66 enclosure. |
| CRS326-24G-2S+IN | Desktop version of the legendary CRS326 series, 24-port managed with 10G SFP+. |
| CRS326-24G-2S+RM | Industry standard 24-port managed switch, balance between Gigabit density and 10G uplinks. |
| CRS326-24S+2Q+RM | High-density 10G SFP+ aggregator for fiber-heavy data centers. |
| CRS326-4C+20G+2Q+RM | 2.5G enterprise workhorse, breaks the Gigabit bottleneck for WiFi 6/7. |
| CRS328-24P-4S+RM | All-in-one 24-port PoE+ with 10G uplinks for modern offices. |
| CRS328-4C-20S-4S+RM | Professional fiber aggregation switch, gold standard for fiber density. |
| CRS354-48G-4S+2Q+RM | High-density 48-port gigabit switch (non-PoE) with extreme uplink speeds. |
| CRS354-48P-4S+2Q+RM | 48-port PoE+ core switch, massive port density with fiber uplinks. |
| CRS520-4XS-16XQ-RM | Enterprise core 100G switch for demanding core environments. |
| CSS318-16G-2S+IN | Smart 16-port gigabit switch with 10G SFP+, middle-ground solution. |
| CSS326-24G-2S+RM | 24-port gigabit smart switch with 10G SFP+ uplinks, industry favorite. |
| RB260GS | Compact 5-port gigabit smart switch with SFP, essential building block. |
| RB260GSP | Compact 5-port gigabit PoE switch with SFP, for powering networked devices. |
| CRS106-1C-5S | Pocket-sized fiber desktop switch for fiber-to-the-desktop applications. |
| CSS610-8G-2S+IN | Popular compact cloud smart switch with 10Gbps bridge capability. |
| netPower Lite 7R | Outdoor reverse PoE switch for last-mile ISP connectivity. |
| CRS112-8P-4S-IN | Compact 8-port PoE managed switch, versatile and cost-effective. |
| CSS610-8P-2S+IN | Cloud smart switch with PoE-out for modern office setups. |
| CRS305-1G-4S+OUT | FiberBox Plus weatherproof 10G switch for outdoor fiber networking. |
| CRS504-4XQ-IN | Compact 100GbE rackmount managed switch for data center speeds. |
| CRS504-4XQ-OUT | Outdoor 100G switch for challenging environments. |
| CRS510-8XS-2XQ-IN | Versatile 100G switch with 2x QSFP28 + 8x SFP28 ports. |
| RB5009UPr+S+IN | Heavy-duty router with PoE-in/out on all ports for small/medium ISPs. |
| hEX S (2025) | Compact router with 2.5G SFP, 5x GigE, PoE out, USB, dual-core CPU. |
| ROSE Data server (RDS) | High-performance all-in-one storage, 100G networking, container platform. |
| RB5009UPr+S+OUT | Outdoor version of heavy-duty PoE router with power redundancy. |
| RB4011iGS+RM | Powerful 10x gigabit router with quad-core 1.4GHz CPU, SFP+ 10Gbps. |
| L009UiGS-RM | More than a router - 4x faster than RB2011, modern ARM CPU with containers. |
| hEX refresh | Classic hEX refresh: same price, twice the performance, modern ARM CPU. |
| CCR2216-1G-12XS-2XQ | Flagship with 100 Gigabit networking and L3 Hardware Offloading. |
| CCR2116-12G-4S+ | 16-core ARM CPU CCR, double performance of previous 36-core, 6x faster BGP. |
| hEX lite | 5x Ethernet, 850MHz CPU, most affordable MPLS router. |
| hEX | 5x Gigabit Ethernet, dual core 880MHz, 256MB RAM. |
| hEX PoE lite | 5x Ethernet with PoE output for four ports. |
| hEX S | 5x Gigabit + SFP, IPsec hardware encryption, Dude server package. |
| hEX PoE | 5x Gigabit with PoE output, SFP, USB. |
| PowerBox Pro | Five gigabit router with 4x PoE-out, SFP cage, outdoor enclosure. |
| CCR2004-1G-2XS-PCIe | Smart PCIe NIC with full router capabilities, 25 Gigabit networks. |
| RB1100AHx4 | Powerful 1U rackmount router with 13x Gigabit Ethernet ports. |
| RB1100AHx4 Dude Edition | Same as RB1100AHx4 plus 60GB M.2 drive for Dude database. |
| CCR2004-16G-2S+ | Crushes all previous CCR models in single-core performance. 16x GigE. |
| CCR2004-16G-2S+PC | Up to 300% faster than CCR1009, passively cooled (silent). |
| CCR2004-1G-12S+2XS | Connectivity router for SFP/SFP+/SFP28 management, 1/10/25 Gbps. |
| RB5009UG+S+IN | Ultimate heavy-duty home lab router with USB 3.0, 2.5G, 10G SFP+. |

---

## Sample Product Full Detail (CRS304-4XG-IN)

### Key Features
1. 4x 10G RJ45 Ports: High-speed 10Gbps copper connectivity, ideal for direct-attach servers, Mac Studios, and high-end PCs.
2. Additional Gigabit Management Port: Includes 1x 10/100/1000 Ethernet port for easy management or secondary device connection.
3. Multiple Powering Options: Features four different power inputs: 2x DC jacks, a terminal plug, and a USB-C port (PD support), ensuring extreme redundancy.
4. Fanless & Silent: A heavy-duty metallic enclosure with passive cooling makes it completely silent.
5. Compact & Rugged: Small enough to fit in your pocket or mount under a desk, yet built with industrial-grade durability.
6. RouterOS v7 (Level 5): Comes with the latest operating system, supporting hardware-offloaded Layer 3 routing, VLANs, and advanced management.

### Specifications
```
Product Code: CRS304-4XG-IN
Suggested Price: $199.00
Architecture: ARM 64-bit
CPU: 98DX2528
CPU Core Count: 2
CPU Thread Count: 2
CPU Nominal Frequency: 1200 MHz
Switch Chip Model: 98DX2528
RouterOS License: Level 5
Operating System: RouterOS v7
RAM Size: 512 MB
Storage Size: 32 MB
Storage Type: FLASH
MTBF: Approximately 200,000 hours at 25C
Tested Ambient Temperature: -40C to 70C

Powering:
Number of DC Inputs: 4 (DC jack, PoE-IN, 2-pin terminal)
DC Jack Input Voltage: 12-57 V
2-Pin Terminal Input Voltage: 12-57 V
PoE In: 802.3af/at
PoE In Input Voltage: 36-57 V
Max Power Consumption: 21 W
Max Power Consumption (Without Attachments): 15 W
Cooling Type: Passive

Ethernet:
10/100/1000 Ethernet Ports: 1
Multi-Gigabit Ethernet Ports (1G / 2.5G / 5G / 10G): 4

Certification & Approvals:
Certification: CE, EAC, ROHS
IP Rating: IP20
```

### Use Cases
1. Professional Video Editing Suites - Connect Mac Studio or PC with 10G to NAS for 8K video.
2. Small Business Core Upgrade - Central high-speed hub for startups.
3. High-End Home Office - Link home server to workstation at 10Gbps.
4. Portable Networking & Testing - USB-C powered portable lab switch.

### Documents
- YouTube: https://www.youtube.com/watch?v=n-6EesOXl14
- PDF: https://cdn.mikrotik.com/web-assets/product_files/CRS304-4XG-IN_240918.pdf

---

## Business Information

- **Company:** NEXLYN Distribution
- **Location:** Deira, Dubai, UAE
- **Phone:** +971 56 922 3145
- **Email:** info@nexlyndistribution.com
- **Founded:** 2026
- **Specialty:** Genuine MikroTik networking solutions (routers, switches, wireless devices)
- **Target Markets:** UAE, Africa (Dubai, Nairobi, Lagos, Cape Town, Johannesburg mentioned)
- **WhatsApp:** Used for quote requests
- **Copyright:** 2026 NEXLYN. All rights reserved.

---

## Design Patterns & UX Notes

- Dark/premium theme with product card hover effects
- Product cards show: image, category badge, title, description (truncated), price, add-to-cart icon
- Category pages use same layout as products page but filtered
- Product detail has image gallery with clickable thumbnails
- Three-tab content area (Description, Specs, Documents) on product pages
- "Request Quote on WhatsApp" as primary CTA on product pages (no cart/checkout)
- Newsletter signup in footer
- Responsive navigation with mobile hamburger menu
- Lazy-loaded images
- Pagination on products page (12 per page, 5 pages for 56 products)
- Search and category filter on products page
- Sort by "Newest First" default
