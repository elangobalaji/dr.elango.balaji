import {
  ProfileData,
  Project,
  SkillItem,
  ExperienceItem,
  EducationItem,
  PublicationItem,
  GrantItem,
  PresentationItem,
  ArticleItem,
  NewsItem,
} from '../types';

export const initialProfileData: ProfileData = {
  name: 'Elango Balaji T',
  title: 'Battery Research Scientist',
  tagline: 'Operando Diagnostics · Li-S Battery Interfaces · Synchrotron Tomography · Materials Design',
  bio: 'Doctoral Researcher at the SEED Center, Taiwan Tech. Specializing in diagnosing degradation pathways and catalytic interactions within Li2S composite cathodes via multimodal in-situ/operando synchrotron imaging (TXM, XAS, HR-XRD) and spectroscopy. Developing machine learning frameworks for battery safety prediction and crafting high-impact 3D scientific visualizations.',
  location: 'Taipei, Taiwan',
  timezone: 'Asia/Taipei (UTC+8)',
  status: 'Ph.D. Candidate (Expected July 2026) · Open to Battery R&D & Research Scientist Opportunities',
  phone: '(+886)-902475686',
  socials: {
    github: 'https://github.com/elangobalaji',
    linkedin: 'https://linkedin.com/in/elangobalaji',
    twitter: 'https://twitter.com/elangobalaji',
    email: 'elangobalaji@gmail.com',
    googleScholar: 'https://scholar.google.com',
    phone: '(+886)-902475686',
  },
  stats: [
    { label: 'Publications', value: '20', description: 'In top-tier international journals' },
    { label: 'Citations', value: '950+', description: 'Across battery & materials literature' },
    { label: 'Grant Contributions', value: 'NT$ 150M', description: 'NSTC & TW-DE bilateral funding' },
    { label: 'Beamtime Campaigns', value: 'NSRRC', description: 'TLS-16A & TPS-32A synchrotron' },
  ],
  aboutParagraphs: [
    'My core research contributions center on diagnosing degradation mechanisms in Lithium-Sulfur (Li-S) batteries and unraveling catalytic material interactions within the Li2S composite cathode. To achieve this, I pioneer multimodal in-situ and operando diagnostics—adopting synchrotron-based Transmission X-ray Microscopy (TXM), High-Resolution X-ray Diffraction (HR-XRD), X-ray Absorption Spectroscopy (XAS), Confocal Optical Microscopy/Raman, and isothermal calorimetry.',
    'Notable outcomes include publications in flagship journals such as ACS Energy Letters, Nature Reviews, and Advanced Functional Materials, alongside a manuscript under revision at the Journal of the American Chemical Society (JACS). Furthermore, I contributed strategically to the acquisition of over NT$ 150M (€4M) in research grants through proposal architecture and scientific illustration.',
    'Alongside electrochemical characterization, I develop machine learning frameworks for predictive battery safety and failure forecasting. I also possess advanced scientific illustration expertise in Blender (3D modeling, geometry nodes, dynamic mechanism animation) and Python to translate complex multi-physics data into intuitive visuals for leadership and interdisciplinary teams.',
  ],
  principles: [
    {
      title: 'Multimodal Operando Diagnostics',
      desc: 'Probing dynamic structural, chemical, and catalytic phenomena in real-time under cell cycling rather than relying on misleading ex-situ post-mortem states.',
    },
    {
      title: 'Rational Interface & Cathode Engineering',
      desc: 'Mapping structure-property relationships to decouple electric field effects, minimize charge-transfer resistance, and suppress shuttle degradation.',
    },
    {
      title: 'Machine Learning for Battery Safety',
      desc: 'Formulating data-driven algorithms on operando and electrochemical signatures (EIS, GITT, calorimetry) to predict thermal runaway and capacity decay.',
    },
    {
      title: 'Intuitive Scientific Visualization',
      desc: 'Translating sub-nanometer electrochemical processes into rigorous, publication-grade 3D renders in Blender for journal covers and grant proposals.',
    },
  ],
};

export const defaultProjects: Project[] = [
  {
    id: 'li2s-operando-txm',
    title: 'Operando TXM & Li2S Cathode Evolution',
    tagline: 'First-of-its-kind real-time nanoscale visualization of Li2S phase transitions',
    description:
      'Mapped the real-time structural transformation and activation mechanism of Li2S composite cathodes during cell cycling using synchrotron Transmission X-ray Microscopy.',
    longDescription:
      'Diagnosed the critical root cause of early-cycle capacity decay in high-energy Li-S batteries. By designing custom operando electrochemical cells and performing real-time TXM at the NSRRC synchrotron, we visualized dissolution, precipitation, and morphology dynamics of Li2S particles under active charging and discharging protocols. Modified electrolyte formulations were validated to suppress shuttle effects and minimize efficiency losses.',
    category: 'operando',
    tags: ['Synchrotron-TXM', 'Li2S Cathodes', 'Operando Diagnostics', 'NSRRC TPS-32A', 'Phase Transitions'],
    liveUrl: 'https://pubs.acs.org',
    githubUrl: 'https://github.com/elangobalaji',
    featured: true,
    metrics: 'First direct real-time visualization of Li2S cathode evolution during cell cycling',
    highlights: [
      'Visualized Li2S cathode nanoscale phase evolution for the first time during active cell cycling',
      'Decoupled the influence of applied electric field on the catalyst material within the composite',
      'Developed custom operando cell architecture compatible with synchrotron X-ray transmission',
      'Published in ACS Energy Letters (2025)',
    ],
  },
  {
    id: 'catalyst-dynamics-jacs',
    title: 'Electrocatalytic Dynamics in Li-S Batteries',
    tagline: 'Operando spectroscopy decoupling electric field effects & catalytic kinetics',
    description:
      'Investigated catalytic material interactions and charge transfer dynamics within Li2S composite cathodes via operando XAS and Raman spectroscopy.',
    longDescription:
      'Probed the catalytic mechanism that facilitates lower activation barriers for Li2S dissolution. Using operando X-ray Absorption Spectroscopy (XAS) at the TLS-16A beamline combined with in-situ Raman spectroscopy, we elucidated how applied potential modulates catalyst valence states and drives sulfur redox kinetics. Manuscript under revision at the Journal of the American Chemical Society (JACS).',
    category: 'operando',
    tags: ['Operando XAS', 'In-Situ Raman', 'Catalyst Dynamics', 'JACS', 'TLS-16A'],
    liveUrl: 'https://jacs.org',
    githubUrl: 'https://github.com/elangobalaji',
    featured: true,
    metrics: 'Unveiled dynamic valence state transitions of sulfur redox catalysts under electric fields',
    highlights: [
      'Operando XAS at NSRRC synchrotron beamlines TLS-16A and TPS-32A',
      'Decoupled applied electric field influences on catalyst-polysulfide intermediate bonding',
      'Engineered optimized composite formulations to reduce Li2S activation overpotentials',
      'Under revision at Journal of the American Chemical Society (JACS)',
    ],
  },
  {
    id: 'ml-battery-safety',
    title: 'Machine Learning for Battery Safety & Failure Prediction',
    tagline: 'Predictive neural architectures trained on electrochemical & calorimetric signatures',
    description:
      'Developing data-driven machine learning models to forecast battery degradation, internal resistance shifts, and thermal runaway hazards before critical failure.',
    longDescription:
      'Engineered machine learning pipelines combining electrochemical impedance spectroscopy (EIS), galvanostatic titration (GITT), and isothermal calorimetry data. The framework extracts early-cycle diagnostic indicators to predict state-of-health (SOH), capacity fade trajectories, and safety risk profiles without requiring destructive testing.',
    category: 'ml',
    tags: ['Machine Learning', 'Python', 'Battery Safety', 'EIS Analysis', 'Calorimetry', 'PyTorch'],
    liveUrl: 'https://github.com/elangobalaji',
    githubUrl: 'https://github.com/elangobalaji/battery-safety-ml',
    featured: true,
    metrics: 'Over 94% accuracy in predicting thermal runaway onset and early cell degradation',
    highlights: [
      'Self-supervised feature extraction from complex multi-frequency EIS spectra',
      'Thermal runaway early-warning system powered by isothermal calorimetry correlations',
      'Automated Python pipelines for processing raw multi-channel battery cycler datasets',
      'Mastered ML frameworks independently without formal institutional coursework',
    ],
  },
  {
    id: 'anode-free-lithium',
    title: 'Failure Mechanisms in Anode-Free Batteries',
    tagline: 'Comprehensive review and interface engineering for scalable anode-free systems',
    description:
      'Pioneered design rules and analyzed failure pathways for anode-free lithium-metal and lithium-sulfur batteries, published in Nature Reviews Clean Technology.',
    longDescription:
      'Authored in-depth insights into interfacial instability, dead lithium accumulation, and electrolyte depletion in zero-excess lithium configurations. Co-engineered anion-trapping composite gel polymer electrolytes (Chem. Eng. J., 2025) and asymmetric polymer architectures (Adv. Funct. Mater., 2025) that enable stable cycling in anode-free cells.',
    category: 'materials',
    tags: ['Anode-Free', 'Lithium Metal', 'Nat. Rev. Clean Tech.', 'Gel Polymer', 'Chem. Eng. J.'],
    liveUrl: 'https://www.nature.com',
    githubUrl: 'https://github.com/elangobalaji',
    featured: true,
    metrics: 'Authored landmark paper in Nature Reviews Clean Technology (2025)',
    highlights: [
      'Comprehensive taxonomy of dead lithium formation and solid-electrolyte interphase (SEI) failure',
      'Formulated anion-trapping composite gel electrolytes for stable lithium deposition',
      'Demonstrated high Coulombic efficiency in zero-excess Li pouch cells',
      'Collaborated internationally with world-leading battery institutes',
    ],
  },
  {
    id: 'sci-3d-illustration',
    title: 'Scientific 3D Illustration & Mechanism Visualization',
    tagline: 'Blender 3D, Geometry Nodes, and publication-ready cover artwork',
    description:
      'Translating deep electrochemical processes into publication-grade 3D visuals, journal covers, and multi-million dollar grant proposal schematics.',
    longDescription:
      'Mastered Blender 3D modeling, procedural geometry nodes, and scientific animation from scratch to render atomic interfaces, synchrotron beamline setups, and ion transport mechanisms. Contributed critical visual assets that helped secure NT$ 150M (NSTC) and NT$ 27M (LiBEST³ TW-DE) in collaborative research funding.',
    category: 'visualization',
    tags: ['Blender 3D', 'Geometry Nodes', 'Scientific Illustration', 'Journal Covers', 'Grant Visuals'],
    liveUrl: 'https://github.com/elangobalaji',
    githubUrl: 'https://github.com/elangobalaji',
    featured: false,
    metrics: 'Key visual architect for NT$ 150M NSTC and NT$ 27M LiBEST³ research grants',
    highlights: [
      'Procedural crystal lattice and nanoscale composite modeling using Blender Geometry Nodes',
      'Produced journal cover artwork candidates for top-tier energy publications',
      'Designed technical architectural schematics for international grant proposals',
      'Translates complex multi-physics experimental concepts into intuitive stakeholder visuals',
    ],
  },
  {
    id: 'circular-economy-ewaste',
    title: 'Circular Economy: E-Waste & Pharmaceutical Waste Upcycling',
    tagline: 'Recovery of functional electrode materials from discarded electronics and waste',
    description:
      'Extracted CuO from discarded SIM cards and Al2O3 from pharmaceutical waste as functional electrode materials for supercapacitors and Na-ion capacitors.',
    longDescription:
      'Pioneered closed-loop sustainable materials synthesis during M.Sc. and research tenure. Recovered high-purity CuO from discarded SIM cards for supercapacitor electrodes, and upcycled Al2O3 from pharmaceutical waste for Na-ion capacitors. Authored a comprehensive supercapacitor literature review in ChemElectroChem (Wiley) that earned "Highly Cited Paper" distinction with over 215 citations.',
    category: 'materials',
    tags: ['E-Waste Recovery', 'Supercapacitors', 'Na-Ion Capacitors', 'ChemElectroChem', 'Circular Economy'],
    liveUrl: 'https://onlinelibrary.wiley.com',
    githubUrl: 'https://github.com/elangobalaji',
    featured: false,
    metrics: '215+ citations on supercapacitor electrode review; Government of India grant funded',
    highlights: [
      'Recovered high-purity CuO nanomaterials from discarded electronic SIM cards',
      'Synthesized bifunctional oxygen redox electrocatalyst via thermal treatment of LiCoO2',
      'Awarded "Highly Cited Paper" badge by ChemElectroChem (Wiley)',
      'Funded by Government of India Student Project Scheme',
    ],
  },
];

export const defaultPublications: PublicationItem[] = [
  {
    id: 'pub-21',
    title: 'Fluorine-Free Electrolytes in Batteries: Principles, Strategies, and Advances',
    authors: 'Vinay, Boligarla, Yosef Nikodimos, Tripti Agnihotri, et al.',
    journal: 'Energy & Environmental Science',
    year: '2025',
    status: 'Published',
    doi: 'https://doi.org/10.1039/d4ee04820b',
    link: 'https://doi.org/10.1039/d4ee04820b',
    tags: ['Fluorine-Free Electrolytes', 'Batteries'],
  },
  {
    id: 'pub-20',
    title: 'Probing Li2S Activation Mechanism in Lithium–Sulfur Batteries via Multimodal Operando Techniques',
    authors: 'Tamilarasan, Elango Balaji, Yu-Chun Huang, Tripti Agnihotri, et al.',
    journal: 'ACS Energy Letters',
    year: '2025',
    status: 'Published',
    highlight: 'First real-time operando TXM visualization of Li2S activation during cell cycling',
    doi: 'https://doi.org/10.1021/acsenergylett.5c03358',
    link: 'https://doi.org/10.1021/acsenergylett.5c03358',
    tags: ['Li-S Batteries', 'Operando TXM', 'Synchrotron', 'ACS Energy Letters'],
  },
  {
    id: 'pub-19',
    title: 'Functional Interface Modifier with Visualizations of Dendrite Growth and Heat Evolution in Lithium Metal Batteries',
    authors: 'Taklu, Bereket Woldegbreal, Tsung-I. Yeh, Ashok Vallal Saravanan, et al.',
    journal: 'ACS Applied Materials & Interfaces',
    year: '2026',
    status: 'Published',
    doi: 'https://doi.org/10.1021/acsami.5c25165',
    link: 'https://doi.org/10.1021/acsami.5c25165',
    tags: ['Lithium Metal Batteries', 'Dendrite Growth', 'Heat Evolution'],
  },
  {
    id: 'pub-18',
    title: 'Failure Mechanisms and Scalability of Anode-Free Lithium-Metal and Lithium–Sulfur Batteries',
    authors: 'Shitaw, Kassie Nigus, Yosef Nikodimos, Teklay Mezgebe Hagos, et al.',
    journal: 'Nature Reviews Clean Technology',
    year: '2026',
    status: 'Published',
    doi: 'https://doi.org/10.1038/s44359-025-00120-7',
    link: 'https://doi.org/10.1038/s44359-025-00120-7',
    tags: ['Anode-Free', 'Lithium Metal', 'Lithium-Sulfur'],
  },
  {
    id: 'pub-17',
    title: 'Unraveling Catalyst Migration in Li-S Batteries: Designing Stable Ni Single-Atom Catalysts',
    authors: 'Saravanan, Ashok Vallal, Keseven Lakshmanan, Bereket Woldegbreal Taklu, et al.',
    journal: 'ACS Applied Energy Materials',
    year: '2026',
    status: 'Published',
    doi: 'https://doi.org/10.1021/acsaem.6c00646',
    link: 'https://doi.org/10.1021/acsaem.6c00646',
    tags: ['Li-S Batteries', 'Single-Atom Catalysts'],
  },
  {
    id: 'pub-16',
    title: 'Recovery of Copper Oxide Nanoparticles from Waste SIM Cards for Supercapacitor Electrode Material',
    authors: 'Rajkumar, S., E. Elanthamilan, T. Elango Balaji, A. Sathiyan, N. Evangeline Jafneel, and J. Princy Merlin.',
    journal: 'Journal of Alloys and Compounds',
    year: '2020',
    status: 'Published',
    doi: 'https://doi.org/10.3390/chemosensors10060223',
    link: 'https://doi.org/10.3390/chemosensors10060223',
    tags: ['E-Waste', 'Copper Oxide Nanoparticles', 'Supercapacitor'],
  },
  {
    id: 'pub-15',
    title: 'Thermal Stability and Safety of Rechargeable Batteries: From Heat Generation and Gas Evolution to Diagnostics and Mitigation',
    authors: 'Nikodimos, Yosef, Zabish Bilew Muche, Vinay Boligarla, et al.',
    journal: 'Nano Energy',
    year: '2026',
    status: 'Published',
    tags: ['Thermal Stability', 'Rechargeable Batteries', 'Safety'],
  },
  {
    id: 'pub-14',
    title: 'Facile Synthesis of Crystalline Molybdenum Carbide (Mo2C) Nanoparticles Coupled with a N-Doped Porous Carbon Sheet: A Synergistic Effect on the Electrocatalytic Hydrogen Evolution Reaction',
    authors: 'Mondal, Aniruddha, Himadri Tanaya Das, Elango Balaji T, et al.',
    journal: 'Energy & Fuels',
    year: '2023',
    status: 'Published',
    doi: 'https://doi.org/10.1021/acs.energyfuels.3c03345',
    link: 'https://doi.org/10.1021/acs.energyfuels.3c03345',
    tags: ['Electrocatalysis', 'Mo2C', 'HER'],
  },
  {
    id: 'pub-13',
    title: 'Recent Trends in Carbon Nanotube Electrodes for Flexible Supercapacitors: A Review of Smart Energy Storage Device Assembly and Performance',
    authors: 'Himadri Tanaya Das, Swapnamoy Dutta, Tamilarasan Elango Balaji, Nigamananda Das, Payaswini Das, Neelu Dheer, Rajni Kanojia, Preety Ahuja, Sanjeev Kumar Ujjain.',
    journal: 'Chemosensors',
    year: '2022',
    status: 'Published',
    tags: ['Carbon Nanotube Electrodes', 'Flexible Supercapacitors'],
  },
  {
    id: 'pub-12',
    title: 'A Signal-Processing Framework for Preemptive Detection of Soft Shorts in Lithium-Metal Batteries',
    authors: 'Hasan, Rehbar, Po-Yi Wu, Tripti Agnihotri, et al.',
    journal: 'Cell Reports Physical Science',
    year: '2025',
    status: 'Published',
    doi: 'https://doi.org/10.1016/j.xcrp.2025.102973',
    link: 'https://doi.org/10.1016/j.xcrp.2025.102973',
    tags: ['Lithium-Metal Batteries', 'Soft Shorts', 'Signal-Processing'],
  },
  {
    id: 'pub-11',
    title: 'Developing Potential Aqueous Na-Ion Capacitors of Al2O3 with Carbon Composites as Electrode Material: Recycling Medical Waste to Sustainable Energy',
    authors: 'Elango Balaji, T., Himadri Tanaya Das, T. Maiyalagan, and Nigamananda Das.',
    journal: 'Journal of Alloys and Compounds',
    year: '2023',
    status: 'Published',
    doi: 'https://doi.org/10.1016/j.jallcom.2022.167501',
    link: 'https://doi.org/10.1016/j.jallcom.2022.167501',
    tags: ['Na-Ion Capacitors', 'Medical Waste Recycling'],
  },
  {
    id: 'pub-10',
    title: 'Sonochemically Recovered Aluminum Oxide Nanoparticles from Domestic Aluminum Wastes as a Highly Stable Electrocatalyst for Proton-Pump Inhibitor (Omeprazole) Detection',
    authors: 'Elaiyappillai, Elanthamilan, Muthumariappan Akilarasan, Shen-Ming Chen, Sakthivel Kogularasu, Princy Merlin Johnson, and Elango Balaji Tamilarasan.',
    journal: 'Journal of The Electrochemical Society',
    year: '2020',
    status: 'Published',
    doi: 'https://doi.org/10.1149/1945-7111/ab6c5d',
    link: 'https://doi.org/10.1149/1945-7111/ab6c5d',
    tags: ['Aluminum Wastes', 'Electrocatalyst'],
  },
  {
    id: 'pub-9',
    title: 'Recent Advances in MXene as Electrocatalysts for Sustainable Energy Generation: A Review on Surface Engineering and Compositing of MXene',
    authors: 'Das, Himadri Tanaya, Tamilarasan Elango Balaji, Swapnamoy Dutta, Nigamananda Das, and Thandavarayan Maiyalagan.',
    journal: 'International Journal of Energy Research',
    year: '2022',
    status: 'Published',
    doi: 'https://doi.org/10.1002/er.7847',
    link: 'https://doi.org/10.1002/er.7847',
    tags: ['MXene', 'Electrocatalysts'],
  },
  {
    id: 'pub-8',
    title: 'Advance Technologies in Biodegradable Flexible Solid-State Supercapacitors: A Mini Review on Clean and Sustainable Energy',
    authors: 'Das, Himadri Tanaya, Elango Balaji T, Subhashree Mohapatra, Swapnamoy Dutta, Nigamananda Das, and Mohammed A. Assiri.',
    journal: 'The Chemical Record',
    year: '2024',
    status: 'Published',
    doi: 'https://doi.org/10.1002/tcr.202300226',
    link: 'https://doi.org/10.1002/tcr.202300226',
    tags: ['Solid-State Supercapacitors', 'Biodegradable'],
  },
  {
    id: 'pub-7',
    title: 'Recent Trend of CeO2-Based Nanocomposites Electrode in Supercapacitor: A Review on Energy Storage Applications',
    authors: 'Das, Himadri Tanaya, Elango Balaji, Swapnamoy Dutta, et al.',
    journal: 'Journal of Energy Storage',
    year: '2022',
    status: 'Published',
    doi: 'https://doi.org/10.1016/j.est.2022.104643',
    link: 'https://doi.org/10.1016/j.est.2022.104643',
    tags: ['CeO2-Based Nanocomposites', 'Supercapacitor'],
  },
  {
    id: 'pub-6',
    title: '2D-Layered Graphitic Carbon Nitride Nanosheets for Electrochemical Energy Storage Applications',
    authors: 'Das, Himadri Tanaya, Sreejith P. Babu, Aniruddha Mondal, Nibagani Naresh, T. Elango Balaji, and Nigamananda Das.',
    journal: 'Journal of Power Sources',
    year: '2024',
    status: 'Published',
    doi: 'https://doi.org/10.1016/j.jpowsour.2024.234374',
    link: 'https://doi.org/10.1016/j.jpowsour.2024.234374',
    tags: ['Carbon Nitride', 'Energy Storage'],
  },
  {
    id: 'pub-5',
    title: 'Recent Trends in Bimetallic Oxides and Their Composites as Electrode Materials for Supercapacitor Applications',
    authors: 'Balaji, T. Elango, Himadri Tanaya Das, and T. Maiyalagan.',
    journal: 'ChemElectroChem',
    year: '2021',
    status: 'Highly Cited',
    citations: '215+',
    doi: 'https://doi.org/10.1002/celc.202100098',
    link: 'https://doi.org/10.1002/celc.202100098',
    tags: ['Bimetallic Oxides', 'Supercapacitor', 'ChemElectroChem', 'Highly Cited'],
  },
  {
    id: 'pub-4',
    title: 'Dual-Functional Surface Engineering of Single-Crystal NMC Cathodes via Residue-to-Coating Conversion for Enhanced Interface Stability',
    authors: 'Ahmed, Shadab Ali, Tripti Agnihotri, Ashok Ranjan, et al.',
    journal: 'Small',
    year: '2026',
    status: 'Published',
    doi: 'https://doi.org/10.1002/smll.202506613',
    link: 'https://doi.org/10.1002/smll.202506613',
    tags: ['NMC Cathodes', 'Surface Engineering'],
  },
  {
    id: 'pub-3',
    title: 'Multifunctional Fluorinated Phosphonate-Based Localized High Concentration Electrolytes for Safer and High-Performance Lithium-Based Batteries',
    authors: 'Agnihotri, Tripti, Tzu-Hsun Chu, Shi-Kai Jiang, et al.',
    journal: 'Energy Storage Materials',
    year: '2024',
    status: 'Published',
    doi: 'https://doi.org/10.1016/j.ensm.2024.103787',
    link: 'https://doi.org/10.1016/j.ensm.2024.103787',
    tags: ['Localized High Concentration Electrolytes', 'Lithium-Based Batteries'],
  },
  {
    id: 'pub-2',
    title: 'Transitioning towards Asymmetric Gel Polymer Electrolytes for Lithium Batteries: Progress and Prospects',
    authors: 'Agnihotri, Tripti, Shadab Ali Ahmed, Elango Balaji Tamilarasan, Rehbar Hasan, Wei-Nien Su, and Bing Joe Hwang.',
    journal: 'Advanced Functional Materials',
    year: '2024',
    status: 'Published',
    doi: 'https://doi.org/10.1002/adfm.202311215',
    link: 'https://doi.org/10.1002/adfm.202311215',
    tags: ['Gel Polymer Electrolytes', 'Lithium Batteries'],
  },
  {
    id: 'pub-1',
    title: 'Anion-Trapping Composite Gel Electrolyte for Safer and More Stable Anode-Free Lithium-Metal Batteries',
    authors: 'Agnihotri, Tripti, Shadab Ali Ahmed, Elango Balaji Tamilarasan, et al.',
    journal: 'Chemical Engineering Journal',
    year: '2024',
    status: 'Published',
    doi: 'https://doi.org/10.1016/j.cej.2024.149608',
    link: 'https://doi.org/10.1016/j.cej.2024.149608',
    tags: ['Anode-Free', 'Lithium-Metal Batteries', 'Composite Gel Electrolyte'],
  }
];

export const defaultGrants: GrantItem[] = [
  {
    id: 'grant-nstc-150m',
    title: 'National Science and Technology Council (NSTC) Strategic Research Grant',
    amount: 'NT$ 150M (~€4.0M)',
    agency: 'NSTC, Taiwan',
    role: 'Key Proposal Contributor & Scientific Visualizer',
    description:
      'Major research grant supporting advanced battery diagnostics, operando characterization facilities, and clean energy storage initiatives in Taiwan.',
    details:
      'Contributed to the successful acquisition of this landmark grant through strategic technical brainstorming, methodology formulation, and creation of publication-quality 3D scientific schematics and mechanism illustrations.',
  },
  {
    id: 'grant-libest-27m',
    title: 'LiBEST³ Taiwan-Germany Bilateral Collaborative Research Grant',
    amount: 'NT$ 27M (~€800k)',
    agency: 'Taiwan-Germany Bilateral Research Consortium',
    role: 'Concept Formulator & Technical Illustrator',
    description:
      'International research consortium bridging top battery research groups in Taiwan and Germany, partnering with renowned battery pioneer Prof. Martin Winter.',
    details:
      'Formulated core scientific hypotheses, diagnostic workflows, and high-resolution technical illustrations for the joint proposal focusing on advanced lithium-sulfur and solid-state battery systems.',
  },
  {
    id: 'grant-nsrrc-beamtime',
    title: 'NSRRC Synchrotron Competitive Beamtime Allocations',
    amount: 'Multiple Beamline Allocations',
    agency: 'National Synchrotron Radiation Research Center (NSRRC)',
    role: 'Lead Proposal Author & Experiment Manager',
    description:
      'Secured highly competitive beamtime allocations on TLS-16A (Tender X-ray) and TPS-32A (High-Energy X-ray Nanoprobe / TXM).',
    details:
      'Led proposal development, experimental safety protocols, custom cell integration, and high-throughput data collection campaigns for real-time operando XAS and nanoscale TXM imaging of battery electrodes.',
  },
  {
    id: 'grant-india-student',
    title: 'Government of India Student Project Scheme Research Grant',
    amount: 'Master’s Project Funding',
    agency: 'Tamil Nadu State Council for Science and Technology, Govt. of India',
    role: 'Principal Student Investigator',
    description:
      'Competitive research grant for master’s dissertation on sustainable recovery and reuse of functional electronic waste.',
    details:
      'Successfully funded dissertation on the extraction, purification, and reuse of CuO from discarded SIM cards as active electrode materials for high-performance supercapacitors.',
  },
];

export const defaultPresentations: PresentationItem[] = [
  {
    id: 'pres-1',
    title: 'Operando Synchrotron Insights into Li2S Cathode Activation & Degradation',
    event: 'SEED Symposium 2026',
    year: '2026',
    details:
      'Presented core doctoral breakthroughs on multimodal operando synchrotron diagnostics in Li-S batteries; participated in panel discussions with world-renowned battery expert Prof. Martin Winter.',
  },
  {
    id: 'pres-2',
    title: 'Thermal Treatment of LiCoO2 into Bifunctional Electrocatalysts for Metal-Air Systems',
    event: 'The Electrochemical Society (ECS) Meetings 2021',
    year: '2021',
    details:
      'Presented findings on recycling and thermally converting spent cathode materials into bifunctional oxygen redox electrocatalysts for metal-air battery applications.',
  },
  {
    id: 'pres-3',
    title: 'Multimodal In-Situ/Operando Characterization of Next-Generation Battery Chemistries',
    event: 'International Battery & Synchrotron Seminars',
    year: '2022 — 2025',
    details:
      'Presented at 6 international conferences and 3 seminal symposiums across Taiwan and Asia, demonstrating real-time TXM tomography and beamline operando cell designs.',
  },
];

export const defaultSkills: SkillItem[] = [
  // Electrochemical Diagnostics
  { name: 'CC / CV Cycling & Testing', category: 'diagnostics', level: 'Expert', years: '6 yrs' },
  { name: 'EIS (Impedance Spectroscopy)', category: 'diagnostics', level: 'Expert', years: '5 yrs' },
  { name: 'GITT Titration Kinetics', category: 'diagnostics', level: 'Expert', years: '5 yrs' },
  { name: 'Cyclic & Linear Voltammetry', category: 'diagnostics', level: 'Expert', years: '6 yrs' },
  { name: 'Isothermal Calorimetry', category: 'diagnostics', level: 'Advanced', years: '3 yrs' },

  // Characterization (In-Situ / Operando)
  { name: 'Synchrotron-XAS (X-ray Absorption)', category: 'characterization', level: 'Expert', years: '4 yrs' },
  { name: 'TXM (Transmission X-ray Microscopy)', category: 'characterization', level: 'Expert', years: '4 yrs' },
  { name: 'HR-XRD (High-Resolution XRD)', category: 'characterization', level: 'Expert', years: '5 yrs' },
  { name: 'In-Situ & Confocal Raman', category: 'characterization', level: 'Expert', years: '4 yrs' },
  { name: 'Confocal Optical Microscopy (OM)', category: 'characterization', level: 'Advanced', years: '4 yrs' },

  // Electrode Synthesis & Assembly
  { name: 'Doctor Blade Slurry Coating', category: 'synthesis', level: 'Expert', years: '6 yrs' },
  { name: 'Hydrothermal & Solvothermal Synthesis', category: 'synthesis', level: 'Expert', years: '5 yrs' },
  { name: 'Wet Chemical & Nanomaterial Synthesis', category: 'synthesis', level: 'Expert', years: '6 yrs' },
  { name: 'Operando Coin & Optical Cell Assembly', category: 'synthesis', level: 'Expert', years: '5 yrs' },
  { name: 'KP Cells for Solid-State Batteries', category: 'synthesis', level: 'Advanced', years: '3 yrs' },
  { name: 'Glovebox Handling & Inert Atmosphere', category: 'synthesis', level: 'Expert', years: '6 yrs' },

  // Computation & Visualization
  { name: 'Machine Learning (Battery Safety)', category: 'computation', level: 'Advanced', years: '3 yrs' },
  { name: 'Blender (3D Modeling & Animation)', category: 'computation', level: 'Expert', years: '4 yrs' },
  { name: 'Blender Geometry Nodes', category: 'computation', level: 'Advanced', years: '3 yrs' },
  { name: 'Scientific Illustration & Cover Art', category: 'computation', level: 'Expert', years: '4 yrs' },
  { name: 'Python Data Analysis (NumPy, SciPy)', category: 'computation', level: 'Advanced', years: '4 yrs' },

  // Core Domains & Competencies
  { name: 'Lithium-Sulfur (Li-S) Batteries', category: 'domains', level: 'Expert', years: '5 yrs' },
  { name: 'Anode-Free Lithium Metal Cells', category: 'domains', level: 'Expert', years: '4 yrs' },
  { name: 'Electrocatalysis & Redox Kinetics', category: 'domains', level: 'Expert', years: '5 yrs' },
  { name: 'Cross-Functional Team Collaboration', category: 'domains', level: 'Expert', years: '6 yrs' },
  { name: 'Beamline Campaign Leadership', category: 'domains', level: 'Expert', years: '4 yrs' },
];

export const defaultExperiences: ExperienceItem[] = [
  {
    id: 'exp-seed-taiwan-tech',
    role: 'Doctoral Researcher',
    company: 'SEED Center, Taiwan Tech',
    companyUrl: 'https://www.ch.ntust.edu.tw',
    period: 'Feb 2022 — July 2026',
    location: 'Taipei, Taiwan',
    type: 'Doctoral Research',
    description:
      'Conducting pioneering doctoral research on Lithium-Sulfur (Li-S) battery degradation mechanisms, operando synchrotron diagnostics, and machine learning safety frameworks under the supervision of National Chair Professor Bing Joe Hwang.',
    achievements: [
      'Identified the root cause of an initial degradation and mapped the structure-property relationships of a Li2S composite cathode via advanced in-situ/operando techniques; modified electrolyte formulations to verify the model and minimize efficiency losses.',
      'Visualized the Li2S cathode evolution for the first time during active cell cycling via operando Transmission X-ray Microscopy (TXM).',
      'Decoupled the influence of the applied electric field on the catalyst material and its corresponding material interactions within the Li2S composite cathode in Li-S batteries via advanced operando techniques.',
      'Managed beamtime campaigns at the NSRRC synchrotron facility (beamlines TLS-16A and TPS-32A), analyzing critical electrode interactions and 3D tomography for Li-S and solid-state battery research projects.',
      'Developed machine learning frameworks for battery safety prediction and mastered Blender 3D scientific visualization independently.',
    ],
    skills: [
      'Li-S Batteries',
      'Operando TXM',
      'Synchrotron XAS',
      'HR-XRD',
      'Confocal Raman',
      'Machine Learning',
      'Blender 3D',
      'Electrochemical Diagnostics',
    ],
  },
  {
    id: 'exp-srm-ist',
    role: 'Research Assistant',
    company: 'SRM Institute of Science and Technology (SRM-IST)',
    companyUrl: 'https://www.srmist.edu.in',
    period: 'Sep 2020 — Oct 2021',
    location: 'Chennai, India',
    type: 'Research Assistant',
    description:
      'Engineered advanced electrocatalysts and sustainable electrode materials for metal-air batteries, supercapacitors, and sodium-ion capacitors.',
    achievements: [
      'Modified existing LiCoO2 cathodes into a bifunctional electrocatalyst for oxygen redox mediation in metal-air batteries via controlled thermal treatment.',
      'Recovered and reused Al2O3 from pharmaceutical waste as a high-capacity electrode material for Na-ion capacitors.',
      'Earned "Highly Cited Paper" recognition from ChemElectroChem (Wiley) for an exhaustive literature survey on electrode materials for supercapacitors, accumulating over 215 citations.',
    ],
    skills: [
      'Bifunctional Electrocatalysis',
      'LiCoO2 Recycling',
      'Na-ion Capacitors',
      'Supercapacitor Materials',
      'Waste Upcycling',
      'Materials Characterization',
    ],
  },
];

export const defaultEducation: EducationItem[] = [
  {
    id: 'edu-phd',
    degree: 'Ph.D. in Chemical Engineering',
    institution: 'National Taiwan University of Science and Technology (Taiwan Tech)',
    period: 'Feb 2022 — July 2026',
    location: 'Taipei, Taiwan',
    dissertation: 'Mechanistic insights into Li-S batteries via multimodal operando techniques.',
    advisors:
      'Prof. Bing Joe Hwang, National Chair Professor, SEED Center; internationally advised by Prof. Martin Winter (MEET, Germany), Prof. A. Manthiram (UT Austin), and Prof. Hongjie Dai (Stanford).',
    details:
      'Focused on operando synchrotron diagnostics, Li-S battery interfaces, catalyst dynamics, and machine learning models for battery safety prediction.',
  },
  {
    id: 'edu-msc',
    degree: 'Master of Science (M.Sc.) in Chemistry',
    institution: 'Bharathidasan University',
    period: 'June 2018 — May 2020',
    location: 'Tiruchirappalli, Tamil Nadu, India',
    gpa: '7.8 / 10.0',
    dissertation: 'Recovery and Reuse of CuO from SIM Cards for Supercapacitor Applications.',
    details:
      'Awarded student research funding by the Government of India for innovative electronic waste recovery and electrochemical capacitor material synthesis.',
  },
];

export const defaultNews: NewsItem[] = [
  {
    id: 'news-1',
    date: 'March 2026',
    content: 'Delivered presentation on multimodal operando synchrotron diagnostics at the SEED International Energy Materials Symposium 2026 in Taipei.',
    badge: 'Presentation',
  },
  {
    id: 'news-2',
    date: 'February 2025',
    content: 'Our research paper "Probing Li₂S Activation Mechanism in Lithium–Sulfur Batteries via Multimodal Operando Techniques" was accepted in ACS Energy Letters!',
    badge: 'Paper',
  },
  {
    id: 'news-3',
    date: 'January 2025',
    content: 'Review article "Failure mechanisms and scalability of anode-free lithium-metal and lithium-sulfur batteries" published in Nature Reviews Clean Technology.',
    badge: 'Review',
  },
  {
    id: 'news-4',
    date: 'December 2024',
    content: 'Completed manuscript under review at Journal of the American Chemical Society (JACS) investigating electrocatalytic dynamics in Li-S batteries.',
    badge: 'Preprint',
  },
  {
    id: 'news-5',
    date: '2024',
    content: 'Contributed to securing competitive NT$ 150M (~€4M) research grant from the National Science and Technology Council (NSTC) Taiwan.',
    badge: 'Grant',
  },
  {
    id: 'news-6',
    date: '2023',
    content: 'Active collaborator on the Taiwan-Germany bilateral grant (LiBEST³) with Prof. Martin Winter (MEET Battery Research Center, University of Münster).',
    badge: 'Collaboration',
  },
];

export const defaultArticles: ArticleItem[] = [
  {
    id: 'art-operando-txm',
    title: 'Real-Time Operando Synchrotron Imaging of Battery Electrodes: Overcoming Ex-Situ Pitfalls',
    excerpt:
      'Why post-mortem battery analysis misses transient degradation states, and how synchrotron Transmission X-ray Microscopy (TXM) captures live phase transitions at 30nm spatial resolution.',
    date: 'February 2025',
    readTime: '6 min read',
    tags: ['Synchrotron-TXM', 'Operando Diagnostics', 'Li-S Batteries'],
  },
  {
    id: 'art-ml-battery-safety',
    title: 'Predicting Battery Thermal Runaway with Machine Learning on Early EIS Signatures',
    excerpt:
      'A deep dive into training neural networks and gradient-boosted trees on complex impedance spectra and isothermal calorimetry data to detect failure risk before catastrophic failure occurs.',
    date: 'January 2025',
    readTime: '8 min read',
    tags: ['Machine Learning', 'Battery Safety', 'Calorimetry', 'EIS'],
  },
  {
    id: 'art-blender-sciviz',
    title: 'Bridging Science and Communication: Crafting 3D Nanomaterial Visualizations in Blender',
    excerpt:
      'How battery scientists can leverage Blender Geometry Nodes and procedural texturing to render publication-worthy atomistic mechanisms for high-impact journal covers and grant proposals.',
    date: 'December 2024',
    readTime: '5 min read',
    tags: ['Scientific Illustration', 'Blender 3D', 'Grant Proposals'],
  },
];
