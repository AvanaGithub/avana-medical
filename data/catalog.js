/*
 * Avana Medical product catalogue
 * ---------------------------------------------------------------
 * This one file drives products.html (the catalogue) and
 * product.html (each product's detail page). No build step needed:
 * edit, save, refresh.
 *
 * ALL CONTENT BELOW IS DUMMY (lorem ipsum) AND MUST BE REPLACED.
 * "Lorem Medical" and "Ipsum Ortho" are placeholder brands.
 *
 * See data/README.md for how to add a product and its images.
 */
window.AVANA_CATALOG = {
  brands: [
    {
      id: "arthrex",
      name: "Arthrex",
      origin: "Naples, Florida, USA",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arthrex placeholder brand description for the catalogue."
    },
    {
      id: "lorem-medical",
      name: "Lorem Medical",
      origin: "Lorem City, Ipsum",
      about: "Dummy brand. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "ipsum-ortho",
      name: "Ipsum Ortho",
      origin: "Dolor, Sit Amet",
      about: "Dummy brand. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    }
  ],
  categories: [
    {
      id: "sports-medicine",
      name: "Sports Medicine",
      summary: "Knee and shoulder arthroscopy, soft-tissue repair and ligament reconstruction."
    },
    {
      id: "distal-extremities",
      name: "Distal Extremities",
      summary: "Implants and instruments for the foot, ankle, hand and wrist."
    },
    {
      id: "capital-equipment",
      name: "Capital Equipment",
      summary: "Imaging, fluid management, resection and ablation systems for the OR."
    },
    {
      id: "orthobiologics",
      name: "Orthobiologics",
      summary: "Biologic solutions that support the body’s own healing response."
    },
    {
      id: "arthroplasty",
      name: "Arthroplasty",
      summary: "Joint replacement systems for the shoulder and knee."
    }
  ],
  products: [
    {
      id: "knotless-suture-anchor",
      name: "Knotless Suture Anchor",
      brand: "arthrex",
      category: "sports-medicine",
      code: "AR-SM-101",
      featured: true,
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna."
      ],
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem PEEK"
        },
        {
          label: "Sizes",
          value: "3.5 mm, 4.5 mm, 5.5 mm"
        },
        {
          label: "Suture",
          value: "Ipsum No. 2"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/knotless-suture-anchor/1.svg",
        "images/products/knotless-suture-anchor/2.svg"
      ]
    },
    {
      id: "adjustable-loop-cortical-button",
      name: "Adjustable Loop Cortical Button",
      brand: "arthrex",
      category: "sports-medicine",
      code: "AR-SM-102",
      featured: true,
      summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      description: [
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna.",
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
      ],
      features: [
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem PEEK"
        },
        {
          label: "Sizes",
          value: "3.5 mm, 4.5 mm, 5.5 mm"
        },
        {
          label: "Suture",
          value: "Ipsum No. 2"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/adjustable-loop-cortical-button/1.svg",
        "images/products/adjustable-loop-cortical-button/2.svg"
      ]
    },
    {
      id: "acl-graft-preparation-system",
      name: "ACL Graft Preparation System",
      brand: "lorem-medical",
      category: "sports-medicine",
      code: "LM-SM-103",
      featured: false,
      summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      description: [
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla."
      ],
      features: [
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem PEEK"
        },
        {
          label: "Sizes",
          value: "3.5 mm, 4.5 mm, 5.5 mm"
        },
        {
          label: "Suture",
          value: "Ipsum No. 2"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/acl-graft-preparation-system/1.svg",
        "images/products/acl-graft-preparation-system/2.svg"
      ]
    },
    {
      id: "all-inside-meniscal-repair-device",
      name: "All-Inside Meniscal Repair Device",
      brand: "ipsum-ortho",
      category: "sports-medicine",
      code: "IO-SM-104",
      featured: false,
      summary: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna."
      ],
      features: [
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem PEEK"
        },
        {
          label: "Sizes",
          value: "3.5 mm, 4.5 mm, 5.5 mm"
        },
        {
          label: "Suture",
          value: "Ipsum No. 2"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/all-inside-meniscal-repair-device/1.svg",
        "images/products/all-inside-meniscal-repair-device/2.svg"
      ]
    },
    {
      id: "bunion-correction-plate-system",
      name: "Bunion Correction Plate System",
      brand: "arthrex",
      category: "distal-extremities",
      code: "AR-DE-105",
      featured: true,
      summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      description: [
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna.",
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
      ],
      features: [
        "Excepteur sint occaecat cupidatat non proident",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem titanium alloy"
        },
        {
          label: "Sizes",
          value: "Small, medium, large"
        },
        {
          label: "Screw diameter",
          value: "2.7 mm – 4.0 mm"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/bunion-correction-plate-system/1.svg",
        "images/products/bunion-correction-plate-system/2.svg"
      ]
    },
    {
      id: "ankle-syndesmosis-implant",
      name: "Ankle Syndesmosis Implant",
      brand: "arthrex",
      category: "distal-extremities",
      code: "AR-DE-106",
      featured: false,
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      description: [
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla."
      ],
      features: [
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem titanium alloy"
        },
        {
          label: "Sizes",
          value: "Small, medium, large"
        },
        {
          label: "Screw diameter",
          value: "2.7 mm – 4.0 mm"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/ankle-syndesmosis-implant/1.svg",
        "images/products/ankle-syndesmosis-implant/2.svg"
      ]
    },
    {
      id: "headless-compression-screw",
      name: "Headless Compression Screw",
      brand: "lorem-medical",
      category: "distal-extremities",
      code: "LM-DE-107",
      featured: false,
      summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna."
      ],
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem titanium alloy"
        },
        {
          label: "Sizes",
          value: "Small, medium, large"
        },
        {
          label: "Screw diameter",
          value: "2.7 mm – 4.0 mm"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/headless-compression-screw/1.svg",
        "images/products/headless-compression-screw/2.svg"
      ]
    },
    {
      id: "distal-radius-volar-plate",
      name: "Distal Radius Volar Plate",
      brand: "ipsum-ortho",
      category: "distal-extremities",
      code: "IO-DE-108",
      featured: false,
      summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      description: [
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna.",
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
      ],
      features: [
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem titanium alloy"
        },
        {
          label: "Sizes",
          value: "Small, medium, large"
        },
        {
          label: "Screw diameter",
          value: "2.7 mm – 4.0 mm"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/distal-radius-volar-plate/1.svg",
        "images/products/distal-radius-volar-plate/2.svg"
      ]
    },
    {
      id: "4k-arthroscopy-imaging-tower",
      name: "4K Arthroscopy Imaging Tower",
      brand: "arthrex",
      category: "capital-equipment",
      code: "AR-CE-109",
      featured: true,
      summary: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      description: [
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla."
      ],
      features: [
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur"
      ],
      specs: [
        {
          label: "Power",
          value: "230 V, 50 Hz"
        },
        {
          label: "Display",
          value: "Lorem 4K UHD"
        },
        {
          label: "Dimensions",
          value: "00 × 00 × 00 cm"
        },
        {
          label: "Warranty",
          value: "Ipsum 2 years"
        }
      ],
      images: [
        "images/products/4k-arthroscopy-imaging-tower/1.svg",
        "images/products/4k-arthroscopy-imaging-tower/2.svg"
      ]
    },
    {
      id: "dual-wave-arthroscopy-pump",
      name: "Dual-Wave Arthroscopy Pump",
      brand: "arthrex",
      category: "capital-equipment",
      code: "AR-CE-110",
      featured: false,
      summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna."
      ],
      features: [
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ],
      specs: [
        {
          label: "Power",
          value: "230 V, 50 Hz"
        },
        {
          label: "Display",
          value: "Lorem 4K UHD"
        },
        {
          label: "Dimensions",
          value: "00 × 00 × 00 cm"
        },
        {
          label: "Warranty",
          value: "Ipsum 2 years"
        }
      ],
      images: [
        "images/products/dual-wave-arthroscopy-pump/1.svg",
        "images/products/dual-wave-arthroscopy-pump/2.svg"
      ]
    },
    {
      id: "power-shaver-console",
      name: "Power Shaver Console",
      brand: "lorem-medical",
      category: "capital-equipment",
      code: "LM-CE-111",
      featured: false,
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      description: [
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna.",
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
      ],
      features: [
        "Excepteur sint occaecat cupidatat non proident",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore"
      ],
      specs: [
        {
          label: "Power",
          value: "230 V, 50 Hz"
        },
        {
          label: "Display",
          value: "Lorem 4K UHD"
        },
        {
          label: "Dimensions",
          value: "00 × 00 × 00 cm"
        },
        {
          label: "Warranty",
          value: "Ipsum 2 years"
        }
      ],
      images: [
        "images/products/power-shaver-console/1.svg",
        "images/products/power-shaver-console/2.svg"
      ]
    },
    {
      id: "rf-ablation-system",
      name: "RF Ablation System",
      brand: "ipsum-ortho",
      category: "capital-equipment",
      code: "IO-CE-112",
      featured: false,
      summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      description: [
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla."
      ],
      features: [
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation"
      ],
      specs: [
        {
          label: "Power",
          value: "230 V, 50 Hz"
        },
        {
          label: "Display",
          value: "Lorem 4K UHD"
        },
        {
          label: "Dimensions",
          value: "00 × 00 × 00 cm"
        },
        {
          label: "Warranty",
          value: "Ipsum 2 years"
        }
      ],
      images: [
        "images/products/rf-ablation-system/1.svg",
        "images/products/rf-ablation-system/2.svg"
      ]
    },
    {
      id: "autologous-conditioned-plasma-kit",
      name: "Autologous Conditioned Plasma Kit",
      brand: "arthrex",
      category: "orthobiologics",
      code: "AR-OB-113",
      featured: true,
      summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna."
      ],
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate"
      ],
      specs: [
        {
          label: "Volume",
          value: "00 ml"
        },
        {
          label: "Processing time",
          value: "00 minutes"
        },
        {
          label: "Contents",
          value: "Lorem ipsum kit"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/autologous-conditioned-plasma-kit/1.svg",
        "images/products/autologous-conditioned-plasma-kit/2.svg"
      ]
    },
    {
      id: "cartilage-restoration-kit",
      name: "Cartilage Restoration Kit",
      brand: "arthrex",
      category: "orthobiologics",
      code: "AR-OB-114",
      featured: false,
      summary: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      description: [
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna.",
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
      ],
      features: [
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident"
      ],
      specs: [
        {
          label: "Volume",
          value: "00 ml"
        },
        {
          label: "Processing time",
          value: "00 minutes"
        },
        {
          label: "Contents",
          value: "Lorem ipsum kit"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/cartilage-restoration-kit/1.svg",
        "images/products/cartilage-restoration-kit/2.svg"
      ]
    },
    {
      id: "bone-graft-harvester",
      name: "Bone Graft Harvester",
      brand: "lorem-medical",
      category: "orthobiologics",
      code: "LM-OB-115",
      featured: false,
      summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      description: [
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla."
      ],
      features: [
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur"
      ],
      specs: [
        {
          label: "Volume",
          value: "00 ml"
        },
        {
          label: "Processing time",
          value: "00 minutes"
        },
        {
          label: "Contents",
          value: "Lorem ipsum kit"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/bone-graft-harvester/1.svg",
        "images/products/bone-graft-harvester/2.svg"
      ]
    },
    {
      id: "bone-void-filler-paste",
      name: "Bone Void Filler Paste",
      brand: "ipsum-ortho",
      category: "orthobiologics",
      code: "IO-OB-116",
      featured: false,
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna."
      ],
      features: [
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ],
      specs: [
        {
          label: "Volume",
          value: "00 ml"
        },
        {
          label: "Processing time",
          value: "00 minutes"
        },
        {
          label: "Contents",
          value: "Lorem ipsum kit"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/bone-void-filler-paste/1.svg",
        "images/products/bone-void-filler-paste/2.svg"
      ]
    },
    {
      id: "reverse-shoulder-system",
      name: "Reverse Shoulder System",
      brand: "arthrex",
      category: "arthroplasty",
      code: "AR-AP-117",
      featured: true,
      summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      description: [
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna.",
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
      ],
      features: [
        "Excepteur sint occaecat cupidatat non proident",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem cobalt chrome"
        },
        {
          label: "Sizes",
          value: "0–0 (lorem)"
        },
        {
          label: "Fixation",
          value: "Ipsum press-fit"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/reverse-shoulder-system/1.svg",
        "images/products/reverse-shoulder-system/2.svg"
      ]
    },
    {
      id: "stemless-shoulder-system",
      name: "Stemless Shoulder System",
      brand: "arthrex",
      category: "arthroplasty",
      code: "AR-AP-118",
      featured: false,
      summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      description: [
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla."
      ],
      features: [
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem cobalt chrome"
        },
        {
          label: "Sizes",
          value: "0–0 (lorem)"
        },
        {
          label: "Fixation",
          value: "Ipsum press-fit"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/stemless-shoulder-system/1.svg",
        "images/products/stemless-shoulder-system/2.svg"
      ]
    },
    {
      id: "unicondylar-knee-system",
      name: "Unicondylar Knee System",
      brand: "lorem-medical",
      category: "arthroplasty",
      code: "LM-AP-119",
      featured: false,
      summary: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna."
      ],
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem cobalt chrome"
        },
        {
          label: "Sizes",
          value: "0–0 (lorem)"
        },
        {
          label: "Fixation",
          value: "Ipsum press-fit"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/unicondylar-knee-system/1.svg",
        "images/products/unicondylar-knee-system/2.svg"
      ]
    },
    {
      id: "press-fit-glenoid-component",
      name: "Press-Fit Glenoid Component",
      brand: "ipsum-ortho",
      category: "arthroplasty",
      code: "IO-AP-120",
      featured: false,
      summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      description: [
        "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna.",
        "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
      ],
      features: [
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam, quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident"
      ],
      specs: [
        {
          label: "Material",
          value: "Lorem cobalt chrome"
        },
        {
          label: "Sizes",
          value: "0–0 (lorem)"
        },
        {
          label: "Fixation",
          value: "Ipsum press-fit"
        },
        {
          label: "Sterility",
          value: "Sterile, single use"
        }
      ],
      images: [
        "images/products/press-fit-glenoid-component/1.svg",
        "images/products/press-fit-glenoid-component/2.svg"
      ]
    }
  ]
};
