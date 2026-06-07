export const projects = [
  {
    title: "IV Infusion Monitor",
    description: "A low-cost IV drip rate monitor for hospitals in resource-limited settings, built with an STM32 microcontroller.",
    fullDescription:
      "A low-cost infusion monitoring system designed for hospitals in resource-limited settings. Built using an STM32 MCU with TouchGFX for the display interface, the device monitors drip rates in real time and alerts nurses to flow irregularities. Developed as part of Team Flow (Michigan Health Engineered for All Lives), with user research conducted across 20+ healthcare staff in Kumasi, Ghana. Achieved 80% cost savings over existing commercial solutions. Secured $35K+ in grant funding through technical and equity-focused proposals.",
    techStack: ["STM32 HAL", "TouchGFX", "C", "ST-LINK-V3"],
    github: "https://github.com/teamflowmichigan/device-source-code",
    hasGithub: true,
    detailsPage: "/projects/medical-device",
  },
  {
    title: "Climate-Adaptive Dengue Modeling with Universal Differential Equations",
    description: "Research paper combining neural networks with mechanistic ODEs to model climate-driven dengue transmission in Brazil.",
    fullDescription:
      "Dengue fever is a mosquito-borne viral disease whose transmission dynamics are strongly shaped by climatic drivers through their effects on mosquito survival, development, and viral incubation. With nearly half the global population at risk and annual infections reaching 400 million, building climate-aware, interpretable models is critical for public health preparedness. This study investigates the application of Universal Differential Equations (UDEs) to evaluate the impact of climate variability on dengue transmission in Foz do Iguaçu, Brazil. Building upon a temperature-dependent compartmental vector–host framework and a trap-based mosquito sub-model, we compare traditional parameter-fitting pipelines — using Levenberg–Marquardt optimization and Latin Hypercube Sampling — with UDE-based augmentations that learn flexible functional dependencies within a mechanistic ODE backbone. We further quantify parameter influence using variance-based global sensitivity analysis. Results indicate that population susceptibility is the dominant driver of epidemic magnitude, while the UDE successfully corrects for 2–3 month phase mismatches in peak timing found in traditional mechanistic models. We identify a narrow permissive thermal window (23–34°C), suggesting that moderate warming can significantly alter transmission intensity.",
    techStack: ["Julia", "DifferentialEquations.jl", "Lux.jl", "Python", "SciML"],
    github: "https://github.com/sophieyzhou/dengue-ude", // ← replace with your actual repo URL
    hasGithub: true,
    detailsPage: "/projects/dengue-ude",
  },
  {
    title: "BlueBil — Co-Founder & CFO",
    description: "Co-founded a medtech startup building a non-contact optical device for neonatal jaundice screening that eliminates skin-tone bias.",
    fullDescription:
      "Neonatal jaundice affects approximately 60% of full-term and 80% of preterm newborns globally. Untreated, severe hyperbilirubinemia can cause permanent neurological damage or death. Current non-invasive diagnostics — transcutaneous bilirubinometers — suffer from well-documented skin-pigmentation bias and reduced accuracy during phototherapy. We developed BlueBil, a handheld, non-contact optical device that quantifies bilirubin concentration by measuring blue light absorption in the sclera of the eye, eliminating skin-tone variability that limits existing methods. The device integrates a 470nm blue LED (primary bilirubin channel), a 530nm green LED (hemoglobin correction reference), and an 850nm infrared LED (pathlength-based distance verification), matched phototransistors, and analog signal conditioning circuitry. An ESP32 microcontroller runs a six-stage state-machine workflow and displays results in mg/dL on an integrated OLED screen. Bench-top validation using five silicone scleral phantom models (0–22.5 mg/dL) demonstrated strong measurement linearity (R²=0.976) with standard deviations below 1 mg/dL across the clinically relevant range. As CFO, led financial strategy, grant modeling, and fundraising. Future work targets clinical pilot studies with domestic and international NICU programs.",
    techStack: ["ESP32", "C++", "Embedded Systems", "Optical Sensing", "Hardware Design"],
    github: "",
    hasGithub: false,
    externalLink: "https://www.bluebil.com",
    detailsPage: "/projects/bluebil",
  },
  {
    title: "Transcription Factor Binding Sites Model",
    description: "Bayesian model for predicting transcription factor binding site occupancy using motif and ChIP-seq data.",
    fullDescription:
      "Bayesian modeling pipeline for predicting transcription factor binding site rates using motif and ChIP-seq data. Built a probabilistic model in Stan that integrates DNA sequence motif scores with experimental ChIP-seq signal to estimate binding occupancy across genomic loci. Focused on the CTCF transcription factor, a key regulator of chromatin architecture. The model accounts for sequencing depth variability and uncertainty in motif scoring, producing calibrated posterior estimates of binding probability.",
    techStack: ["Python", "Stan", "Jupyter"],
    github: "https://github.com/sophieyzhou/ctcf-tf-binding",
    hasGithub: true,
    detailsPage: "/projects/genetics-ml",
  },
  {
    title: "Hydrogen Grid Optimizer",
    description: "Mixed-integer optimizer for cost-minimizing energy dispatch on a hydrogen storage integrated power grid.",
    fullDescription:
      "Built a mixed-integer linear program in Pyomo that makes cost-minimizing energy generation and dispatch decisions on a grid with integrated hydrogen storage. The model balances renewable generation variability against load demand, deciding in each time period whether to produce hydrogen via electrolysis, draw from storage, or dispatch from conventional generation. Includes realistic grid constraints such as ramp rates, storage capacity limits, and minimum generation thresholds. Visualized dispatch schedules and cost breakdowns over multi-day horizons using Matplotlib.",
    techStack: ["Python", "Conda", "Pyomo", "Matplotlib"],
    github: "https://github.com/sophieyzhou/grid-load-balancing",
    hasGithub: true,
    detailsPage: "/projects/energy-optimizer",
  },
  {
    title: "Astronomical Orbital Model",
    description: "ODE-based simulation of gravitational interactions in multi-body astronomical systems.",
    fullDescription:
      "Simulates the behavior of astronomical objects in a multi-body system by numerically integrating the gravitational equations of motion using SciPy's ODE solvers. Models pairwise gravitational forces across N bodies, capturing orbital decay, resonances, and chaotic trajectories over long time horizons. Built for a computational astrophysics course; extended to explore three-body problem instability and compare Euler vs. RK45 integration accuracy.",
    techStack: ["SciPy", "Matplotlib", "Python"],
    github: "https://github.com/sophieyzhou/astronomical-odes",
    hasGithub: true,
    detailsPage: "/projects/astronomical-odes",
  },
  {
    title: "Web Development & Design",
    description: "End-to-end web design and development for two engineering projects — a biomedical project team and a medical device startup.",
    fullDescription:
      "Designed and built production websites for two distinct engineering contexts, making deliberate decisions about audience, information architecture, and technical stack in each.\n\nFor Team Flow (Michigan Health Engineered for All Lives), developed the public-facing site in React and TypeScript covering the team's mission, device documentation, member profiles, and grant history. Prioritized accessibility and clarity for a mixed audience of clinicians, grant reviewers, and engineers.\n\nFor BlueBil, led end-to-end web strategy and development for an early-stage medical device startup. Made deliberate decisions about IP exposure and audience segmentation across four targeted subpages — balancing technical credibility for clinical and investor audiences against the legal risk of publishing pre-patent implementation details. Built on a zero-dependency vanilla stack with a modular CSS design token system, deployed on GitHub Pages. Interactive features include an Intersection Observer scroll animation system, a device diagram with component-level highlight overlays, and an animated OLED display overlay that simulates the real firmware measurement sequence.",
    techStack: ["JavaScript", "TypeScript", "React", "CSS", "HTML", "GitHub Pages"],
    github: "https://github.com/sophieyzhou/teamflow.github.io",
    hasGithub: true,
    externalLink: "https://www.bluebil.com",
    detailsPage: "/projects/web-design",
  },
  {
    title: "Lavender Farm Financials",
    description: "Built cost allocation models and financial reporting infrastructure for Michigan's largest lavender farm.",
    fullDescription:
      "Developed cost allocation models and financial reporting infrastructure for Michigan's largest lavender farm as part of a multidisciplinary design project. Built Excel models to track variable and fixed costs across product lines (dried flowers, essential oils, agritourism), and created Tableau dashboards for seasonal revenue visualization. Used Python to automate data cleaning from POS exports and generate standardized financial summaries for farm management.",
    techStack: ["Excel", "Tableau", "Python"],
    github: "",
    hasGithub: false,
    detailsPage: "/projects/lavender-farm",
  },
];
