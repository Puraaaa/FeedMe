// RSS源接口
// name: 信息源名称
// url: RSS URL地址
// category: 分类名称

/**
 * @typedef {object} RssSource
 * @property {string} name - 信息源名称
 * @property {string} url - RSS URL地址
 * @property {string} category - 分类名称
 */

// 默认配置
export const config = {
  sources: [
    {
      name: "Hacker News 近期最佳",
      url: "https://hnrss.org/best",
      category: "科技资讯",
    },
    {
      name: "Hacker News 历史每日前十",
      url: "https://rsshub.rssforever.com/github/issue/headllines/hackernews-daily",
      category: "科技资讯",
    },
    {
      name: "Github 今日热门",
      url: "https://rsshub.rssforever.com/github/trending/daily/any",
      category: "代码项目",
    },
    {
      name: "Github 近一周热门",
      url: "https://rsshub.rssforever.com/github/trending/weekly/any",
      category: "代码项目",
    },
    {
      name: "Hugging Face 每日论文",
      url: "https://rsshub.rssforever.com/huggingface/daily-papers",
      category: "科研论文",
    },
    {
      name: "Hugging Face 博客",
      url: "https://rsshub.rssforever.com/huggingface/blog",
      category: "技术博客",
    },
    {
      name: "Google 开发者博客",
      url: "https://rsshub.rssforever.com/google/developers/en",
      category: "技术博客",
    },
    {
      name: "Google 研究博客",
      url: "https://rsshub.rssforever.com/google/research",
      category: "技术博客",
    },
    // {
    //   name: "Product Hunt 今日热门",
    //   url: "https://rsshub.rssforever.com/producthunt/today",
    //   category: "产品资讯",
    // },
    {
      name: "LINUX DO 今日热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=daily",
      category: "论坛",
    },
    {
      name: "LINUX DO 近一周热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=weekly",
      category: "论坛",
    },
    {
      name: "LINUX DO 近一月热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=monthly",
      category: "论坛",
    },
    {
      name: "V2EX 今日热门",
      url: "https://rsshub.rssforever.com/v2ex/topics/hot",
      category: "论坛",
    },
    {
      name: "Bangumi 近一月热门",
      url: "https://rsshub.rssforever.com/bangumi.tv/anime/followrank",
      category: "番剧资讯",
    },
  {
    "name": "Nature Machine Intelligence",
    "url": "https://www.nature.com/natmachintell.rss",
    "category": "Area ‣ AI & CS"
  },
  {
    "name": "Nature Computational Science",
    "url": "https://www.nature.com/natcomputsci.rss",
    "category": "Area ‣ AI & CS"
  },
  {
    "name": "Mathematics and computing : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/mathematics-and-computing/nature.rss",
    "category": "Area ‣ AI & CS"
  },
  {
    "name": "Computational biology and bioinformatics : Nature Communications subject feeds",
    "url": "https://www.nature.com/subjects/computational-biology-and-bioinformatics/ncomms.rss",
    "category": "Area ‣ Bio ‣ Bioinformatics"
  },
  {
    "name": "Computational science : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/computational-science/nature.rss",
    "category": "Area ‣ Bio ‣ Bioinformatics"
  },
  {
    "name": "Cancer : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/cancer/nature.rss",
    "category": "Area ‣ Bio ‣ Cancer"
  },
  {
    "name": "Nature Reviews Cancer",
    "url": "https://www.nature.com/nrc.rss",
    "category": "Area ‣ Bio ‣ Cancer"
  },
  {
    "name": "Nature Cancer",
    "url": "https://www.nature.com/natcancer.rss",
    "category": "Area ‣ Bio ‣ Cancer"
  },
  {
    "name": "Drug discovery : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/drug-discovery/nature.rss",
    "category": "Area ‣ Bio ‣ Drug"
  },
  {
    "name": "Nature Reviews Drug Discovery",
    "url": "https://www.nature.com/nrd.rss",
    "category": "Area ‣ Bio ‣ Drug"
  },
  {
    "name": "Science Translational Medicine",
    "url": "https://rss.diffbot.com/rss?url=https://www.science.org/journal/stm",
    "category": "Area ‣ Bio ‣ Drug"
  },
  {
    "name": "npj Digital Medicine",
    "url": "https://www.nature.com/npjdigitalmed.rss",
    "category": "Area ‣ Bio ‣ Drug"
  },
  {
    "name": "Communications Medicine",
    "url": "https://www.nature.com/commsmed.rss",
    "category": "Area ‣ Bio ‣ Drug"
  },
  {
    "name": "npj Genomic Medicine",
    "url": "https://www.nature.com/npjgenmed.rss",
    "category": "Area ‣ Bio ‣ Drug"
  },
  {
    "name": "Experimental & Molecular Medicine",
    "url": "https://www.nature.com/emm.rss",
    "category": "Area ‣ Bio ‣ Drug"
  },
  {
    "name": "Nature Medicine",
    "url": "https://www.nature.com/nm.rss",
    "category": "Area ‣ Bio ‣ Drug"
  },
  {
    "name": "Diseases : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/diseases/nature.rss",
    "category": "Area ‣ Bio ‣ Medical"
  },
  {
    "name": "Medical research : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/medical-research/nature.rss",
    "category": "Area ‣ Bio ‣ Medical"
  },
  {
    "name": "Nature Reviews Disease Primers",
    "url": "https://www.nature.com/nrdp.rss",
    "category": "Area ‣ Bio ‣ Medical"
  },
  {
    "name": "JAMA Neurology Author Interviews",
    "url": "https://jamaneurologyauthorinterviews.libsyn.com/rss",
    "category": "Area ‣ Bio ‣ Medical"
  },
  {
    "name": "JAMA Oncology Online First",
    "url": "https://jamanetwork.com/rss/site_159/onlineFirst_174.xml",
    "category": "Area ‣ Bio ‣ Medical"
  },
  {
    "name": "The Lancet | The best science for better lives",
    "url": "https://rss.diffbot.com/rss?url=https://www.thelancet.com/",
    "category": "Area ‣ Bio ‣ Medical"
  },
  {
    "name": "JAMA Psychiatry Author Interviews",
    "url": "https://jamapsychiatryauthorinterviews.libsyn.com/rss",
    "category": "Area ‣ Bio ‣ Medical"
  },
  {
    "name": "JAMA Current Issue",
    "url": "https://jamanetwork.com/rss/site_3/67.xml",
    "category": "Area ‣ Bio ‣ Medical"
  },
  {
    "name": "Biochemistry : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/biochemistry/nature.rss",
    "category": "Area ‣ Bio ‣ Others"
  },
  {
    "name": "Molecular biology : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/molecular-biology/nature.rss",
    "category": "Area ‣ Bio ‣ Others"
  },
  {
    "name": "Biological techniques : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/biological-techniques/nature.rss",
    "category": "Area ‣ Bio ‣ Others"
  },
  {
    "name": "Biophysics : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/biophysics/nature.rss",
    "category": "Area ‣ Bio ‣ Others"
  },
  {
    "name": "Nature Chemical Biology",
    "url": "https://www.nature.com/nchembio.rss",
    "category": "Area ‣ Bio ‣ Others"
  },
  {
    "name": "Nature Cell Biology",
    "url": "https://www.nature.com/ncb.rss",
    "category": "Area ‣ Bio ‣ Others"
  },
  {
    "name": "Nature Biotechnology",
    "url": "https://www.nature.com/nbt.rss",
    "category": "Area ‣ Bio ‣ Others"
  },
  {
    "name": "Nature Biomedical Engineering",
    "url": "https://www.nature.com/natbiomedeng.rss",
    "category": "Area ‣ Bio ‣ Others"
  },
  {
    "name": "Nature Reviews Bioengineering",
    "url": "https://www.nature.com/natrevbioeng.rss",
    "category": "Area ‣ Bio ‣ Others"
  },
  {
    "name": "Nature Reviews Molecular Cell Biology",
    "url": "https://www.nature.com/nrm.rss",
    "category": "Area ‣ Bio ‣ Others"
  },
  {
    "name": "HBR.org",
    "url": "http://feeds.hbr.org/harvardbusiness/",
    "category": "Area ‣ Business"
  },
  {
    "name": "Aeon | a world of ideas",
    "url": "https://aeon.co/feed.rss",
    "category": "Area ‣ Culture"
  },
  {
    "name": "Open Culture",
    "url": "https://www.openculture.com/feed/rss2",
    "category": "Area ‣ Culture"
  },
  {
    "name": "Psyche | on the human condition",
    "url": "https://rss.diffbot.com/rss?url=https://psyche.co/",
    "category": "Area ‣ Culture"
  },
  {
    "name": "The long read | News",
    "url": "https://rss.diffbot.com/rss?url=https://www.theguardian.com/news/series/the-long-read",
    "category": "Area ‣ Culture"
  },
  {
    "name": "The Harvard Gazette",
    "url": "newsletter:689462:gazette@u.harvard.edu",
    "category": "Area ‣ Culture"
  },
  {
    "name": "Undark Magazine",
    "url": "newsletter:689462:info@undark.org",
    "category": "Area ‣ Culture"
  },
  {
    "name": "Books | The Guardian",
    "url": "https://rss.diffbot.com/rss?url=https://www.theguardian.com/books",
    "category": "Area ‣ Literature"
  },
  {
    "name": "Book Reviews, Excerpts,  Audio Books and Reader Exclusives",
    "url": "https://rss.diffbot.com/rss?url=https://www.huffpost.com/entertainment/books",
    "category": "Area ‣ Literature"
  },
  {
    "name": "Book Review",
    "url": "https://rss.diffbot.com/rss?url=https://www.nytimes.com/section/books/review",
    "category": "Area ‣ Literature"
  },
  {
    "name": "Home",
    "url": "https://rss.diffbot.com/rss?url=https://www.nybooks.com/",
    "category": "Area ‣ Literature"
  },
  {
    "name": "Nature Computational Science",
    "url": "https://www.nature.com/natcomputsci.rss",
    "category": "Area ‣ Math"
  },
  {
    "name": "Mathematics and computing : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/mathematics-and-computing/nature.rss",
    "category": "Area ‣ Math"
  },
  {
    "name": "Big Think",
    "url": "https://rss.diffbot.com/rss?url=https://bigthink.com/",
    "category": "Area ‣ Mind"
  },
  {
    "name": "The MIT Press Reader",
    "url": "https://thereader.mitpress.mit.edu/feed/",
    "category": "Area ‣ Mind"
  },
  {
    "name": "The Science of Happiness",
    "url": "https://rss.diffbot.com/rss?url=https://greatergood.berkeley.edu/podcasts/series/the_science_of_happiness",
    "category": "Area ‣ Mind"
  },
  {
    "name": "Articles & More",
    "url": "https://rss.diffbot.com/rss?url=https://greatergood.berkeley.edu/article",
    "category": "Area ‣ Mind"
  },
  {
    "name": "Scientific community : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/scientific-community/nature.rss",
    "category": "Area ‣ Science"
  },
  {
    "name": "Nature Methods",
    "url": "https://www.nature.com/nmeth.rss",
    "category": "Area ‣ Science"
  },
  {
    "name": "Scientific American Content: Global",
    "url": "http://rss.sciam.com/ScientificAmerican-Global",
    "category": "Area ‣ Science"
  },
  {
    "name": "Nature",
    "url": "https://www.nature.com/nature.rss",
    "category": "Area ‣ Science"
  },
  {
    "name": "Science Advances | AAAS",
    "url": "https://rss.diffbot.com/rss?url=https://www.science.org/journal/sciadv",
    "category": "Area ‣ Science"
  },
  {
    "name": "Quanta Magazine",
    "url": "https://api.quantamagazine.org/feed/",
    "category": "Area ‣ Science"
  },
  {
    "name": "Science | The Guardian",
    "url": "https://rss.diffbot.com/rss?url=https://www.theguardian.com/science",
    "category": "Area ‣ Science"
  },
  {
    "name": "Science & technology",
    "url": "https://rss.diffbot.com/rss?url=https://www.economist.com/science-and-technology",
    "category": "Area ‣ Science"
  },
  {
    "name": "Nature Communications",
    "url": "https://www.nature.com/ncomms.rss",
    "category": "Area ‣ Science"
  },
  {
    "name": "Harvard Gazette",
    "url": "https://news.harvard.edu/gazette/feed/",
    "category": "Area ‣ Science"
  },
  {
    "name": "Undark Magazine",
    "url": "newsletter:689462:info@undark.org",
    "category": "Area ‣ Science"
  },
  {
    "name": "Nature Physics",
    "url": "https://www.nature.com/nphys.rss",
    "category": "Area ‣ Science"
  },
  {
    "name": "AAAS: Science: Table of Contents",
    "url": "https://www.science.org/action/showFeed?feed=rss&jc=science&type=etoc",
    "category": "Area ‣ Science"
  },
  {
    "name": "Google DeepMind Blog",
    "url": "https://deepmind.google/blog/rss.xml",
    "category": "Area ‣ Technology"
  },
  {
    "name": "OpenAI Blog",
    "url": "https://openai.com/blog/rss.xml",
    "category": "Area ‣ Technology"
  },
  {
    "name": "MIT Technology Review",
    "url": "https://www.technologyreview.com/feed/",
    "category": "Area ‣ Technology"
  },
  {
    "name": "Artificial Intelligence (AI) Research and Opinion Articles from JAMA Network",
    "url": "https://rss.diffbot.com/rss?url=https://jamanetwork.com/channels/ai",
    "category": "Project ‣ Bio ✕ AI"
  },
  {
    "name": "Doctor Penguin",
    "url": "newsletter:689462:noreply@doctorpenguin.com",
    "category": "Project ‣ Bio ✕ AI"
  },
  {
    "name": "量子位 | 追踪人工智能新趋势，报道科技行业新突破",
    "url": "https://rss.diffbot.com/rss?url=https://www.qbitai.com/",
    "category": "Project ‣ News"
  },
  {
    "name": "少数派",
    "url": "https://sspai.com/feed",
    "category": "Project ‣ News"
  },
  {
    "name": "MIT News",
    "url": "https://news.mit.edu/rss/feed",
    "category": "Project ‣ News"
  },
  {
    "name": "Undark Magazine",
    "url": "newsletter:689462:info@undark.org",
    "category": "Project ‣ News"
  },
  {
    "name": "Travel",
    "url": "https://rss.diffbot.com/rss?url=https://www.nytimes.com/section/travel",
    "category": "Project ‣ Relax"
  },
  {
    "name": "To the Lighthouse",
    "url": "https://owlswims.com/feed/",
    "category": "Project ‣ Relax"
  },
  {
    "name": "Immunology : nature.com subject feeds",
    "url": "https://www.nature.com/subjects/immunology/nature.rss",
    "category": "Area ‣ Bio ‣ Immune"
  },
  {
    "name": "Nature Reviews Immunology",
    "url": "https://www.nature.com/nri.rss",
    "category": "Area ‣ Bio ‣ Immune"
  },
  {
    "name": "Science Immunology | AAAS",
    "url": "https://rss.diffbot.com/rss?url=https://www.science.org/journal/sciimmunol",
    "category": "Area ‣ Bio ‣ Immune"
  },
  {
    "name": "Nature Immunology",
    "url": "https://www.nature.com/ni.rss",
    "category": "Area ‣ Bio ‣ Immune"
  }
  ],
  maxItemsPerFeed: 30,
  dataPath: "./data",
}

export const defaultSource = config.sources[0]

/**
 * @param {string} url
 * @returns {RssSource | undefined}
 */
export function findSourceByUrl(url) {
  return config.sources.find((source) => source.url === url)
}

export function getSourcesByCategory() {
  return config.sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {})
}
